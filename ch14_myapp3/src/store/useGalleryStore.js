import { defineStore } from 'pinia';
import model from '../model/index';
const { addGallery, editGallery, deleteGallery, getGallery, getGalleryById } = model;
export const useGalleryStore = defineStore('gallery', {
  state: () => ({
    galleries: [], gallery: {},
    selectedGallery: null, selGallery: null
  }),
  actions: {
    async fetchGalleries() {
      const response = await getGallery();
      this.galleries = response;
    },
    async fetchGalleryById(id) {
      const response = await getGalleryById(id);
      this.selGallery = response;
      return response;
    },
    async addGallery(gallery) {
      console.log("Store Receive: "+gallery.contentId);
      await addGallery(gallery);
      this.fetchGalleries();
    },
    async updateGallery(id, gallery) {
      await editGallery(id, gallery);
      this.fetchGalleries();
    },
    async deleteGallery(id) {
      await deleteGallery(id);
      this.fetchGalleries();
    },
  },
});