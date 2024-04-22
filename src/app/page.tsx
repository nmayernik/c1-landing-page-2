"use client"
import React from "react";
import Bento from "./components/box";

export default function Home() {
  return (
    <main className="flex min-h-screen pt-48 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-10xl mx-auto">
        <section id="hero">
          <h1 className="text-5xl text-gray-800 dark:text-gray-100 font-sans text-center font-extrabold mb-2">A better way to hire school psychologists</h1>
          <p className="pt-4 text-2xl text-gray-700 dark:text-gray-400 text-center">Add onto that a clarifying description that seals the deal</p>
        </section>
        
        <section id="what" className="pt-48">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">What we offer</h2>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <Bento 
              title="First feature" 
              description="Explanation of first feature."
            />
            <Bento 
              title="Second feature"
              description="Explanation of second feature."
            />
            <Bento 
              title="Third feature"
              description="Explanation of third feature."
            />
            <Bento 
              title="Fourth feature"
              description="Explanation of fourth feature."
            />
          </div>
        </section>

        <section id="what" className="pt-24">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Why Colonel One</h2>
          <div className="grid grid-cols-3 gap-6 pt-4">
            <Bento 
              title="First feature" 
              description="Explanation of first feature."
            />
            <Bento 
              title="Second feature"
              description="Explanation of second feature."
            />
            <Bento 
              title="Third feature"
              description="Explanation of third feature."
            />
            <Bento 
              title="Fourth feature"
              description="Explanation of fourth feature."
            />
          </div>
        </section>



      </div>
      
    </main>
  );
}
