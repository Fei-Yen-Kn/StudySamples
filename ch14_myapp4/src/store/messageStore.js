import { defineStore } from 'pinia';
import { useDatabaseStore } from '../model/index'
export const useMessageStore = defineStore('messageStore', {
  state: () => ({
    sentMessages: [],
    receivedMessages: [],
    conversation: [],
  }),

  actions: {
    async fetchSentMessages(senderId) {
      try {
        const database = useDatabaseStore()
        const data = await database.getMessageBySenderId(senderId);
        this.sentMessages = data;
      } catch (error) {
        console.error('Failed to fetch sent messages:', error);
      }
    },

    async fetchReceivedMessages(receiverId) {
      try {
        const database = useDatabaseStore()
        const data = await database. getMessageByReceiverId(receiverId);
        this.receivedMessages = data;
      } catch (error) {
        console.error('Failed to fetch received messages:', error);
      }
    },

    async fetchConversation(senderId, receiverId) {
      try {
        const database = useDatabaseStore()
        const data = await database.getConversation(senderId, receiverId);
        this.conversation = data;
      } catch (error) {
        console.error('Failed to fetch conversation:', error);
      }
    },

    async sendMessage(senderId, receiverId, content) {
      try {
        const database = useDatabaseStore()
        const msg = await database.addMessage(senderId, receiverId, content);
        console.log(msg);
      } catch (error) {
        console.error('Failed to send message:', error);
      }
    },
  },
});