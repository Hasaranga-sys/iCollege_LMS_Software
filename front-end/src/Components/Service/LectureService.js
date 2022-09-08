import axios from "axios";

const URL = "http://localhost:5000/lecture";

class LectureService {
  createLecture(lecture) {
    return axios.post(URL, lecture);
  }
  getAllNotices() {
    return axios.get(URL).then((res) => res.data);
  }
  deleteNotice(noticeId) {
    return axios.delete(URL + "/" + noticeId);
  }
  updateNotice(noticeId, notice) {
    return axios.put(URL + "/" + noticeId);
  }
  getNoticeById(_id) {
    return axios.get(URL + "/" + _id).then((res) => res.data);
  }
}
export default new LectureService();
