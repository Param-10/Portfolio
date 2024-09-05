import React from 'react';

const StarryBackground = () => {
  return (
    <div className="fixed inset-0 bg-black">
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: Math.random() * 3 + 'px',
            height: Math.random() * 3 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
          }}
        />
      ))}
    </div>
  );
};

export default StarryBackground;