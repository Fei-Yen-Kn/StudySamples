import { getReservations, getReservationById, addReservation, editReservation, 
  deleteReservation, getReservationsByCourseId, getReservationsByStudentId, 
  getReaervationsByCourseIdAndStudentId } from "../model/index";
const reservationService = {
  async getAllReservations() {
    const response = await getReservations();
    return response;
  },
  async getReservationById(id) {
    const response = await getReservationById(id);
    return response;
  },
  async createReservation(reservationData) {
    const response = await addReservation(reservationData);
    return response;
  },
  async updateReservation(id, updatedReservationData) {
    const response = await editReservation(id, updatedReservationData);
    return response;
  },
  async deleteReservation(id) {
    await deleteReservation(id);
  },
  async getReservationsByCourseId(courseId) {
    const response = await getReservationsByCourseId(courseId);
    return response;
  },
  async getReservationsByStudentId(studentId) {
    const response = await getReservationsByStudentId(studentId);
    return response;
  },
  async getReaervationsByCourseIdAndStudentId(courseId, studentId) {
    const response = await getReaervationsByCourseIdAndStudentId(courseId, studentId);
    return response;
  },
};
export default reservationService;