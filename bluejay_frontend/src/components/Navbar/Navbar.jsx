import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="w-full bg-gradient-to-r from-black via-slate-900 to-black border-b border-gray-800 py-3 mb-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <Link
                            to="/"
                            className="text-2xl font-extrabold text-cyan-400"
                        >
                            Bluejay
                        </Link>
                    </div>

                    <nav className="flex items-center gap-3">
                        <Link
                            to="/"
                            className="px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-slate-800"
                        >
                            Home
                        </Link>

                        <Link
                            to="/createpost"
                            className="px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-slate-800"
                        >
                            Criar post
                        </Link>

                        <Link
                            to="/register"
                            className="px-3 py-2 rounded-md text-sm font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-400"
                        >
                            Registrar
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
