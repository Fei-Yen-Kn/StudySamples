<template>
  <div class="container">
    <h1>DashBoard</h1>
    <button @click="saveChanges" class="btn btn-primary mb-3">Save Changes</button>
    <hr />
    <div class="row gx-4 gy-4">
      <div class="col-md-6 col-lg-4 d-flex flex-column" v-for="board in boards" :key="board.id">
        <div class="p-3 border bg-light rounded flex-grow-1">
          <h3 class="text-center">{{ board.name }}</h3>
          <button @click="addPost(board)" class="btn btn-success mb-3">Add Post</button>
          <draggable 
            v-model="board.posts" 
            group="posts" 
            item-key="id" 
            class="list-group mt-3"
            @end="onDragEnd(board)"
          >
            <template #item="{ element: post }">
              <li class="list-group-item card mb-3">
                <div class="card-body">
                  <p class="card-text">
                    <strong class="text-muted">#{{ post.position }}</strong>
                  </p>
                  <h5 v-if="!post.isEditing" @click="editPost(post, 'title')">{{ post.title }}</h5>
                  <input 
                    v-if="post.isEditing && post.editingField === 'title'"
                    v-model="post.title"
                    @blur="savePost(post, 'title')"
                    @keyup.enter="savePost(post, 'title')"
                    class="form-control"
                  />
                  <hr />
                  <p v-if="!post.isEditing" @click="editPost(post, 'content')">{{ post.content }}</p>
                  <textarea 
                    v-if="post.isEditing && post.editingField === 'content'"
                    v-model="post.content"
                    @blur="savePost(post, 'content')"
                    @keyup.enter="savePost(post, 'content')"
                    class="form-control"
                  />
                  <button @click="deletePost(board, post)" class="btn btn-danger mt-2">Delete</button>
                </div>
              </li>
            </template>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import useStore from '../store/index'
import draggable from 'vuedraggable'
const store = useStore()
const boards = ref([])
onMounted(async () => {
  try {
    const response = await store.getBoards()
    boards.value = response
  } catch (error) {
    console.error('Error fetching boards and posts:', error)
  }
})
const saveChanges = async () => {
  try {
    const updatedBoards = boards.value.map(board => ({
      id: board.id,
      posts: board.posts.map((post, index) => ({ id: post.id, position: index + 1 }))
    }))
    await store.editBoard(updatedBoards)
    alert('Changes saved successfully!')
  } catch (error) {
    console.error('Error saving changes:', error)
  }
}
const onDragEnd = (board) => {
  board.posts.forEach((post, index) => {
    post.position = index + 1
  })
}
const editPost = (post) => {
  post.isEditing = true
  post.editingField = field
}
const savePost = async (post) => {
  post.isEditing = false
  post.editingField = null
  try {
    await store.editPost(post.id, post)
    console.log(`updated successfully for post ${post.id}`)
  } catch (error) {
    console.error(`Error updating ${post}:`, error)
  }
}
const addPost = (board) => {
  const newPost = {
    title: 'New Post',
    content: 'Content of the new post',
    position: board.posts.length + 1,
    isEditing: true, // Set to true to start editing
    editingField: 'title' // Start editing the title
  }
  board.posts.push(newPost)
}
const deletePost = async (board, post) => {
  try {
    board.posts = board.posts.filter(p => p.id !== post.id)
    await store.deletePost(post.id)
    console.log(`Post ${post.id} deleted successfully`)
  } catch (error) {
    console.error('Error deleting post:', error)
  }
}
</script>