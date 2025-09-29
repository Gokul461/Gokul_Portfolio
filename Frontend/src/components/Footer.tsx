import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Link,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const certificates = [
    {
      title: "Python Essentials",
      link: "https://drive.google.com/file/d/18ec0ysHQJ7jVha6NpqUaIZFoUV6kXDBM/view?usp=sharing",
    },
    {
      title: "Advanced SQL & Database Management",
      link: "https://drive.google.com/file/d/1JuWn332tOF3zLRNZU6S8-6T6N954p3Yu/view",
    },
    {
      title: "AWS Academy Graduate",
      link: "https://drive.google.com/file/d/1Mcr2bzDHe0Tr_b4Zrh75wwJAXyZAG6pA/view?usp=sharing",
    },
    {
      title:
        "ML & Data Visualization",
      link: "https://drive.google.com/file/d/1YmhJb-N-9zBYtqg7lK5I-hcYNhD3_hXb/view?usp=sharing",
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-card/20 backdrop-blur-md border-t border-border">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-40 h-40 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-32 h-32 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 lg:w-48 lg:h-48 bg-secondary/10 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16 relative z-10">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 mb-8 lg:mb-12">
          {/* Brand Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="text-xl sm:text-2xl lg:text-lg xl:text-base font-heading font-bold text-gradient cursor-pointer hover:scale-105 transition-transform"
              onClick={scrollToTop}
            >
              Gokulnath.dev
            </motion.div>
            <p className="text-muted-foreground text-xs sm:text-sm lg:text-sm xl:text-sm leading-relaxed max-w-xs">
              Building exceptional digital experiences with a passion for design,
              AI, and cutting-edge technology.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4 pt-2">
              {[
                { icon: Github, href: "https://github.com/Gokul461", label: "GitHub" },
                {
                  icon: Linkedin,
                  href: "http://linkedin.com/in/gokulnath-s-b57313264",
                  label: "LinkedIn",
                },
                { icon: Instagram, href: "https://www.instagram.com/im_gokul__07/?next=%2F", label: "Instagram" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:text-primary transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.label}
                >
                  {/* Responsive icon sizes */}
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-base sm:text-lg lg:text-lg xl:text-base font-semibold text-foreground">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              {footerLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  className="text-xs sm:text-sm lg:text-sm xl:text-sm text-muted-foreground hover:text-primary transition-all duration-300 text-left"
                  onClick={() => scrollToSection(link.href)}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 + 0.2 }}
                  whileHover={{ x: 5 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-base sm:text-lg lg:text-lg xl:text-base font-semibold text-foreground">Get In Touch</h3>
            <div className="flex flex-col space-y-2 sm:space-y-3">
              <motion.a
                href="mailto:gokulnath461123456@gmail.com"
                className="flex items-center gap-2 text-xs sm:text-sm lg:text-sm xl:text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <Mail size={16} />
                gokulnath461123456@gmail.com
              </motion.a>
              <motion.a
                href="tel:+919677972294"
                className="flex items-center gap-2 text-xs sm:text-sm lg:text-sm xl:text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <Phone size={16} />
                +91 96779 72294
              </motion.a>
              <motion.a
                href="https://wa.me/919677972294"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm lg:text-sm xl:text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <MessageSquare size={16} />
                Chat on WhatsApp
              </motion.a>
              <div className="flex items-center">
                <MapPin size={16} className="text-muted-foreground me-2" />
                <p className="text-xs sm:text-sm lg:text-sm xl:text-sm text-muted-foreground">Madurai, India</p>
              </div>
            </div>
          </motion.div>
          {/* Fun Facts Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-foreground">
              Fun Facts
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>⚡ Love to build projects.</li>
              <li>📚 Avid reader of tech blogs.</li>
              <li>🎮 Enjoys playing Free Fire in free time.</li>

              <li>🌱 Always learning new tech.</li>
            </ul>
          </motion.div>


        </div>

        {/* Divider */}
        <motion.div
          className="w-full mb-4 sm:mb-6 border-t border-border"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-4 text-xs sm:text-sm lg:text-sm xl:text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-muted-foreground">
            © {currentYear} Gokulnath. All rights reserved.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-2 sm:gap-4">
            {/* Privacy & Terms */}
            <div className="flex justify-center gap-2 sm:gap-3 mr-0 md:mr-16 text-xs sm:text-sm lg:text-sm xl:text-sm text-muted-foreground ">
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <span className="mx-2">|</span>
              <a
                href="/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Terms & Conditions
              </a>
            </div>

            {/* Back to Top */}
            <motion.button
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
              onClick={scrollToTop}
            >
              Back to Top ↑
            </motion.button>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
