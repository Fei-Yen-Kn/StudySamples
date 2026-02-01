import {  getCourses, getLastCourse, getCourseById, getCourseInfoListById, addCourse, editCourse, deleteCourse, editCourseInfo, deleteCourseInfo } from "../model/index"
const courseService = {
  async getAllCourses() {
    const response = await getCourses();
    return response;
  },
  async getLastCourse() {
    const response = await getLastCourse();
    return response;
  },
  async getCourseById(id) {
    const response = await getCourseById(id);
    return response;
  },
  async getCourseInfoListById(courseId) {
    const response = await getCourseInfoListById(courseId);
    return response;
  },
  async createCourse(courseData) {
    const response = await addCourse(courseData);
    return response;
  },
  async createCourseInfo(courseInfo) {
    const response = await addCourseInfo(courseInfo);
    return response;
  },
  async updateCourse(id, updatedCourseData) {
    const response = await editCourse(id, updatedCourseData);
    return response;
  },
  async updateCourseInfo(courseId, updatedCourseInfo) {
    const response = await editCourseInfo(courseId, updatedCourseInfo);
    return response;
  },
  async deleteCourse(id) {
    await deleteCourse(id);
  },
  async deleteCourseInfo(id) {
    await deleteCourseInfo(id);
  },
};
export default courseService;