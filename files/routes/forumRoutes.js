import  express  from "express";
import {homeCategory, saveCategory,deleteCategory,delCategory,homeArticle,saveArticle,deleteArticle,detailArticle,cmtArticle,deletedetail} from "../controllers/forumController.js"
const router=express.Router();
export default router
router.route('/category/:param').get(homeCategory);
router.route('/category/:param').post(saveCategory);
router.route('/delete/:id').get(deleteCategory);
router.route('/deleteAll').post(delCategory);
router.route('/article/:all').get(homeArticle);
router.route('/article/:param').post(saveArticle);
router.route('/del:id').get(deleteArticle);
router.route('/article/detail/:param',).get(detailArticle);
router.route('/article/detail/:param').post(cmtArticle);
router.route('/sup/:id').get(deletedetail)
