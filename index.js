import  express   from "express";
const app=express();
import bodyParser from "body-parser";
import cors from "cors"
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.json())
app.get('/error',(req,res)=>res.send(error()))
app.get('/',(req,res)=>res.send('500 error demo by devnami'))
app.use(function(err,req,res,text){

 res.type('text/plain')
 res.status(500)
 res.send('internal server error 500')
})
app.set('view engine','ejs');               
app.set('views','files/views');
const port = 3000;
app.listen(port, () => {console.log(`Example on port ${port}`)});
import mongoose from "mongoose";
const connectDB=async()=>{
    const dbName="forum";
    const url=`mongodb://127.0.0.1:27017/${dbName}`;
    const cnx= await mongoose.connect(url);
    console.log(`DBName:${dbName}`);
    console.log(`url:${url}`);
}
connectDB();
import  homeCategory  from "./files/routes/forumRoutes.js";
app.use(homeCategory)