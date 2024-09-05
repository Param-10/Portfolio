import React from 'react';
import { motion } from 'framer-motion';
import useSpaceship from '../hooks/useSpaceship';

const Spaceship = () => {
  const { position } = useSpaceship();

  return (
    <motion.div 
      className="w-10 h-10 bg-blue-500 rounded-full fixed pointer-events-none z-50"
      style={{
        backgroundImage: `url('/spaceship.png')`,  // You'll need to add this image
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      animate={{ x: position.x - 20, y: position.y - 20 }}
      transition={{ type: "spring", stiffness: 1000, damping: 50 }}
    />
  );
};

export default Spaceship;