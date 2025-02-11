"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import Container from "./Container";

interface Skill {
  name: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
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
    skills: [
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
    skills: [{ name: "MongoDB" }, { name: "PostgreSQL" }],
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
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
    viewport={{ once: false, amount: 0.3 }} // Animation triggers every time this element enters the viewport
  >
    {name}
  </motion.div>
);

const SkillsDiagramVertical: React.FC = () => {
  const sectionRef = useRef(null);
  useInView(sectionRef, { once: false, amount: 0.3 });

  return (
    <Container>
      <section
        id="skills"
        className="py-16 px-4 overflow-x-auto bg-white"
        ref={sectionRef}
      >
        <motion.h2
          className="text-3xl font-bold text-center mb-8 text-slate-700"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Technical Skills
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <SkillNode name="Full Stack Development" isMain />
            <motion.div
              className="h-12 w-px bg-purple-300"
              initial={{ height: 0 }}
              whileInView={{ height: 48 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: false, amount: 0.3 }} // Animate on every view
            />
            {skillsData.map((category, index) => (
              <React.Fragment key={category.name}>
                <SkillNode name={category.name} isMain />
                <div className="flex items-center my-4">
                  <motion.div
                    className="w-8 h-px bg-purple-300"
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.7 + index * 0.2,
                    }}
                    viewport={{ once: false, amount: 0.3 }}
                  />
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ml-4">
                    {category.skills.map((skill) => (
                      <SkillNode key={skill.name} name={skill.name} />
                    ))}
                  </div>
                </div>
                {index < skillsData.length - 1 && (
                  <motion.div
                    className="h-12 w-px bg-purple-300"
                    initial={{ height: 0 }}
                    whileInView={{ height: 48 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.7 + index * 0.2,
                    }}
                    viewport={{ once: false, amount: 0.3 }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default SkillsDiagramVertical;
