const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoticeSchema = new Schema({
    faculty:{
        type:String,
        required:true
    },
    module:{
        type:String,
        required:true
    },
    topic:{
        type:String,
        required:true
    },
    notice:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model("Notice",NoticeSchema);