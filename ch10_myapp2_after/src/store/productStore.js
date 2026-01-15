import { defineStore } from 'pinia';
export const useProductStore = defineStore('product', {
  state: () => ({
    dataList: [],
    currentData: null,
  }),
  actions: { //자료실 목록 가져오기
    async fetchDataList() {
      try {
        const response = await fetch('/dataroom/list');
        if (!response.ok) throw new Error('Failed to fetch data list');
        const data = await response.json();
        this.dataList = data;
      } catch (error) {
        console.error('자료 목록을 가져오는 중 오류 발생:', error);
      }
    },
    async fetchDataDetail(dno) {  //특정 자료글 상세 정보 가져오기
      try {
        const response = await fetch(`/dataroom/detail/${dno}`);
        if (!response.ok) throw new Error('Failed to fetch data detail');
        const data = await response.json();
        this.currentData = data;
      } catch (error) {
        console.error('자료 상세 정보를 가져오는 중 오류 발생:', error);
      }
    },
    async insertData(formData) {   //자료 등록하기
      try {
        const response = await fetch('/dataroom/insert', {
          method: 'POST', body: formData,
        });
        if (!response.ok) throw new Error('Failed to insert data');
        const newData = await response.json();
        this.dataList.push(newData);
      } catch (error) {
        console.error('자료를 등록하는 중 오류 발생:', error);
      }
    },
    async updateData(dno, formData) {   //자료 수정하기
      try {
        const response = await fetch(`/dataroom/update/${dno}`, {
          method: 'PUT', body: formData,
        });
        if (!response.ok) throw new Error('Failed to update data');
        const updatedData = await response.json();
        const index = this.dataList.findIndex((data) => data.dno === updatedData.dno);
        if (index !== -1) {
          this.dataList.splice(index, 1, updatedData);
        }
        this.currentData = updatedData;
      } catch (error) {
        console.error('자료를 수정하는 중 오류 발생:', error);
      }
    },
    async deleteData(dno) {   //자료 삭제하기
      try {
        const response = await fetch(`/dataroom/delete/${dno}`, {
          method: 'DELETE',
        });
        if (!response.ok) throw new Error('Failed to delete data');
        this.dataList = this.dataList.filter((data) => data.dno !== dno);
      } catch (error) {
        console.error('자료를 삭제하는 중 오류 발생:', error);
      }
    },
  },
});