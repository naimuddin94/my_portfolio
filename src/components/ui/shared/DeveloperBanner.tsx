"use client";

import { useTypewriter } from "@/hook/useTypewriter";
import { motion } from "framer-motion";

const CodeSnippet = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    className="bg-gray-800 text-xs md:text-sm text-green-400 font-mono rounded-md shadow-lg overflow-hidden border border-gray-700 max-w-md absolute"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 0.3, y: 0 }}
    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
  >
    <div className="bg-gray-900 text-gray-300 px-4 py-2 flex items-center justify-between text-xs font-bold">
      <span>CodeSnippet.js</span>
      <span>...</span>
    </div>
    <div className="p-4 whitespace-pre-wrap text-yellow-500">{children}</div>
  </motion.div>
);

export default function DeveloperBanner() {
  const typedText = useTypewriter("Hello, I'm a Software Developer");

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800 text-white min-h-screen flex items-center justify-center -m-16 -z-10">
      <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>

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
          <img
            src="/placeholder.svg?height=150&width=150"
            alt="Developer Avatar"
            className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-lg"
          />
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
            {typedText}
          </span>
          <span className="animate-blink">|</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
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
