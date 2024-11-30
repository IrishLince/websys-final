import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    hidden: { 
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.3
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const linkClass = (path) => {
    return `px-4 py-2 rounded-lg transition-all duration-200 ${
      isActive(path)
        ? 'bg-white text-black font-medium'
        : 'hover:text-gray-300'
    }`;
  };

  const mobileLinkClass = (path) => {
    return `block px-4 py-3 transition-all duration-200 ${
      isActive(path)
        ? 'bg-white text-black font-medium'
        : 'hover:bg-gray-800'
    }`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 border-b border-gray-800 bg-[#1a1a1a] z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link 
            to="/" 
            className="text-xl font-semibold hover:text-gray-300 transition-colors"
          >
            Irish Lince
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {['/websys-final', '/about', '/gallery', '/contact'].map((path, index) => {
              const labels = ['Home', 'About Me', 'Gallery', 'Contact'];
              return (
                <Link 
                  key={path} 
                  to={path} 
                  className={linkClass(path)}
                >
                  {labels[index]}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden absolute left-0 right-0 top-16 bg-[#1a1a1a] pb-4"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
            >
              {['/websys-final', '/about', '/gallery', '/contact'].map((path, index) => {
                const labels = ['Home', 'About Me', 'Gallery', 'Contact'];
                return (
                  <motion.div 
                    key={path}
                    variants={menuItemVariants}
                  >
                    <Link 
                      to={path} 
                      className={mobileLinkClass(path)}
                      onClick={toggleMenu}
                    >
                      {labels[index]}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;