import express from "express";
import CommentController from "../controllers/commentController.js";

const commentRouter = express.Router();

//lista comments
commentRouter.get("/comments", CommentController.getComments);

//lista comments pelo postID
commentRouter.get("/comments/:postID", CommentController.getCommentsByPostID);

//cria comentário
commentRouter.post('/comments', CommentController.createComment)

//deleta comment pelo id
commentRouter.delete("/comments/:id", CommentController.deleteCommentByID);

export default commentRouter;
