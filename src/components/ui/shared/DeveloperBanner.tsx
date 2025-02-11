"use client";

import my_img from "@/assets/images/mypic.jpg";
import { CodeSnippet } from "@/components/utility/CodeSnippet";
import { TypewriterWords } from "@/constant";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export default function DeveloperBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800 text-white min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>

      <div className="hidden md:block absolute top-5 right-5 z-50">
        <div className="ml-10 flex items-baseline space-x-4 text-slate-500">
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>

      <CodeSnippet>
        {`async function optimizeCode() {
            await buildProject();
            await runTests();
            await push('production');
        }`}
      </CodeSnippet>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Image
            width={128}
            height={128}
            src={my_img}
            alt="Developer Avatar"
            className="w-32 h-32 mx-auto rounded-full border-4 border-white/70 shadow-lg"
          />
        </motion.div>

        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
            I&apos;m a <Typewriter words={TypewriterWords} />
          </span>
          <span className="animate-blink">|</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-slate-300">
          Turning complex problems into elegant solutions, one line of code at a
          time.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-900 font-semibold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-blue-100 transition duration-300"
        >
          Explore My Work
        </motion.button>
      </div>
    </div>
  );
}
