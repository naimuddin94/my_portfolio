"use client";

import type React from "react";
import { Code, Database, Layout, type LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, type Variants } from "framer-motion";

interface SkillsData {
  frontend: string[];
  backend: string[];
  database: string[];
}

const skills: SkillsData = {
  frontend: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Redux",
    "Tanstack Query",
    "Tailwind CSS",
    "Material UI",
    "Ant Design",
    "Zod",
  ],
  backend: [
    "Express.js",
    "Nest.js",
    "Prisma",
    "Mongoose",
    "Firebase",
    "Meilisearch",
    "GraphQL",
    "JWT",
  ],
  database: ["MongoDB", "PostgreSQL"],
};

interface SkillItemProps {
  skill: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.li
      className="flex items-center"
      variants={itemVariants}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, color: "hsl(var(--primary))" }}
    >
      <span className="h-2 w-2 bg-primary rounded-full mr-2" />
      {skill}
    </motion.li>
  );
};

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: LucideIcon;
  index: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  skills,
  icon: Icon,
  index,
}) => {
  const categoryVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={categoryVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon className="h-6 w-6" />
            <span>{title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <motion.ul
            className="grid grid-cols-2 gap-2"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {skills.map((skill) => (
              <SkillItem key={skill} skill={skill} />
            ))}
          </motion.ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const SkillsSection: React.FC = () => {
  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <SkillCategory
            title="Frontend"
            skills={skills.frontend}
            icon={Layout}
            index={0}
          />
          <SkillCategory
            title="Backend"
            skills={skills.backend}
            icon={Code}
            index={1}
          />
          <SkillCategory
            title="Database"
            skills={skills.database}
            icon={Database}
            index={2}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
