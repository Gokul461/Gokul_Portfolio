import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Certificate images
import PythonCert from "../assets/Certificates/Python.png";
import MongoDBCert from "../assets/Certificates/MongoDB.png";
import DataAnalysisCert from "../assets/Certificates/accenture_analytics.png";
import DataVisualizationCert from "../assets/Certificates/Tata_vis.png";
import AWSCloudCert from "../assets/Certificates/AWS.png";
import AIMLCert from "../assets/Certificates/AIML.png";
import OracleCertificate from "../assets/Certificates/oracle.png";

const CertificateCarousel = () => {
  const certificates = [
    { title: "Advanced SQL Certification", image: OracleCertificate },
    { title: "Python Certification", image: PythonCert },
    { title: "MongoDB Certification", image: MongoDBCert },
    { title: "Data Analysis Certification", image: DataAnalysisCert },
    { title: "Data Visualization Certification", image: DataVisualizationCert },
    { title: "AWS Cloud Certification", image: AWSCloudCert },
    { title: "AI & Machine Learning Certification", image: AIMLCert },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const prevSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const nextSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isHovered || showModal) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered, showModal, certificates.length]);

  // Keyboard navigation for modal
  useEffect(() => {
    if (!showModal) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line
  }, [showModal, currentIndex]);

  return (
    <div className="w-full max-w-3xl mx-auto relative px-2">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl text-center font-heading font-bold text-gradient mb-5">
        My Certifications
      </h2>

      {/* Carousel Container */}
      <div
        className="relative inline-block rounded-xl shadow-lg bg-gradient-to-tr from-primary/10 via-background to-primary/5 px-2 py-4 w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={certificates[currentIndex].image}
              alt={certificates[currentIndex].title}
              className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[30rem] lg:h-[27rem] object-contain cursor-pointer rounded-lg shadow-md transition-all duration-200"
              onClick={() => setShowModal(true)}
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay Title */}
        <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center py-2 text-sm font-medium rounded-b-lg">
          {certificates[currentIndex].title}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-background/90 hover:bg-primary hover:text-white rounded-full p-2 transition-all shadow-lg z-20"
          aria-label="Previous"
          tabIndex={0}
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-background/90 hover:bg-primary hover:text-white rounded-full p-2 transition-all shadow-lg z-20"
          aria-label="Next"
          tabIndex={0}
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center gap-3 mt-4 flex-wrap">
        {certificates.map((cert, index) => (
          <motion.img
            key={index}
            src={cert.image}
            alt={cert.title}
            onClick={() => setCurrentIndex(index)}
            className={`w-12 h-12 sm:w-14 sm:h-14 object-contain bg-white rounded-lg cursor-pointer border-2 transition-all duration-200 ${
              index === currentIndex
                ? "border-primary shadow-md opacity-100"
                : "border-gray-300 opacity-70 hover:opacity-100"
            }`}
            whileHover={{ scale: 1.07 }}
            draggable={false}
          />
        ))}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="relative w-auto max-w-[90vw] p-4 bg-background rounded-xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={certificates[currentIndex].image}
                alt={certificates[currentIndex].title}
                className="w-full max-h-[75vh] object-contain rounded-lg"
                draggable={false}
              />
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CertificateCarousel;
