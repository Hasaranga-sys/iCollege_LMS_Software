const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
const router = require('./Router/NoticeRouter')
const resour = require('./Router/Resource')

app.use(express.json())
app.use(cors());
app.use("/notice",router);
app.use("/resource",resour )

mongoose.connect("mongodb://localhost:27017")
            .then(()=>console.log("Connected to database"))
             .then(()=>{
                app.listen(5000);}).catch((err)=>console.log(err));