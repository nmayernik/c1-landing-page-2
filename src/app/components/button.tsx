"use client"
import React from "react";

export default function Button(props:any) {
    return (
        <button className="bg-purple-600 px-2 py-4 text-md font-semibold">
            {props.label}
        </button>
    );
}
