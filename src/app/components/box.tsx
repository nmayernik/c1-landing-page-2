import React from "react";

export default function Box(props:any) {
    return (
        <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-800 px-6 pb-6 pt-40 rounded-xl min-w-80 flex justify-between items-center">
            <div>
                <h2 className="text-xl font-medium text-zinc-800 dark:text-zinc-300">
                    {props.title}
                </h2>
                <p className="pt-1 text-zinc-700 dark:text-zinc-400">
                    {props.description}
                </p>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-white">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
            </div>

        </div>
    );
}