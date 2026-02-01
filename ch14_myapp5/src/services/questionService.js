import { getQuestions, getQuestionById, addQuestion, editQuestion, deleteQuestion, getQuestionsByCourseId } from "../model/index"
const questionService = {
  async getAllQuestions() {
    const response = await getQuestions();
    return response.data;
  },
  async getQuestionById(id) {
    const response = await getQuestionById(id);
    return response.data;
  },
  async createQuestion(questionData) {
    const response = await addQuestion(questionData);
    return response.data;
  },
  async updateQuestion(id, updatedQuestionData) {
    const response = await editQuestion(id, updatedQuestionData);
    return response.data;
  },
  async deleteQuestion(id) {
    await deleteQuestion(id);
  },
  async getQuestionsByCourseId(courseId) {
    const response = await getQuestionsByCourseId(courseId);
    return response.data;
  },
};
export default questionService;