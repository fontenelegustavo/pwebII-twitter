import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PostPage from "./pages/PostPage/PostPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import CreatePostPage from "./pages/CreatePostPage/CreatePostPage";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
    return (
        <>
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/post/:id" element={<PostPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/createpost" element={<CreatePostPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
