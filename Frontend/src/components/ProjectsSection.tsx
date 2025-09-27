import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import fashionMart from '@/assets/fashionmart.png';
import voViProject from '../assets/VoviMover.jpeg';
import dashboardProject from '@/assets/strong-buy.jpg';
import CertificateCarousel from './CertificateSection';
const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "VoVi-Move: Smart Assistive Wheelchair",
      description: "Hands-free wheelchair control using eye-tracking and voice commands. Presented at Karpagam Expo 2024 (1,000+ attendees).",
      image: voViProject,
      github: "https://github.com/Gokul461/VoVi-Mover",
      live: null,
      technologies: ["Python", "TensorFlow", "Vosk", "AI"],
      featured: true,
      category: "Machine Learning"
    },
    {
      title: "FashionMart E-commerce",
      description: "Full-featured e-commerce platform with product catalog, shopping cart, and checkout functionality. Designed for modern UX principles.",
      image: fashionMart,
      github: "https://github.com/Gokul461/Fashion-Mart",
      live: null,
      technologies: ["React", "Node.js", "CSS", "JavaScript"],
      featured: true,
      category: "Full-Stack"
    },
    {
      title: "Stock Market Sentiment Analysis",
      description: "AI-powered sentiment analysis tool for stock market predictions using machine learning and real-time data processing.",
      image: dashboardProject,
      github: "https://github.com/Gokul461/Stock-market-sentiment-analysis",
      live: null,
      technologies: ["Python", "ML", "Data Analysis", "NLP"],
      featured: true,
      category: "Data Analysis"
    },

    // Full-Stack
    {
      title: "Employee Management System (EMS)",
      description: "Full-stack EMS with CRUD operations, responsive React frontend, MySQL backend, and REST APIs.",
      image: null,
      github: "https://github.com/Gokul461/Employee-management-System-java-fse-",
      live: null,
      technologies: ["React", "Spring Boot", "MySQL", "REST API"],
      featured: false,
      category: "Full-Stack"
    },

    // React-Based Projects
    {
      title: "Kanban Task Manager",
      description: "Modular React app for task management with responsive UI and clean component architecture.",
      image: null,
      github: "https://github.com/Gokul461/Kanban-Management-system",
      live: null,
      technologies: ["React", "JavaScript", "CSS", "UX"],
      featured: false,
      category: "Frontend"
    },
    {
      title: "Weather App",
      description: "Interactive weather application fetching live data using APIs with dynamic UI updates.",
      image: null,
      github: "https://github.com/Gokul461/ReactExercises-steinnlabs-",
      live: null,
      technologies: ["React", "JavaScript", "APIs", "CSS"],
      featured: false,
      category: "Frontend"
    },

    // Python / Utility
    {
      title: "Contact Book",
      description: "Desktop application for storing and managing contacts using Python and PostgreSQL.",
      image: null,
      github: "https://github.com/Gokul461/Contact_book",
      live: null,
      technologies: ["Python", "Tkinter", "PostgreSQL"],
      featured: false,
      category: "Utility"
    },
    {
      title: "Password Generator", description: "Python utility app to generate strong passwords with customizable parameters.", image: null, github: "https://github.com/Gokul461/Password_generator", live: null, technologies: ["Python", "Tkinter"], featured: false, category: "Utility"
    },
    {
      title: "Calculator",
      description: "Basic desktop calculator built with HTML/CSS/JS for arithmetic operations.",
      image: null,
      github: "https://github.com/Gokul461/Calculator",
      live: null,
      technologies: ["HTML", "CSS", "JavaScript"],
      featured: false,
      category: "Utility"
    },

    // Power BI / Data Analysis
    {
      title: "Call Center Analytics Dashboard",
      description: "Power BI dashboard with interactive visualizations and insights for call center metrics.",
      image: null,
      github: "https://github.com/Gokul461/Call_center-analysis-power-BI",
      live: null,
      technologies: ["Power BI", "Data Analysis", "Visualization"],
      featured: false,
      category: "Data Analysis"
    },

    // HTML / Frontend Web
    {
      title: "Facebook Signup Page Clone",
      description: "Pixel-perfect recreation of Facebook signup page with responsive design and modern UI.",
      image: null,
      github: "https://github.com/Gokul461/Facebook-Account-creation-form",
      live: null,
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      featured: false,
      category: "Frontend"
    },
    {
      title: "Survey Form",
      description: "Professional survey form with advanced validation, multi-step process, and data collection.",
      image: null,
      github: "https://github.com/Gokul461/survey-form",
      live: null,
      technologies: ["HTML", "CSS", "JavaScript", "Forms"],
      featured: false,
      category: "Frontend"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Frontend': 'bg-gradient-to-b from-blue-300 to-blue-500 text-black dark:text-black',
      'Full-Stack': 'bg-gradient-to-b from-purple-300 to-purple-500 text-black dark:text-black',
      'Machine Learning': 'bg-gradient-to-b from-green-300 to-green-500 text-black dark:text-black',
      'Utility': 'bg-gradient-to-b from-lime-300 to-lime-500 text-black dark:text-black',
      'Backend': 'bg-gradient-to-b from-cyan-300 to-cyan-500 text-black dark:text-gray-300',
      'Data Analysis': 'bg-gradient-to-b from-orange-300 to-orange-500 text-black dark:text-black',
      'Gaming': 'bg-gradient-to-b from-pink-300 to-pink-500 text-black dark:text-gray-300',
      'DevOps': 'bg-gradient-to-b from-red-300 to-red-500 text-black dark:text-gray-300',
      'AI/ML': 'bg-gradient-to-b  from-teal-300 to-teal-500 text-black dark:text-gray-300',
    };

    return colors[category as keyof typeof colors] || 'bg-gray-500/20 text-gray-400';
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
            Featured Projects
          </h2>
          <div className="section-divider" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work spanning web development, machine learning, and data analysis
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              className="project-card rounded-2xl overflow-hidden group"
              whileHover={{ y: -8 }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-card flex items-center justify-center">
                    <Code size={48} className="text-muted-foreground" />
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className={`${getCategoryColor(project.category)} border-none`}>
                    {project.category}
                  </Badge>
                </div>

                {/* Featured Badge */}
                <div className="absolute top-4 right-4">
                  <motion.div
                    className="px-3 py-1 rounded-full text-xs flex items-center gap-1 
               bg-gradient-to-t from-pink-300 to-pink-400 text-black font-semibold
               shadow-lg"
                    animate={{
                      boxShadow: [
                        '0 0 10px rgba(255, 200, 50, 0.5)',
                        '0 0 20px rgba(255, 100, 150, 0.6)',
                        '0 0 10px rgba(255, 200, 50, 0.5)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Star size={12} color="currentColor" className="text-pink-800 font-semibold" />
                    Featured
                  </motion.div>
                </div>

              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-gray-300 hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border btn-outline-glow"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  {project.live && (
                    <Button
                      size="sm"
                      className="flex-1 btn-hero"
                      onClick={() => window.open(project.live!, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-heading font-semibold text-center mb-8">
            All Projects
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card rounded-xl p-6 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <Badge className={`${getCategoryColor(project.category)} border-none text-xs mt-2`}>
                        {project.category}
                      </Badge>
                    </div>
                    <Code size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-gray-300">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-gray-300">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border btn-outline-glow hover:bg-cyan-400 hover:text-black"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={14} className="mr-2" />
                    View Code
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-muted-foreground mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <Button
            className="btn-hero text-lg px-8 py-3"
            onClick={() => window.open('https://github.com/Gokul461', '_blank')}
          >
            <Github size={20} className="mr-2" />
            View All on GitHub
          </Button>
        </motion.div>

        {/* Elegant Divider with Icon */}
        <div className="flex items-center justify-center my-16">
          <div className="flex-grow h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent rounded-full" />
          <span className="mx-6 text-muted-foreground font-semibold text-lg flex items-center gap-2">
            <Star className="text-primary" size={20} />
            Certificates
          </span>
          <div className="flex-grow h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent rounded-full" />
        </div>

        {/* Certificates Section */}
        <div className='mt-5'>
          <CertificateCarousel />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;