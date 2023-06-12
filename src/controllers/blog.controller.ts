import { BlogRepo } from "../../index";
// import { Request, Response } from "express";

export class BlogController {
    static async getHomePage(req, res) {
        const listBlog = await BlogRepo.find();
        res.render("home", { blogs: listBlog });
    }

    static getAddPage(req, res) {
        res.render("create");
    }

    static async addBlog(req, res) {
        const blogData = {
            title: req.body.title,
            content: req.body.content
        };
        await BlogRepo.save(blogData);
        res.redirect('/');
    }

    static async deleteBlog(req, res) {
        let result = await BlogRepo.findOneBy({id : +req.query.id});
        await BlogRepo.remove(result);
        res.redirect('/');
  
    }

    static async getUpdatePage(req, res) {
        let result = await BlogRepo.findOneBy({id : +req.query.id});
        res.render('update', {blog: result});
    }

    static async updateBlog(req, res) {
        let result = await BlogRepo.findOneBy({id : +req.query.id});
        let {title, content} = req.body;
        result.title = title;
        result.content = content;
        await BlogRepo.save(result);
        res.redirect('/');
    }
}


