import {BlogController} from "../controllers/blog.controller";
const express = require('express');
const router = express.Router();

router.get('/', BlogController.getHomePage);
router.get('/create', BlogController.getAddPage);
router.post('/create', BlogController.addBlog);
router.get('/delete', BlogController.deleteBlog);
router.get('/update', BlogController.getUpdatePage);
router.post('/update', BlogController.updateBlog);

export default router;