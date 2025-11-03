import { Formik, Form, Field } from "formik";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function PostForm({ onPostCreated }) {
    const navigate = useNavigate();

    return (
        <div className="w-full max-w-md bg-slate-900 text-slate-100 rounded-2xl shadow-lg p-8 mb-6 border border-gray-800">
            <Formik
                initialValues={{ title: "", text: "" }}
                onSubmit={async (values, { resetForm, setSubmitting }) => {
                    try {
                        await api.post("/posts", values);
                        if (onPostCreated) {
                            onPostCreated();
                        }
                        navigate("/");
                        resetForm();
                    } catch (err) {
                        alert("Erro ao criar post");
                    } finally {
                        setSubmitting(false);
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="flex flex-col gap-5">
                        <h2 className="text-2xl font-extrabold text-cyan-300 mb-2 text-center tracking-tight">
                            Criar novo post
                        </h2>
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="title"
                                className="text-sm font-semibold text-slate-200"
                            >
                                Título
                            </label>
                            <Field
                                id="title"
                                name="title"
                                placeholder="Digite o título do post"
                                className="border border-gray-700 rounded-lg px-3 py-2 bg-slate-800 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="text"
                                className="text-sm font-semibold text-slate-200"
                            >
                                Texto
                            </label>
                            <Field
                                as="textarea"
                                id="text"
                                name="text"
                                placeholder="Digite o conteúdo do post"
                                className="border border-gray-700 rounded-lg px-3 py-2 min-h-[90px] resize-y bg-slate-800 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg px-4 py-2 mt-2 shadow hover:from-blue-700 hover:to-cyan-400 transition disabled:opacity-60"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Enviando..." : "Publicar"}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
