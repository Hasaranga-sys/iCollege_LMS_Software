const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LectureSchema = new Schema({
  year: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
  meeting_link: {
    type: String,
    required: true,
  },
  // slide: {
  //   type: String,
  //   required: true,
  // },
  // tutorial: {
  //   type: String,
  //   required: true,
  // },
});
module.exports = mongoose.model("Lecture", LectureSchema);
