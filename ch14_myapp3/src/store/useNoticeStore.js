import { defineStore } from 'pinia';
import model from '../model/index';
const { addNotice, editNotice, deleteNotice, getNotices, getNoticeById } = model;
export const useNoticeStore = defineStore('notice', {
  state: () => ({
    notices: [],
    selectedNotice: { title: '', content: '', hits: 0, createdAt: '', updatedAt: '' }
  }),
  actions: {
    async fetchNotices() {
      const response = await getNotices();
      this.notices = response;
    },
    async fetchNoticeById(id) {
      const response = await getNoticeById(id);
      if (!response) {
        throw new Error(`Notice with id ${id} not found`);
      }
      this.selectedNotice = response;
      return response;
    },
    async addNotice(notice) {
      await addNotice(notice);
      this.fetchNotices();
    },
    async updateNotice(id, notice) {
      await editNotice(id, notice);
      this.fetchNotices();
    },
    async deleteNotice(id) {
      await deleteNotice(id);
      this.fetchNotices();
    }
  }
});
