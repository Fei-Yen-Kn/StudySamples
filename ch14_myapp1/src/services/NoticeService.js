import { notices } from "../model";
const NoticeService = {
  addToNotice(title, content) {
    const newNotice = {
      id: notices.length + 1,
      title,
      content,
      created_at: new Date(),
    };
    notices.push(newNotice);
    return newNotice;
  },
  editNotice(noticeId, updatedData) {
    const notice = notices.find((n) => n.id === noticeId);
    if (notice) {
      Object.assign(notice, updatedData);
      return notice;
    }
    return null;
  },
  deleteNotice(noticeId) {
    const index = notices.findIndex((n) => n.id === noticeId);
    if (index !== -1) {
      notices.splice(index, 1);
      return true;
    }
    return false;
  },
  getNoticeList() {
    return notices;
  },
  getNoticeDetail(noticeId) {
    return notices.find((n) => n.id === noticeId) || null;
  },
};

export default NoticeService;
