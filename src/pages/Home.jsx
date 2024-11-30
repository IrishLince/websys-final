import React from 'react';
import { motion } from 'framer-motion';
import homeimg from '../images/Homeimg.png';
import { ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    }
  }
};

const imageVariants = {
  hover: { 
    scale: 1.05,
    transition: { 
      duration: 0.3 
    }
  }
};

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 sm:pt-24 md:pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="container mx-auto grid md:grid-cols-2 gap-8 items-center max-w-7xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="space-y-4 sm:space-y-6 text-center md:text-left order-2 md:order-1"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            variants={itemVariants}
          >
            My Portfolio
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0"
            variants={itemVariants}
          >
            Explore the website I created, showcasing creativity, functionality, and user-focused design.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <motion.a 
              href="https://www.figma.com/design/0UopDZT46U0Tv4K2zISpAy/Lince_Mechamods_INDIVIDUAL?node-id=0-1&t=HjhaHcKKEB1sLZTf-1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors rounded-md group w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Now
              <ArrowRight 
                className="ml-2 group-hover:translate-x-1 transition-transform" 
                size={20} 
              />
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex justify-center items-center order-1 md:order-2"
          variants={itemVariants}
        >
          <motion.div 
            className="w-full max-w-md px-4 sm:px-0"
            whileHover="hover"
            variants={imageVariants}
          >
            <motion.img
              src={homeimg}
              alt="Mecha Mods Website Preview"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6,
                ease: "easeOut"
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;