const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const router = require("./Router/NoticeRouter");
const LectureRouter = require("./Router/LectureRouter");
const resour = require("./Router/LibraryItemRouter");

app.use(express.json());
app.use(cors());
app.use("/notice", router);
app.use("/lecture", LectureRouter);
//app.use("/resource",resour )

mongoose
  .connect(
    "mongodb+srv://has:has123@icollegelms.vpl6dxd.mongodb.net/?retryWrites=true&w=majority"
    // "mongodb+srv://dilshan:dilshan123@cluster0.vbqmnc2.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
