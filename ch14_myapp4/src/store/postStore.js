import { defineStore } from 'pinia'
import { useDatabaseStore } from '../model/index'
export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [],  // 게시물 목록
    currentPost: null,  // 선택된 게시물
    post: {},
  }),
  actions: {
    async fetchPosts() {      // 모든 게시물 조회
      try {
        const database = useDatabaseStore()
        this.posts = await database.posts
      } catch (error) {
        console.error('Failed to fetch posts:', error)
      }
    },
    async fetchPostsByUser(userId) {      // 특정 사용자의 게시물 조회
      try {
        const database = useDatabaseStore()
        this.posts = await database.getPostsByUserId(userId)
      } catch (error) {
        console.error('Failed to fetch user posts:', error)
      }
    },
    async fetchPostById(postId) {      // 게시물 상세 조회
      try {
        const database = useDatabaseStore()
        const response = await database.getPostById(postId)
        this.currentPost = response
        this.post = response
      } catch (error) {
        console.error('Failed to fetch post:', error)
      }
    },
    async createPost(formData) {
      try {
        const database = useDatabaseStore()
        const response = await database.addPost(formData);
        this.posts.push(response); // 새 게시물 추가
      } catch (error) {
        console.error('Failed to create post:', error);
        throw error;
      }
    },
    async updatePost(postId, postData) {     // 게시물 수정
      try {
        const database = useDatabaseStore()
        const response = await database.editPost(postId, postData)
        const index = this.posts.findIndex(post => post.id === parseInt(postId))
        if (index !== -1) {
          this.posts[index] = response // 수정된 게시물로 업데이트
        }
      } catch (error) {
        console.error('Failed to update post:', error)
      }
    },
    async deletePost(postId) {      // 게시물 삭제
      try {
        const database = useDatabaseStore()
        await database.deletePost(postId)
        this.posts = this.posts.filter(post => post.id !== parseInt(postId)) // 게시물 목록에서 삭제
      } catch (error) {
        console.error('Failed to delete post:', error)
      }
    }
  }
})