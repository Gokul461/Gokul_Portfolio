import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCategoryProps {
  title: string;
  level: number;
  skills: string[];
  categoryIndex: number;
}

const SkillGauge: React.FC<{ level: number; categoryIndex: number }> = ({ level, categoryIndex }) => {
  const [progress, setProgress] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let value = 0;
      const increment = level / 150;
      const interval = setInterval(() => {
        value += increment;
        if (value >= level) {
          setProgress(level);
          clearInterval(interval);
        } else {
          setProgress(value);
        }
      }, 16);
      return () => clearInterval(interval);
    }
  }, [isInView, level]);

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress / 100);

  const getGradientId = (index: number) => {
    const gradients = ["frontendGradient", "backendGradient", "dataGradient"];
    return gradients[index] || "frontendGradient";
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
      className="relative flex justify-center mb-6"
    >
      <svg width="160" height="160" className="transform -rotate-90">
        {/* Background Circle */}
        <circle
          cx="80"
          cy="80"
          r={radius}
          stroke="hsl(var(--primary) / 0.08)"
          strokeWidth="12"
          fill="none"
        />
        {/* Progress Circle */}
        <motion.circle
          cx="80"
          cy="80"
          r={radius}
          stroke={`url(#${getGradientId(categoryIndex)})`}
          strokeWidth="12"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut", delay: categoryIndex * 0.2 }}
          strokeLinecap="round"
        />
      </svg>

      {/* Percentage Display */}
      <div className="absolute inset-0 flex flex-col items-center justify-center dark:text-gray-200 light:text-gray-800">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.6 }}
          className="text-center"
        >
          <div className="text-3xl lg:text-4xl font-extrabold">
            {Math.round(progress)}%
          </div>
          <div className="text-xs lg:text-sm text-gray-500 mt-1">Proficiency</div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, level, skills, categoryIndex }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
      className="flex flex-col items-center h-full"
    >
      <Card className="w-full h-full rounded-3xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-500 relative overflow-hidden dark:bg-white/5 glassmorphism">
        <div className="p-6 flex flex-col items-center h-full">
          <SkillGauge level={level} categoryIndex={categoryIndex} />

          {/* Category Title */}
          <h3 className="text-lg lg:text-xl font-semibold mb-4 dark:text-gray-100 light:text-gray-800 text-center">
            {title}
          </h3>

          {/* Skill Badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {skills.map((skill) => (
              <Badge
                variant="outline"
                key={skill}
                className="
    px-4 py-1.5 rounded-full
    bg-gradient-to-b from-gray-50 to-gray-100
    dark:from-gray-200 dark:to-gray-300
    text-gray-800 dark:text-black
    font-medium text-sm lg:text-base
    border border-gray-200 dark:border-gray-600
    shadow-sm
    transition-all duration-300 ease-in-out
    hover:scale-105 hover:shadow-md
    hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200
    dark:hover:from-gray-700 dark:hover:to-gray-600
  "
              >
                {skill}
              </Badge>

            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      level: 85,
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Tailwind", "Bootstrap", "Figma"],
    },
    {
      title: "Backend Development",
      level: 80,
      skills: ["Java", "Spring Boot", "SQL", "MongoDB", "MySQL", "Firebase", "GitHub"],
    },
    {
      title: "Data Analysis & Programming",
      level: 78,
      skills: ["Python", "Excel", "Power BI", "Data Cleaning", "DSA", "ML Algorithms", "PowerPoint"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gradient mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mastering the art of development across multiple domains with passion and precision
          </p>
        </motion.div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              level={category.level}
              skills={category.skills}
              categoryIndex={index}
            />
          ))}
        </div>
      </div>

      {/* SVG Gradients for Gauges */}
      <svg width="0" height="0" className="absolute">
        <defs>
          {/* Frontend - Pink to Purple */}
          <linearGradient id="frontendGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" /> {/* Pink-500 */}
            <stop offset="100%" stopColor="#a855f7" /> {/* Purple-500 */}
          </linearGradient>

          {/* Backend - Purple shades */}
          <linearGradient id="backendGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" /> {/* Purple-500 */}
            <stop offset="100%" stopColor="#c084fc" /> {/* Purple-400 */}
          </linearGradient>

          {/* Data - Green shades */}
          <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" /> {/* Emerald-500 */}
            <stop offset="100%" stopColor="#34d399" /> {/* Emerald-400 */}
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default SkillsSection;
