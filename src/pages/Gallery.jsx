import React from 'react';
import { motion } from 'framer-motion';
import contactImageleft from '../images/Moscow.png';
import contactImageright from '../images/userpersona.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    y: 30, 
    opacity: 0,
    scale: 0.95
  },
  visible: { 
    y: 0, 
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.215, 0.61, 0.355, 1]
    }
  }
};

function Gallery() {
  return (
    <motion.div 
      className="min-h-screen py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8 bg-[#1a1a1a]"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 text-white" 
          variants={itemVariants}
        >
          Gallery
        </motion.h1>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 auto-rows-auto"
          variants={containerVariants}
        >
          <motion.div 
            className="group relative bg-gray-800/10 rounded-2xl p-6 transition-all duration-300 hover:bg-gray-800/20"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="aspect-[16/9] mb-6 overflow-hidden rounded-xl">
              <motion.img
                src={contactImageleft}
                alt="MoSCoW Analysis"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                loading="lazy"
              />
            </div>
            <motion.h2 
              className="text-2xl font-bold mb-4 text-white"
              variants={itemVariants}
            >
              MoSCoW
            </motion.h2>
            <motion.p 
              className="text-base text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              This MoSCoW summary for Mecha Mods outlines the essential features for the website's development, including product listings, secure payment, and customer support.
            </motion.p>
          </motion.div>

          <motion.div 
            className="group relative bg-gray-800/10 rounded-2xl p-6 transition-all duration-300 hover:bg-gray-800/20"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="aspect-[16/9] mb-6 overflow-hidden rounded-xl">
              <motion.img
                src={contactImageright}
                alt="User Persona"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                loading="lazy"
              />
            </div>
            <motion.h2 
              className="text-2xl font-bold mb-4 text-white"
              variants={itemVariants}
            >
              User Persona
            </motion.h2>
            <motion.p 
              className="text-base text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              This user persona for Mecha Mods includes detailed insights into the target customer's biography, background, key goals, and behaviors.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Gallery;
