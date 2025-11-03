import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import PostPageCard from "../../components/PostPageCardPost/PostPageCard";
import CommentForm from "../../components/CommentForm/CommentForm";

export default function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (!id) return;
        (async () => {
            try {
                const postRes = await api.get(`/posts/${id}`);
                const commentsRes = await api.get(`/comments/${id}`);
                setPost(postRes.data);
                setComments(commentsRes.data || []);
            } catch (e) {
                console.error(e);
            }
        })();
    }, [id]);

    async function handleAddComment(text) {
        try {
            await api.post("/comments", { text, postID: id });
            const res = await api.get(`/comments/${id}`);
            setComments(res.data || []);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className="w-full min-h-screen flex items-start justify-center p-8">
            <div className="w-full max-w-5xl flex gap-6">
                {/* Post à esquerda */}
                <div className="w-2/3">
                    <PostPageCard
                        title={post?.title}
                        text={post?.text}
                        htmlId
                    />
                </div>

                {/* Comentários à direita */}
                <aside className="w-1/3">
                    <h3 className="text-lg font-bold mb-3">Comentários</h3>

                    <div className="flex flex-col gap-3 mb-4 max-h-[60vh] overflow-auto">
                        {comments.map((comment) => (
                            <div
                                key={comment._id || comment.id}
                                className="bg-white border rounded-md p-3"
                            >
                                {comment.text}
                            </div>
                        ))}
                    </div>

                    <CommentForm onSubmit={handleAddComment} />
                </aside>
            </div>
        </div>
    );
}
