import { defineStore } from 'pinia'
import { useDatabaseStore } from '../model/index'
export const useCommentStore = defineStore('comment', {
  state: () => ({
    comments: [], // 댓글 목록
    postComments: [], // 특정 게시물에 대한 댓글 목록
  }),
  actions: {
    async fetchCommentsByPostId(postId) {     // 특정 게시물의 댓글 조회
      try {
        const database = useDatabaseStore()
        const response = await database.getCommentPostById(postId)
        this.postComments = response
      } catch (error) {
        console.error('Failed to fetch comments by postId:', error)
      }
    },
    async createComment(commentData) {     // 댓글 생성
      try {
        const database = useDatabaseStore()
        const response = await database.addComment(commentData)
        this.postComments.push(response) // 새 댓글 추가
        return response
      } catch (error) {
        console.error('Failed to create comment:', error)
        throw error
      }
    },
    async updateComment(commentId, commentData) {     // 댓글 수정
      try {
        const database = useDatabaseStore()
        const response = await database.editComment(commentId, commentData)
        const index = this.postComments.findIndex(comment => comment.id === parseInt(commentId))
        if (index !== -1) {
          this.postComments[index] = response // 수정된 댓글로 업데이트
        }
        return response
      } catch (error) {
        console.error('Failed to update comment:', error)
        throw error
      }
    },
    async deleteComment(commentId) {     // 댓글 삭제
      try {
        const database = useDatabaseStore()
        await database.deleteComment(commentId)
        this.postComments = this.postComments.filter(comment => comment.id !== parseInt(commentId)) // 삭제된 댓글 제거
      } catch (error) {
        console.error('Failed to delete comment:', error)
      }
    },
  }
})