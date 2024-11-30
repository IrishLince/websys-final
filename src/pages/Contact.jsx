import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Github, Facebook, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import contactImage from '../images/Contactimage.png';

// Custom Philippine Flag Icon
const PhilippineFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="0"
  >
    {/* Background */}
    <rect width="24" height="12" fill="#0038A8" />
    <rect y="12" width="24" height="12" fill="#CE1126" />
    {/* White Triangle */}
    <path d="M0 0L12 12L0 24Z" fill="white" />
    {/* Sun and Stars */}
    <circle cx="3" cy="12" r="2" fill="#FCD116" />
    <circle cx="2" cy="4" r="1" fill="#FCD116" />
    <circle cx="2" cy="20" r="1" fill="#FCD116" />
    <circle cx="6" cy="7" r="1" fill="#FCD116" />
    <circle cx="6" cy="17" r="1" fill="#FCD116" />
  </svg>
);

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

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    { 
      icon: <Phone className="h-6 w-6 text-blue-400" />, 
      text: "+639923383402",
      type: "Phone"
    },
    { 
      icon: <Mail className="h-6 w-6 text-green-400" />, 
      text: "lince2221329@mkt.ceu.edu.ph",
      type: "Email"
    },
    { 
      icon: <PhilippineFlag />, 
      text: "Philippines",
      type: "Location"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      url: "https://github.com/IrishLince",
      name: "GitHub",
      color: "hover:text-gray-400"
    },
    {
      icon: <Facebook className="h-6 w-6" />,
      url: "https://www.facebook.com/theonlyroyalty9",
      name: "Facebook",
      color: "hover:text-blue-400"
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      url: "https://www.instagram.com/cartiii_dior/",
      name: "Instagram",
      color: "hover:text-pink-400"
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Simulate form submission
    console.log(formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 sm:pt-24 md:pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="container mx-auto grid md:grid-cols-2 gap-8 items-center max-w-7xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="flex justify-center items-center order-2 md:order-1"
          variants={itemVariants}
        >
          <motion.div 
            className="w-full max-w-lg px-4 sm:px-0"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.img
              src={contactImage}
              alt="Contact Photo"
              className="rounded-lg shadow-xl w-full h-auto object-cover object-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6,
                ease: "easeOut"
              }}
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="space-y-6 order-1 md:order-2"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center md:text-left"
            variants={itemVariants}
          >
            Contact Me
          </motion.h1>

          {/* Contact Information Section */}
          <motion.div 
            className="space-y-4 bg-gray-800 p-4 sm:p-6 rounded-lg"
            variants={itemVariants}
          >
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-4"
                whileHover={{ 
                  x: 10,
                  transition: { duration: 0.2 }
                }}
              >
                {info.icon}
                <div>
                  <p className="font-semibold text-sm text-gray-400">{info.type}</p>
                  <p className="text-sm sm:text-base">{info.text}</p>
                </div>
              </motion.div>
            ))}

            {/* Social Media Links */}
            <div className="pt-4 border-t border-gray-700">
              <p className="font-semibold text-sm text-gray-400 mb-3">Social Media</p>
              <div className="flex gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transform transition-all duration-200 ${social.color}`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            onSubmit={handleSubmit}
            className="space-y-4"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm">Message</label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                placeholder="Your Message"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle2 className="h-5 w-5" />
                  Sent Successfully
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Contact;