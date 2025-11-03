import "./style.css";

export default function HomePost(props) {
    const username = props.username ? props.username : "nobody";
    return (
        <div
            className="post max-w-sm min-w-100 bg-slate-900 text-slate-100 rounded-lg shadow-md p-6 flex items-start justify-between gap-2"
            id={props.htmlId ? "individual" : undefined}
        >
            <div
                className="flex-1 cursor-pointer"
                onClick={
                    props.onClick ? () => props.onClick(props.id) : undefined
                }
            >
                <div className="flex items-center justify-between">
                    <div className="text-xl font-bold mb-2 text-cyan-300">
                        {props.title}
                    </div>
                </div>
                <div className="text-slate-300">{props.text}</div>
                <div className="text-sm text-slate-400 mt-2">
                    Por {username}
                </div>
            </div>
            <button
                className="ml-2 px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded hover:from-blue-700 hover:to-cyan-400 transition cursor-pointer"
                onClick={(e) => {
                    e.stopPropagation();
                    if (props.onRemove) props.onRemove(props.id);
                }}
                title="Remover post"
            >
                Remover
            </button>
        </div>
    );
}
