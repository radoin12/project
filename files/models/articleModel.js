import mongoose from 'mongoose';
const cmntChema=mongoose.Schema({
    title:{
         
        type:String
      

    },
    message:{
        type:String
     
    },
    postedAt:{
        type:String,
       }

})
const articleSchema=mongoose.Schema({
    title:{
   },
    message:{
        },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'category'
    } ,
    note:[cmntChema]   
});

const article=mongoose.model('article',articleSchema);
export default article;