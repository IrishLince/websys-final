import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../images/Aboutimage.png';
import { Code, Laptop } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const imageVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
};

// Custom Basketball Icon
const BasketballIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="h-8 w-8 text-red-400"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const skills = [
  {
    icon: <Code className="h-8 w-8 text-blue-400" />,
    title: 'Web Development',
    description: 'Passionate about creating functional and innovative web solutions',
  },
  {
    icon: <Laptop className="h-8 w-8 text-green-400" />,
    title: 'PC Assembly',
    description: 'Experienced in building and optimizing computer systems',
  },
  {
    icon: <BasketballIcon />,
    title: 'Sports Enthusiast',
    description: 'Active basketball player with team spirit and competitive drive',
  },
];

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 sm:pt-24 md:pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="container mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="flex justify-center items-center order-2 md:order-1"
          variants={itemVariants}
        >
          <motion.div
            className="w-full max-w-md px-4 sm:px-0"
            whileHover="hover"
            variants={imageVariants}
          >
            <motion.img
              src={profileImage}
              alt="Profile Photo"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
              }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="space-y-6 text-center md:text-left order-1 md:order-2"
          variants={containerVariants}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            variants={itemVariants}
          >
            About Me
          </motion.h1>
          <motion.div
            className="max-w-2xl space-y-4 mx-auto md:mx-0"
            variants={itemVariants}
          >
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              I'm Irish Tillo Lince, a 21-year-old 3rd-year IT student at CEU Makati with a strong passion for technology and innovation. My journey in IT has been fueled by my love for coding, PC assembly, and web development, where I constantly strive to improve my skills and expand my knowledge.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-4 rounded-lg text-center"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="flex justify-center mb-2">{skill.icon}</div>
                  <h3 className="font-bold text-lg">{skill.title}</h3>
                  <p className="text-sm text-gray-400">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
