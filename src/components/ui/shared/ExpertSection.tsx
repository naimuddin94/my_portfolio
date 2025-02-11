"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Code,
  Database,
  Globe,
  Layout,
  Smartphone,
  Terminal,
} from "lucide-react";
import { useRef } from "react";

const skills = [
  { name: "Frontend Development", icon: Layout },
  { name: "Backend Development", icon: Database },
  { name: "Responsive Design", icon: Smartphone },
  { name: "Web Performance", icon: Globe },
  { name: "Version Control", icon: Code },
  { name: "Command Line", icon: Terminal },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function ExpertSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section
      ref={ref}
      className="py-16 bg-gray-50 overflow-hidden max-w-[90%] -mt-10 mx-auto rounded"
    >
      <motion.div className="container mx-auto px-4" style={{ opacity, scale }}>
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          My Expertise
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I specialize in building scalable, efficient, and user-friendly
          applications, leveraging modern technologies and industry best
          practices to create impactful digital solutions.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-white p-6 rounded-lg shadow-md transition duration-300 ease-in-out"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                transition: { type: "spring", stiffness: 300, damping: 10 },
              }}
              custom={index}
            >
              <motion.div
                className="flex items-center mb-4"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <skill.icon className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </motion.div>
              <motion.p
                className="text-gray-600"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 * index, duration: 0.5 }}
              >
                {skill.name === "Frontend Development" &&
                  "Crafting intuitive and dynamic user interfaces using modern frameworks like React and Next.js to ensure exceptional user experiences."}
                {skill.name === "Backend Development" &&
                  "Building robust and scalable server-side applications using Node.js, Express, Prisma, and PostgreSQL to manage data efficiently."}
                {skill.name === "Responsive Design" &&
                  "Ensuring seamless experiences across all devices by implementing responsive design principles with CSS, TailwindCSS, and ShadCN."}
                {skill.name === "Web Performance" &&
                  "Optimizing website performance by leveraging techniques like code splitting, lazy loading, and effective caching strategies."}
                {skill.name === "Version Control" &&
                  "Maintaining clean and organized codebases through Git, ensuring seamless collaboration and version tracking in team environments."}
                {skill.name === "Command Line" &&
                  "Proficient in command-line tools for efficient project management, scripting, and automation of development workflows."}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
