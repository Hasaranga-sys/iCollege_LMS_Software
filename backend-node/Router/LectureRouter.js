const express = require("express");
const router = express.Router();
const LectureController = require("../Controller/LectureController");

router.get("/", LectureController.getAllLecture);
router.post("/", LectureController.addLecture);
// router.get("/:id",LectureController.getNoticeById);
// router.put("/:id",LectureController.updateNotice);
// router.delete("/:id",LectureController.DeleteNotice);

module.exports = router;
