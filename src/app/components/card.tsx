import React from "react";

export default function Card(props:any) {
    return (
        <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-800 px-6 pt-6 pb-52 rounded-xl min-w-80 ">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="8" fill="#2e1065"/>
                <path d="M32 32L27.3806 27.3806M27.3806 27.3806C28.6309 26.1304 29.3333 24.4347 29.3333 22.6666C29.3333 20.8985 28.6309 19.2028 27.3806 17.9526C26.1304 16.7024 24.4347 16 22.6666 16C20.8985 16 19.2028 16.7024 17.9526 17.9526C16.7024 19.2028 16 20.8985 16 22.6666C16 24.4347 16.7024 26.1304 17.9526 27.3806C19.2028 28.6309 20.8985 29.3333 22.6666 29.3333C24.4347 29.3333 26.1304 28.6309 27.3806 27.3806Z" stroke="#a78bfa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className="pt-3">   
                <h2 className="text-xl font-medium text-zinc-800 dark:text-zinc-300">
                    {props.title}
                </h2>
                <p className="pt-1 text-zinc-700 dark:text-zinc-400">
                    {props.description}
                </p>
            </div>
            

        </div>
    );
}