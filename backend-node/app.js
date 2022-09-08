const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
const router = require('./Router/NoticeRouter')
const resour = require('./Router/LibraryItemRouter')

app.use(express.json())
app.use(cors());
app.use("/notice",router);
//app.use("/resource",resour )

mongoose.connect("mongodb+srv://has:has123@icollegelms.vpl6dxd.mongodb.net/?retryWrites=true&w=majority")
            .then(()=>console.log("Connected to database"))
             .then(()=>{
                app.listen(5000);}).catch((err)=>console.log(err));