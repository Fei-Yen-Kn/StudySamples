import { defineStore } from 'pinia';
import { useDatabaseStore } from '../model/index'
export const useChatStore = defineStore('chat', {
  state: () => ({
    chats: [], // 메시지 목록
    msg: {},
    conversation: [], // 두 사용자의 대화 내용
  }),
  actions: {
    async addChat(chat) {
      const database = useDatabaseStore()
    },
    setChats(newChats) {
      this.chats = newChats;
    }
  }
});