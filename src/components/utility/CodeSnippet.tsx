"use client";

import { motion } from "framer-motion";

export const CodeSnippet = ({ children }: { children: React.ReactNode }) => (
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
