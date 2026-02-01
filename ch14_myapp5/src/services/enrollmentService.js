import { getEnrollments, getEnrollmentByStudentIdAndCourseId, getEnrollmentsByStudentId, getEnrollmentById, addEnrollment, editEnrollment, deleteEnrollment, getEnrollmentsByCourseId } from "../model/index"
const enrollmentService = {
  async getAllEnrollments() {
    const response = await getEnrollments('/enrollments');
    return response;
  },
  async getEnrollmentByStudentIdAndCourseId(studentId, courseId) {
    const response = await getEnrollmentByStudentIdAndCourseId(studentId, courseId);
    return response;
  },
  async getEnrollmentsByStudentId(studentId) {
    const response = await getEnrollmentsByStudentId(studentId);
    return response;
  },
  async getEnrollmentsByCourseId(courseId) {
    const response = await getEnrollmentsByCourseId(courseId);
    return response;
  },
  async getEnrollmentById(id) {
    const response = await getEnrollmentById(id);
    return response;
  },
  async createEnrollment(enrollmentData) {
    const response = await addEnrollment(enrollmentData);
    return response;
  },
  async updateEnrollment(id, updatedEnrollmentData) {
    const response = await editEnrollment(id, updatedEnrollmentData);
    return response;
  },
  async deleteEnrollment(id) {
    await deleteEnrollment(id);
  },
};
export default enrollmentService;