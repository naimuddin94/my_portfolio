"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/yourusername/ecommerce",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather app using OpenWeatherMap API and React.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "API Integration", "Tailwind CSS"],
    liveUrl: "https://example.com/weather",
    githubUrl: "https://github.com/yourusername/weather-dashboard",
  },
  {
    title: "Task Management App",
    description:
      "A Kanban-style task management application built with Next.js and Firebase.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
    liveUrl: "https://example.com/tasks",
    githubUrl: "https://github.com/yourusername/task-manager",
  },
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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function ProjectsSection() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here are some of the projects I&rsquo;ve worked on. Each one presented
          unique challenges and opportunities for growth.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  />
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
