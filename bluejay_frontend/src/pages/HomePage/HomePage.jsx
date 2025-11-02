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
            <div className="w-full flex flex-row justify-around">
                {/*DIV POSts*/}
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
                                            listOfPosts.filter(
                                                (p) => p._id !== id
                                            )
                                        );
                                    }
                                }}
                            />
                        );
                    })}
                </div>

                {/*DIV FORMULARIO*/}
                <div className="form flex flex-col items-center">
                    <PostForm
                        onPostCreated={async () => {
                            const response = await api.get("/posts");
                            setOfPosts(response.data);
                        }}
                    />
                    <button
                        className="register-button cursor-pointer text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        onClick={() => navigate("/register")}
                    >
                        register page
                    </button>
                </div>
            </div>
        </>
    );
}
