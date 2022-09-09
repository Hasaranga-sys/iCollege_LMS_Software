const express = require("express");
const router = express.Router();
const LectureController = require("../Controller/LectureController");

router.get("/", LectureController.getAllLecture);
router.post("/", LectureController.addLecture);
router.get("/:id", LectureController.getLectureById);
// router.put("/:id",LectureController.updateNotice);
router.delete("/:id", LectureController.DeleteLecture);

module.exports = router;
