import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');

  useEffect(() => {
    const texts = [
      'Initializing...',
      'Loading Components...',
      'Setting up Skills...',
      'Preparing Portfolio...',
      'Almost Ready...'
    ];

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        const textIndex = Math.floor((newProgress / 100) * texts.length);
        setLoadingText(texts[Math.min(textIndex, texts.length - 1)]);
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800);
          return 100;
        }
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden"
      >
        {/* Portfolio Gradient Background */}
        <div className="absolute inset-0 ">
          <div className="absolute inset-0 pointer-events-none" />
        </div>
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="text-center space-y-8 z-10">
          {/* Animated Orb with Avatar/Logo */}
        <motion.div
            className="relative mx-auto"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <div className="loading-orb mx-auto relative">
              <div className="absolute inset-2 rounded-full bg-background/20 backdrop-blur-sm" />
            </div>
          </motion.div>

          {/* Portfolio Name & Tagline */}
          <motion.div
            className="space-y-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gradient">
              Gokulnath
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-mono">
              Full Stack Developer Portfolio
            </p>
            <p className="text-base text-accent font-semibold">
              Crafting digital experiences...
            </p>
          </motion.div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-lg text-muted-foreground font-mono italic">
              {loadingText}
            </p>
          </motion.div>

          {/* Stylish Progress Bar */}
          <motion.div
            className="w-64 mx-auto space-y-2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="w-full bg-muted rounded-full h-3 overflow-hidden shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            <p className="text-sm text-muted-foreground font-mono">
              {progress}% Complete
            </p>
          </motion.div>

          {/* Code-like loading animation */}
          <div className="flex justify-center">
          <motion.div
            className="text-left font-mono text-sm text-muted-foreground space-y-1 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            {[
              '> Synthesizing creativity...',
              '> Assembling digital dreams...',
              '> Powering up your experience...',
              '> Portfolio ready to launch 🚀'
            ].map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 + i * 0.3 }}
              >
                {line}
              </motion.div>
            ))}
          </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;