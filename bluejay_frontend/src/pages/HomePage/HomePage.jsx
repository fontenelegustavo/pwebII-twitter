import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import PostForm from "../../components/PostForm/PostForm";
import HomePost from "../../components/HomePost/HomePost";

import "./style.css";

export default function HomePage() {
    const [listOfPosts, setOfPosts] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        api.get("/posts").then((response) => {
            console.log(response.data);
            setOfPosts(response.data);
        });
    }, []);
    return (
        <>
            <div className="w-full flex flex-col items-center gap-6 py-4">
                {listOfPosts.map((post) => {
                    return (
                        <HomePost
                            key={post._id}
                            id={post._id}
                            title={post.title}
                            text={post.text}
                            username={post.user.username}
                            onClick={() => {
                                navigate(`/post/${post._id}`);
                            }}
                            onRemove={async (id) => {
                                if (
                                    window.confirm(
                                        "Tem certeza que deseja remover este post?"
                                    )
                                ) {
                                    await api.delete(`/posts/${id}`);
                                    setOfPosts(
                                        listOfPosts.filter((p) => p._id !== id)
                                    );
                                }
                            }}
                        />
                    );
                })}
            </div>
        </>
    );
}
