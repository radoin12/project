import asynchandler from 'express-async-handler';
import category from '../models/categoryModel.js';
import article from '../models/articleModel.js';
const homeCategory= asynchandler(async(req,res)=>{
    let param=req.params.param
    if(param=='all'){
        const detail=null
        const categories=await category.find()
    // res.render('category/category',{categ:categories,keyUpdate:detail});
    res.render('category/category',{categ:categories,keyUpdate:detail})
    }else{
        const categories=await category.find()
        const detail=await category.findById(param)
        res.render('category/category',{categ:categories,keyUpdate:detail});
        // res.json({"categories":categories})
    }
});

const saveCategory=asynchandler(async(req,res)=>{
    const catg=new category({
        category:req.body.category,
        location:req.body.location
    })
    let param=req.params.param
    if(param!='all'){
        await category.findByIdAndUpdate(param,{
            category:req.body.category,
            location:req.body.location
        })

    }
    else{
        await catg.save();
    }

    res.redirect('/category/all');
});
const deleteCategory=asynchandler(async(req,res)=>{
    let id=req.params.id
   await  category.findByIdAndDelete(id)
    res.redirect('/category/all')
});
const delCategory=asynchandler(async(req,res)=>{
    await category.remove()
    res.redirect('/category/all')
})
const homeArticle= asynchandler(async(req,res)=>{
    let param=req.params.param
    let date=new Date()
    let y=date.getFullYear()
    let m=date.getMonth()
    let d=date.getDay()
    let serchName=req.body.searchs

    if(param=='all'){
        const detail=null
        const categories=await category.find()
         const test=await category.findOne({category:"categorie2"})
        const articlees=await article.find().populate('category')
          console.log("my articla new",articlees)
    //  res.render('article/article',{categ:categories,art:articlees,keyUp:detail,y:y,m:m,d:d,ser:serchName});
        // res.json({"article":articlees})
        res.render('article/article',{art:articlees,categ:categories,keyUp:detail,y:y,m:m,d:d,test:test})
    }else{
        const categories=await category.find()
        if(serchName!=null){
            const u=await article.findOne({title:serchName})
        }

        const articlees=await article.find().populate('category')
        console.log("articlessss",articlees)

        const detail=await article.findById(param).populate('category')
        
         res.render('article/article',{categ:categories,art:articlees,keyUp:detail,y:y,m:m,d:d,ser:serchName});
          
    }
 
     
});
const saveArticle=asynchandler(async(req,res)=>{
    const artc=new article({
        category:req.body.category,
        title:req.body.title,
        message:req.body.message,
    })

    let param=req.params.param
    if(param!='all'){
    
        const detail=await article.findByIdAndUpdate(param,{

            category:req.body.category,
            title:req.body.title,
            message:req.body.message,
        })
    }else{
        await artc.save();
    }
    res.redirect('/article/all');
});
const deleteArticle=asynchandler(async(req,res)=>{
    let id=req.params.id
   await  article.findByIdAndDelete(id)
    res.redirect('/article/all')
});
// comnt article


const cmtArticle=asynchandler(async(req,res)=>{
    let param=req.params.param
    let date=new Date()
    let y=date.getFullYear()
    let m=date.getMonth()+1
    let d=date.getDate()
    let act=y +'-'+ m +'-'+ d
    console.log('Parammmmmmmmmm ::: '+param)
  const  cmt=await article.findById(param).populate('category')
  console.log("ggggggggggggggggggggggggggg",cmt)
    cmt.note.push({
        title:req.body.title,
        message:req.body.message,
        postedAt:act
    })
    console.log('++++++++++++++++++++'+cmt)
    await cmt.save();
   /* console.log('Article  :::::::::: '+cmt.commentaire.push({
        title:'gsgsggs'
    }))*/

     res.redirect('/article/detail/'+param);
})



//    ************delete detail*****************

   const deletedetail=asynchandler(async(req,res)=>{
       let id=req.params.id
       console.log(id)
         await article.findByIdAndDelete(id) 
        res.redirect('/article/all')  
   })

            // details coment
const detailArticle=asynchandler(async(req,res)=>{
    let param=req.params.param
    let date=new Date()
    let y=date.getFullYear()
    let m=date.getMonth()
    let d=date.getDay()
    const categories=await category.find()
    const articlees=await article.findById(param).populate('category')
     res.render('comment/details',{categ:categories,art:articlees,y:y,m:m,d:d});

})
export {saveCategory, homeCategory,deleteCategory,delCategory,homeArticle,saveArticle,deleteArticle,cmtArticle,detailArticle,deletedetail}