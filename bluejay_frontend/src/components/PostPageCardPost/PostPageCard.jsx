import "./style.css";

export default function PostPageCard(props) {
    return (
        <>
            <div
                className="post max-w-sm bg-slate-900 text-slate-100 rounded-lg shadow-md p-6"
                id={props.htmlId ? "individual" : undefined}
            >
                <div className="text-xl font-bold mb-2 text-cyan-300">
                    {props.title}
                </div>
                <div className="text-slate-300">{props.text}</div>
            </div>
        </>
    );
}
