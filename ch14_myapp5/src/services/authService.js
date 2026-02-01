import { getUser } from "../model/index"

const authService = {
  async login(username) {
    try {
      const response = getUser(username); // 로그인 요청
      return response;
    } catch (error) {
      throw error; // 에러 발생 시 상위 호출자에게 전달
    }
  },
};

export default authService;