import React from "react";

export default function Box(props:any) {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 border border-gray-800 px-4 py-6 rounded-xl min-w-80">
            <h2 className="text-xl font-medium text-gray-800 dark:text-gray-300">
                {props.title}
            </h2>
            <p className="pt-1 text-gray-700 dark:text-gray-400">
                {props.description}
            </p>
        </div>
    );
}