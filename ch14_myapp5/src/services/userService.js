import { getUsers, getUser, getUserById, getUserByEmail, addUser, editUser, deleteUser } from "../model/index"
const userService = {
  async getUsers() {
    const response = await getUsers();
    return response;
  },
  async register(userData) {
    const response = await addUser(userData);
    return response;
  },
  async getUser(username){
    try {
      const userResponse = await getUser(username); // 사용자 정보 가져오기
      return userResponse;
    } catch (error) {
      throw error; // 에러 발생 시 상위 호출자에게 전달
    }
  },
  async getUserProfile(id) {
    const response = await getUserById(id);
    return response;
  },
  async checkUsername(username) {
    const userResponse = await getUser(username); 
    return userResponse;
  },
  async checkEmail(email) {
    const response = await getUserByEmail(email);
    return response;
  },
  async updateUser(id, updatedUserData) {
    const response = await editUser(id, updatedUserData);
    return response;
  },
  async deleteUser(id) {
    await deleteUser(id);
  },
};
export default userService;