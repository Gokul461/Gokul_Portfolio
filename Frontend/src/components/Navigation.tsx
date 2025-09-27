import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'nav-blur' : 'bg-transparent'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2 cursor-pointer select-none"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
                <span className="text-white font-bold text-lg">
                  <em>G</em>
                </span>
              </div>
              <span className="text-xl font-extrabold tracking-wide">Portfolio</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => scrollToSection(item.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Theme toggle */}
              <motion.button
                className="w-10 h-10 rounded-full bg-gradient-to-r from-primary/10 to-secondary/20 border border-primary/30 backdrop-blur-sm flex items-center justify-center hover:border-primary/50 transition-all duration-300"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-yellow-400" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-400" />
                )}
              </motion.button>

              <Button
                variant="outline"
                className="btn-outline-glow border-fuchsia-600 hover:bg-fuchsia-600 text-black dark:text-white dark:hover:bg-fuchsia-600 transition-colors"
                onClick={() =>
                  window.open(
                    'https://drive.google.com/file/d/1dJatPkr96EdAJj8wRIxja3DTqmto8AVQ/view?usp=sharing'
                  )
                }
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>

              <Button className="btn-hero" onClick={() => scrollToSection('#contact')}>
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute top-0 right-0 w-64 h-full glass p-6 pt-20 bg-white/80 dark:bg-black"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="space-y-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium text-lg"
                    onClick={() => scrollToSection(item.href)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.button>
                ))}

                <div className="pt-6 space-y-4 border-t border-border">
                  {/* Mobile Theme Toggle */}
                  <motion.button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="
 w-full px-4 py-2.5 rounded-full
    bg-gray-300 dark:bg-black
    border border-primary/30
    backdrop-blur-sm
    hover:bg-gray-400 dark:hover:bg-gray-800
    hover:border-primary/50 hover:shadow-md
    transition-all duration-300 ease-in-out
    flex items-center justify-center gap-3
    text-gray-800 dark:text-gray-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {theme === "dark" ? (
                      <Sun className="w-5 h-5 text-yellow-400 transition-colors duration-300" />
                    ) : (
                      <Moon className="w-5 h-5 text-indigo-400 transition-colors duration-300" />
                    )}
                    <span className="font-medium">
                      {theme === "dark" ? "Light Mode" : "Dark Mode"}
                    </span>
                  </motion.button>


                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2 border-fuchsia-600 hover:bg-fuchsia-600 text-black dark:text-white dark:hover:bg-fuchsia-600 transition-colors"
                    onClick={() => {
                      window.open("/resume.pdf", "_blank");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <Download className="w-4 h-4" />
                    Resume
                  </Button>


                  <Button
                    className="w-full btn-hero bg-violet-500 text-white"
                    onClick={() => scrollToSection('#contact')}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
