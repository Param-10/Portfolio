import React from 'react';
import { motion } from 'framer-motion';
import useSpaceship from '../hooks/useSpaceship';

const Spaceship = () => {
  const { position } = useSpaceship();

  return (
    <motion.div 
      className="fixed pointer-events-none z-50"
      style={{
        backgroundImage: `url('/spaceship.png')`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '50px',  // Adjust these values based on your image size
        height: '50px'
      }}
      animate={{ x: position.x - 25, y: position.y - 25 }}
      transition={{ type: "spring", stiffness: 500, damping: 25 }}
    />
  );
};

export default Spaceship;