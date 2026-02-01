import { defineStore } from 'pinia';
import model from '../model/index';
const { addContent, editContent, deleteContent, getContents, getContentById, getCateByContentId } = model;
export const useContentStore = defineStore('content', {
  state: () => ({
    contents: [],
    galleries: [],
    selectedContent: null,
    selectedGallery: null,
  }),
  actions: {
    async fetchContents() {
      const response = await getContents();
      this.contents = response;
    },
    async fetchContentById(id) {
      const response = await getContentById(id);
      this.selectedContent = response;
      return response;
    },
    async fetchGalleryByContentId(id) {
      try {
        const response = await getCateByContentId(id);
        this.selectedGallery = response || []; // 빈 배열로 초기화
      } catch (error) {
        console.error('Failed to fetch gallery by content ID:', error);
      }
    },
    async addContent(content) {
      await addContent(content);
      this.fetchContents();
    },
    async updateContent(id, content) {
      await editContent(id, content);
      this.fetchContents();
    },
    async deleteContent(id) {
      await deleteContent(id);
      this.fetchContents();
    },
  },
});