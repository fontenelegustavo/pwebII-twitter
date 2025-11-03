import PostForm from "../../components/PostForm/PostForm";
import Navbar from "../../components/Navbar/Navbar";

import api from "../../services/api";

export default function CreatePostPage() {
    return (
        <>
            <div className="flex flex-col items-center">
                <PostForm
                onPostCreated={async () => {
                    const response = await api.get("/posts");
                    setOfPosts(response.data);
                }}
            />
            </div>
        </>
    );
}
