"use client"
import React from "react";
import Bento from "./components/box";
import Card from "./components/card";
import Link from "next/link";
import * as Form from '@radix-ui/react-form';
import * as RadioGroup from '@radix-ui/react-radio-group';
import * as Avatar from '@radix-ui/react-avatar';

export default function Home() {
  return (
    <div className="bg-white dark:bg-zinc-950">
      <header className="max-w-7xl mx-auto py-8 px-4 flex flex-row gap-4 justify-between">
        <Link href="/" className="text-white font-bold">
          Colonel One App Name
        </Link>
        <nav className="flex items-center gap-2">
          <li>
            <Link href="/about" className="text-white font-medium">
              About
            </Link>
            
          </li>
          <li>
            <Link href="/" className="bg-blue-700 text-white font-medium text-md px-3 py-2 rounded-lg">
              Get Notified
            </Link>
          </li>
        </nav>
      </header>
      <main className="mt-32 flex flex-col min-h-screen max-w-7xl mx-auto px-4">
        <section id="hero">
          <h1 className="text-3xl md:text-5xl text-neutral-800 dark:text-neutral-100 font-sans text-center font-extrabold">A new way to recruit school</h1>
          <p className="pt-2 lg:pt-4 text-lg md:text-2xl text-neutral-700 dark:text-neutral-400 text-center">Add onto that a clarifying description that seals the deal</p>
         
         <div className="flex justify-center pt-8">
            <Link href="/" className="bg-blue-700 text-white text-md font-medium px-4 py-3 rounded-lg">
              Get notified when we launch
            </Link>
          </div>
        </section>
        
        <section id="what" className="pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
            <Bento 
              title="For School Districts" 
              description="Get qualified evaluations when you need them"
            />
            <Bento 
              title="For School Psychologists"
              description="Control your career while expanding your impact"
            />
            
          </div>
        </section>

        <section id="what" className="py-20">
          <div className="max-w-prose">
            <p className="text-md text-blue-200 pb-2">Features</p>
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug text-white">A platform designed to connect school districts and psychologists</h2>
            <p className="text-neutral-400 text-md lg:text-xl pt-2">Lorem ipsum dolor sit amet</p>
          </div>
          <div className="pt-8 grid lg:grid-cols-2 gap-4 lg:gap-8">
            <Card title="Lorem ipsum dolor sit amet" 
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."/>
            <Card title="Lorem ipsum dolor sit amet" 
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."/>
            <Card title="Access your reports online" 
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."/>
            <Card title="Lorem ipsum dolor sit amet" 
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."/>   
          </div>
        </section>

        <section className="bg-zinc-900 px-4 md:px-8 my-20 py-20 rounded-3xl">
          <div className="flex items-center flex-col">
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug max-w-2xl mx-auto text-center text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
            <Avatar.Root className="mt-8 inline-flex size-10 select-none items-center justify-center overflow-hidden rounded-full align-middle">
              <Avatar.Fallback className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-sm font-medium">
                SA
              </Avatar.Fallback>
            </Avatar.Root>
              <p className="text-white mt-2 text-md font-medium">School Distict Admin</p>
              <p className="text-zinc-300 text-md">Job Title</p>
         </div>
        </section>

        <section id="what" className="py-20">
          <div className="max-w-prose">
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug text-white">Get notified when we launch</h2>
            <p className="text-gray-300 text-md lg:text-xl pt-1">We're currently in development and seeking school districts as pilot clients.</p>
            <Form.Root className="pt-4">
              <Form.Field name="Name" className="flex flex-col">
                <Form.Label className="text-gray-200 font-medium pb-2 text-md">Your Name</Form.Label>
                <Form.Control asChild>
                  <input className="bg-zinc-800 border border-zinc-700 text-white rounded-md px-3 py-2 text-md" type="email" required />
                </Form.Control> 
              </Form.Field>
              <Form.Field name="Name" className="pt-6 flex flex-col">
                <Form.Label className="text-gray-200 font-medium pb-2 text-md">Email</Form.Label>
                <Form.Control asChild>
                  <input className="bg-zinc-800 border border-zinc-700 text-white rounded-md px-3 py-2 text-md" type="email" required />
                </Form.Control> 
              </Form.Field>
              <Form.Field name="Role" className="pt-6">
                  <label className="text-gray-200 font-medium text-md">Your role</label>
                  <RadioGroup.Root className="pt-4 flex gap-8">
                  <RadioGroup.Item value="School District" className="flex gap-2 items-center ">
                      <RadioGroup.Indicator className="size-6 border border-zinc-600 bg-zinc-800 rounded-full checked:bg-blue-500 checked:size-6" />
                      <label className="text-white">School District</label>
                    </RadioGroup.Item>
                    <RadioGroup.Item value="School District" className="flex gap-2 items-center ">
                      <RadioGroup.Indicator className="size-6 border border-zinc-600 bg-zinc-800 rounded-full checked:bg-blue-500" />
                      <label className="text-white">School Psychologist</label>
                    </RadioGroup.Item>
                  </RadioGroup.Root>
              </Form.Field>
              <Form.Submit asChild>
                <button className="bg-blue-700 text-white font-medium text-md px-4 py-3 text-xl rounded-lg mt-8">
                  Notify me
                </button>
              </Form.Submit>
            </Form.Root>

          </div>
          
        </section>
        

      
    </main>
    <footer className="flex justify-center py-20 px-4">
          <Link href="/" className="text-white font-bold">
            Colonel One App Name
          </Link>
        </footer>

    </div>
  );
}
