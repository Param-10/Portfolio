import React from 'react';

const AsteroidSection = ({ title, content }) => {
  return (
    <div className="bg-gray-800 rounded-full p-4 m-4 w-40 h-40 flex items-center justify-center text-center">
      <div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default AsteroidSection;