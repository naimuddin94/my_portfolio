"use client";

import React from "react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  children?: Skill[];
}

const skillsData: Skill[] = [
  {
    name: "Frontend",
    children: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Redux" },
      { name: "Tanstack Query" },
      { name: "Tailwind CSS" },
      { name: "Material UI" },
      { name: "Ant Design" },
      { name: "Zod" },
    ],
  },
  {
    name: "Backend",
    children: [
      { name: "Express.js" },
      { name: "Nest.js" },
      { name: "Prisma" },
      { name: "Mongoose" },
      { name: "Firebase" },
      { name: "Meilisearch" },
      { name: "GraphQL" },
      { name: "JWT" },
    ],
  },
  {
    name: "Database",
    children: [{ name: "MongoDB" }, { name: "PostgreSQL" }],
  },
];

const SkillNode: React.FC<{ name: string; isMain?: boolean }> = ({
  name,
  isMain = false,
}) => (
  <motion.div
    className={`px-4 py-2 rounded-lg font-medium text-center ${
      isMain ? "bg-purple-300 text-purple-900" : "bg-purple-100 text-purple-700"
    }`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    {name}
  </motion.div>
);

const SkillsDiagram: React.FC = () => {
  return (
    <section className="py-16 px-4 overflow-x-auto bg-white">
      <motion.h2
        className="text-3xl font-bold text-center mb-12 text-purple-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Full Stack Development Skills
      </motion.h2>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <SkillNode name="Full Stack Development" isMain />
          <motion.div
            className="h-8 w-px bg-purple-300"
            initial={{ height: 0 }}
            animate={{ height: 32 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {skillsData.map((category, index) => (
              <div key={category.name} className="flex flex-col items-center">
                <SkillNode name={category.name} isMain />
                <motion.div
                  className="h-8 w-px bg-purple-300"
                  initial={{ height: 0 }}
                  animate={{ height: 32 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                />
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {category.children?.map((skill, skillIndex) => (
                    <React.Fragment key={skill.name}>
                      <SkillNode name={skill.name} />
                      {skillIndex < (category.children?.length || 0) - 1 && (
                        <motion.div
                          className="col-span-2 h-px bg-purple-200"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: 0.5,
                            delay: 1 + skillIndex * 0.1,
                          }}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsDiagram;
