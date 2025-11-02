import mongoose from "mongoose";
import comment from "../models/Comment.js";
import post from "../models/Post.js";

class CommentController {
    //lista todos os comentários
    static async getComments(req, res) {
        try {
            const comments = await comment.find();
            res.status(200).json(comments);
        } catch (e) {
            res.status(500).json({
                message: `listing comments failed`,
                error: e.message,
            });
        }
    }

    //lista todos os comentários pelo postID
    static async getCommentsByPostID(req, res) {
        try {
            const postID = req.params.postID
            const comments = await comment.find({postID: postID});
            res.status(200).json(comments);
        } catch (e) {
            res.status(500).json({
                message: `listing comments failed`,
                error: e.message,
            });
        }
    }

    //cria comentário
    static async createComment(req, res) {
        try {
            const commentToCreate = await comment.create(req.body);
            res.status(200).json({
                message: "comment was created",
                comment: commentToCreate,
            });
        } catch (e) {
            res.status(500).json({
                message: `creating comment failed`,
                error: e.message,
            });
        }
    }

    //deleta comentário pelo id
    static async deleteCommentByID(req, res) {
        try {
            const id = req.params.id;
            const commentToDelete = await comment.findByIdAndDelete(id);
            res.status(200).json({
                message: "comment was deleted",
                comment: commentToDelete,
            });
        } catch (e) {
            res.status(500).json({
                message: `deleting comment failed`,
                error: e.message,
            });
        }
    }
}

export default CommentController;
