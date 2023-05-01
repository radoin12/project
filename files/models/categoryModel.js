import mongoose from 'mongoose';
const categorySchema=mongoose.Schema({
    category:{type:String,
    required:true},
    location:{
        type:String,
        required:true 
    }
})
const category=mongoose.model('category',categorySchema)
export default category