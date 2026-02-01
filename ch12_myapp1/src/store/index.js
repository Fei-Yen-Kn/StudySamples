import { defineStore } from "pinia";
import axios from "axios";

export const useMainStore = defineStore("main", {
  state: () => ({
    boards: [],
    boardDetail: {},
    questions: [],
    questionDetail: {},
    dataRoomList: [],
    dataRoomDetail: {},
    products: [],
    productDetail: {},
    bds: [],
    qas: [],
    drs: [],
    pds: [],
  }),

  actions: {
    async fetchBoards() {
      // 공지사항 목록 가져오기
      try {
        const response = await axios.get("http://localhost:3000/boards/list");
        this.boards = response.data;
      } catch (error) {
        console.error("글 목록 읽기 실패", error);
      }
    },
    async fetchBoardDetail(no) {
      // 공지사항 상세 정보 가져오기
      try {
        const response = await axios.get(
          `http://localhost:3000/boards/detail/${no}`
        );
        this.boardDetail = response.data;
      } catch (error) {
        console.error("글 읽기 실패", error);
      }
    },
    async insertBoard(boardData) {
      // 공지사항 등록
      try {
        await axios.post("http://localhost:3000/boards/insert", boardData);
        await this.fetchBoards(); // 목록 새로고침
      } catch (error) {
        console.error("글 등록 실패", error);
      }
    },
    async deleteBoard(no) {
      // 공지사항 삭제
      try {
        await axios.delete(`http://localhost:3000/boards/delete/${no}`);
        await this.fetchBoards(); // 목록 새로고침
      } catch (error) {
        console.error("글 삭제 실패", error);
      }
    },
    async updateBoard(no, updatedData) {
      //공지사항 수정
      try {
        await axios.put(
          `http://localhost:3000/boards/update/${no}`,
          updatedData
        );
        const boardIndex = this.boards.findIndex((board) => board.no === no);
        if (boardIndex !== -1) {
          this.boards[boardIndex] = {
            ...this.boards[boardIndex],
            ...updatedData,
          };
        }
      } catch (error) {
        console.error("글 수정 실패", error);
      }
    },
    async fetchQuestions() {
      try {
        const response = await axios.get("http://localhost:3000/qna/list");
        this.questions = response.data;
      } catch (error) {
        console.error("글 목록 읽기 실패", error);
      }
    },
    async fetchQuestionDetail(qno) {
      try {
        const response = await axios.get(
          `http://localhost:3000/qna/detail/${qno}`
        );
        this.questionDetail = response.data;
      } catch (error) {
        console.error("글 읽기 실패", error);
      }
    },
    async deleteQuestion(qno) {
      try {
        await axios.delete(`http://localhost:3000/qna/delete/${qno}`);
        this.questions = this.questions.filter((q) => q.qno !== qno);
      } catch (error) {
        console.error("글 삭제 실패", error);
      }
    },
    async insertQuestion(questionData) {
      try {
        await axios.post("http://localhost:3000/qna/insert", questionData);
        await this.fetchQuestions();
      } catch (error) {
        console.error("질문 등록 실패", error);
      }
    },
    async updateQuestion(qno, updatedData) {
      try {
        await axios.put(`http://localhost:3000/qna/update/${qno}`, updatedData);
        await this.fetchQuestionDetail(qno);
      } catch (error) {
        console.error("글 수정 실패", error);
      }
    },
    async insertAnswer(answerData) {
      try {
        await axios.post(
          `http://localhost:3000/qna/answer/insert/${answerData.parno}`,
          answerData
        );
        await this.fetchQuestions();
      } catch (error) {
        console.error("답변 등록 실패", error);
      }
    },
    async fetchDataRoomList() {
      try {
        const response = await axios.get("http://localhost:3000/dataroom/list");
        this.dataRoomList = response.data;
      } catch (error) {
        console.error("자료실 목록 조회 실패:", error);
      }
    },
    async fetchDataRoomDetail(dno) {
      try {
        const response = await axios.get(
          `http://localhost:3000/dataroom/detail/${dno}`
        );
        this.dataRoomDetail = response.data;
      } catch (error) {
        console.error("자료실 상세 조회 실패:", error);
      }
    },
    async createDataRoom(data) {
      try {
        await axios.post("http://localhost:3000/dataroom/insert", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } catch (error) {
        console.error("자료 등록 실패:", error);
      }
    },
    async updateDataRoom(dno, data) {
      try {
        await axios.put(`http://localhost:3000/dataroom/update/${dno}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } catch (error) {
        console.error("자료 수정 실패:", error);
      }
    },
    async deleteDataRoom(dno) {
      try {
        await axios.delete(`http://localhost:3000/dataroom/delete/${dno}`);
      } catch (error) {
        console.error("자료 삭제 실패:", error);
      }
    },
    async fetchProducts() {
      try {
        const response = await axios.get("http://localhost:3000/products/list");
        this.products = response.data;
      } catch (error) {
        console.error("상품 목록 조회 실패:", error);
      }
    },
    async fetchProductDetail(pno) {
      try {
        const response = await axios.get(
          `http://localhost:3000/products/detail/${pno}`
        );
        this.productDetail = response.data;
      } catch (error) {
        console.error("상품 상세 조회 실패:", error);
      }
    },
    async createProduct(formData) {
      try {
        await axios.post("http://localhost:3000/products/insert", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } catch (error) {
        console.error("상품 등록 실패:", error);
      }
    },
    async updateProduct(pno, formData) {
      try {
        await axios.put(
          `http://localhost:3000/products/update/${pno}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } catch (error) {
        console.error("상품 수정 실패:", error);
      }
    },
    async deleteProduct(pno) {
      try {
        await axios.delete(`http://localhost:3000/products/delete/${pno}`);
      } catch (error) {
        console.error("상품 삭제 실패:", error);
      }
    },
    async initStore() {
      // 초기화 메서드 추가
      await this.fetchBoards(); // 필요한 데이터를 미리 로드
      await this.fetchDataRoomList();
      await this.fetchQuestions();
      await this.fetchProducts();
    },
  },
});
