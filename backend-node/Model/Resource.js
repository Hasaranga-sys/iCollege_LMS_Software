const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
    faculty:{
        type: String,        
    },
    year: {
        type: String,       
    },
    subject: {
        type: String,       
    },
    pdf:{
        type: String,
    },
    cloudinary_id_img:{
        type: String,
    },
    cloudinary_id_pdf:{
        type: String,
    },
});

//exporting this model to mongo db
module.exports= mongoose.model("PDF", ResourceSchema);
