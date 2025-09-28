import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '../assets/me5.jpg';

const HeroSection: React.FC = () => {
  const scrollToSection = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section
        id="hero"
        className="min-h-screen mt-6 flex flex-col lg:flex-row items-center justify-center relative overflow-hidden"
      >
        {/* Static Gradient Background */}
        <div className="absolute dark:from-background dark:via-muted/80 dark:to-background/90">
          {/* Subtle Overlay for blending */}
          <div className="absolute inset-0 bg-black/20 dark:bg-black/40 pointer-events-none" />
          {/* Subtle Animated Stars */}
          {/* Removed violet dots */}
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10 mt-6 md:mt-16">
          {/* Text Section */}
          <motion.div
            className="text-center lg:text-left space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Greeting */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="text-base sm:text-lg text-accent font-medium tracking-wide ms-2">
                Hello, I'm
              </p>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-gradient leading-tight dark:text-gradient">
                Gokulnath S
              </h1>
            </motion.div>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-medium">
                Full Stack Developer
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-semibold leading-tight text-foreground dark:text-foreground">
                Turning{" "}
                <span className="text-gradient dark:text-gradient">
                  Ideas
                </span>{" "}
                Into Experiences That People Remember
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              <p className="text-base sm:text-lg text-muted-foreground max-w-md sm:max-w-xl md:max-w-2xl leading-relaxed mx-auto lg:mx-0 dark:text-muted-foreground">
                Creating{' '}
                <span className="text-primary font-semibold dark:text-primary">
                  extraordinary digital experiences
                </span>{' '}
                through cutting-edge technology, artificial intelligence, and
                innovative problem-solving.{' '}
                <span className="text-accent font-semibold dark:text-accent">
                  One solution away
                </span>{' '}
                from transforming your vision into reality.
              </p>
            </motion.div>
            {/* Buttons */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                className="btn-outline-glow text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-b from-violet-400 to-violet-600 dark:bg-gradient-to-b dark:from-violet-400 dark:to-violet-600 text-white dark:text-white"
                onClick={() => scrollToSection('#contact')}
              >
                Hire Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start pt-4"></div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Decorative Background Elements */}
              <div className="absolute inset-0 -z-10">
                {/* Large background circle */}
                <motion.div
                  className="absolute -top-10 sm:-top-20 -left-10 sm:-left-20 w-56 sm:w-80 lg:w-96 h-56 sm:h-80 lg:h-96 rounded-full bg-gradient-to-br from-primary/20 to-accent/30 blur-2xl sm:blur-3xl"
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
                  transition={{
                    scale: { duration: 4, repeat: Infinity },
                    rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                  }}
                />

                {/* Medium decorative circle */}
                <motion.div
                  className="absolute top-4 sm:top-10 -right-4 sm:-right-10 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 rounded-full bg-gradient-to-bl from-secondary/90 to-primary/90 blur-xl sm:blur-2xl"
                  animate={{ scale: [1.2, 1, 1.2], x: [0, 10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1,
                  }}
                />

                {/* Small accent circles */}
                <motion.div
                  className="absolute -bottom-4 sm:-bottom-10 left-4 sm:left-10 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 rounded-full bg-accent/70 blur-md sm:blur-xl"
                  animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                />

                {/* Geometric shapes */}
                <motion.div
                  className="absolute top-8 sm:top-20 left-8 sm:left-20 w-10 sm:w-16 lg:w-20 h-10 sm:h-16 lg:h-20 border-2 border-primary/30 rounded-lg rotate-45"
                  animate={{ rotate: [45, 225, 45], scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                  }}
                />

                <motion.div
                  className="absolute bottom-8 sm:bottom-20 -right-2 sm:-right-5 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 border-2 border-secondary/40 rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1.5,
                  }}
                />
              </div>

              {/* Profile image with glow */}
              <div className="w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden opacity-92 relative z-10 mb-6 md:mb-12">
                <img
                  src={profileImage}
                  alt="Gokulnath - Full Stack Developer"
                  className="w-full h-full object-cover filter brightness-100 contrast-100 glow-img dark:brightness-100 dark:contrast-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-secondary/20 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('#about')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-sm text-muted-foreground dark:text-muted-foreground hover:text-primary dark:hover:text-primary transition-colors"
          >
            <span className="font-medium">Scroll Down</span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
