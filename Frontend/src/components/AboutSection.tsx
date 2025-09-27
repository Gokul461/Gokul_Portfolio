import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Users, Code2, Trophy, Heart, Briefcase, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image1 from '../assets/gdg-pic-1.jpg';
import Image2 from '../assets/imp-pic1.jpeg';
import Image3 from '../assets/me6.jpg';


const AboutSection: React.FC = () => {
  const achievements = [
    {
      title: "Hackathon Champion",
      subtitle: "Impairathon Finalist",
      description: "Developed Vision-Move, an innovative assistive wheelchair with eye-tracking technology",
      icon: Trophy,
      color: "text-yellow-400",
      image: Image2
    },
    {
      title: "GDG Core Member",
      subtitle: "Web Development Lead",
      description: "Leading web development initiatives and mentoring junior developers",
      icon: Users,
      color: "text-blue-400",
      image: Image1
    },
    {
      title: "Innovation Project",
      subtitle: "Vision-Move Wheelchair",
      description: "Revolutionary assistive technology integrating AI and accessibility",
      icon: Code2,
      color: "text-green-400",
      image: Image3
    }
  ];

  const stats = [
    { number: "3+", label: "Hackathons Won", icon: Trophy },
    { number: "30+", label: "Projects Built", icon: Code2 },
    { number: "3+", label: "Tech Stacks", icon: GraduationCap },
    { number: "400+", label: "Problems Solved", icon: Award }
  ];

  const education = [
    {
      id: 1,
      level: "Bachelor of Engineering (UG)",
      institution: "PSNA College of Engineering and Technology",
      degree: "Computer Science and Engineering",
      year: "2022 — 2026",
      status: "Currently Pursuing",
      grade: "Percentage: 89.2%",
      icon: GraduationCap
    },
    {
      id: 2,
      level: "Higher Secondary Education (HSC)",
      institution: "PSL Narayana Vidyalaya CBSE",
      degree: "Computer Science Stream [CBSE]",
      year: "2021 — 2022",
      status: "Completed",
      grade: "Percentage: 90%",
      icon: Award
    },
    {
      id: 3,
      level: "Secondary Education (SSLC)",
      institution: "PSL Narayana Vidyalaya CBSE",
      degree: "CBSE Board",
      year: "2019 — 2020",
      status: "Completed",
      grade: "Percentage: 92.2%",
      icon: Award
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gradient mb-4">
            About Me
          </h2>
          <div className="section-divider" />
          <p className="text-lg text-muted-foreground mt-4">Get to know more about my journey and achievements</p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Profile Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="card-gradient rounded-2xl p-6 text-center hover-lift">
                  <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">Academic Excellence</h3>
                  <p className="text-sm text-muted-foreground">
                    Consistently top of the class<br />
                    89%+ in Bachelor of Engineering
                  </p>
                </div>

                <div className="card-gradient rounded-2xl p-6 text-center hover-lift">
                  <Briefcase className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">Experience</h3>
                  <p className="text-sm text-muted-foreground">Steinn Labs Pvt Ltd.<br />Industry & Research</p>
                </div>
              </div>

              <div className="card-gradient rounded-2xl p-9 space-y-4 hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-semibold text-foreground">My Story</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I am an innovative and detail-oriented Software Developer with a strong foundation in
                  front-end development, data analysis, and artificial intelligence. My journey in tech
                  has been fueled by a passion for problem-solving, creating intuitive designs, and
                  implementing impactful solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I have hands-on experience in building smart applications, such as Vision-Move, a
                  revolutionary assistive wheelchair integrating eye-tracking and voice recognition
                  technologies. With a proven track record in hackathons and academic competitions,
                  I thrive in fast-paced, collaborative environments.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="card-gradient rounded-2xl p-6 text-center group hover-lift"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-gradient mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Tech Focus Areas */}
            <div className="card-gradient rounded-2xl p-11 hover-lift">
              <h3 className="text-xl font-semibold text-foreground mb-4">Focus Areas</h3>
              <div className="space-y-3">
                {[
                  "Full-Stack Web Development",
                  "Machine Learning & AI",
                  "Data Analysis & Visualization",
                ].map((area, index) => (
                  <motion.div
                    key={area}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                  >
                    <div className="w-2 h-2 bg-gradient-primary rounded-full" />
                    <span className="text-muted-foreground">{area}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Clean Education Timeline */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-semibold text-foreground mb-4">
              Education Journey
            </h3>
            <div className="section-divider" />
            <p className="text-muted-foreground mt-4">
              My academic timeline showcasing continuous learning and growth
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Fixed Timeline Line */}
            <div className="absolute left-5 top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full z-0" />

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute top-20 w-4 h-4 bg-primary rounded-full z-10 border-2 border-white" style={{ left: '0.875rem' }} />
                  {/* Education Card */}
                  <div className="ml-16 card-gradient rounded-2xl p-6 hover-lift">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <edu.icon className="w-5 h-5 text-primary" />
                          <Badge variant="secondary" className="text-xs">
                            {edu.status}
                          </Badge>
                        </div>
                        <h4 className="text-xl font-semibold text-foreground mb-1">
                          {edu.level}
                        </h4>
                        <p className="text-lg text-primary font-medium mb-1">
                          {edu.institution}
                        </p>
                        <p className="text-muted-foreground">
                          {edu.degree}
                        </p>
                        <p className="text-muted-foreground">
                          {edu.grade}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{edu.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Achievement Cards */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-semibold text-foreground mb-4">
              Key Achievements
            </h3>
            <div className="section-divider" />
            <p className="text-muted-foreground mt-4">Highlights from my journey in technology and innovation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="project-card rounded-2xl overflow-hidden group bg-card-bg dark:bg-card-bg-dark shadow-sm hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -8 }}
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3 relative">
                    <achievement.icon
                      className={`w-6 h-6 ${achievement.color} mt-1`}
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-accent font-medium">{achievement.subtitle}</p>

                      {/* Badge */}
                      <Badge className="absolute top-0 right-0 bg-gradient-to-br from-purple-400 to-pink-400 text-white shadow-md">
                        Achievement
                      </Badge>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Progress Line */}
                  <motion.div
                    className="h-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 shadow-lg"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-block card-gradient rounded-2xl px-8 py-6 hover-lift">
            <p className="text-foreground font-medium mb-2">
              "Passionate about leveraging creativity and technical expertise"
            </p>
            <p className="text-muted-foreground text-sm">
              Always learning, always growing, always innovating
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;