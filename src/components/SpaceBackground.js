import React, { useRef, useEffect } from 'react';

const SpaceBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Stars
    const stars = [];
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        speed: Math.random() * 0.5
      });
    }

    // Planets
    const planets = [
      { x: canvas.width * 0.2, y: canvas.height * 0.3, radius: 30, color: '#FF6B6B' },
      { x: canvas.width * 0.8, y: canvas.height * 0.7, radius: 40, color: '#4ECDC4' }
    ];

    // Asteroids
    const asteroids = [];
    for (let i = 0; i < 10; i++) {
      asteroids.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 5 + 2,
        speed: Math.random() * 2 + 0.5,
        angle: Math.random() * Math.PI * 2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0B0B45'; // Dark blue background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and move stars
      ctx.fillStyle = '#FFFFFF';
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
      });

      // Draw planets
      planets.forEach(planet => {
        ctx.fillStyle = planet.color;
        ctx.beginPath();
        ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw and move asteroids
      ctx.fillStyle = '#A9A9A9';
      asteroids.forEach(asteroid => {
        ctx.beginPath();
        ctx.arc(asteroid.x, asteroid.y, asteroid.radius, 0, Math.PI * 2);
        ctx.fill();
        asteroid.x += Math.cos(asteroid.angle) * asteroid.speed;
        asteroid.y += Math.sin(asteroid.angle) * asteroid.speed;
        if (asteroid.x < 0 || asteroid.x > canvas.width || asteroid.y < 0 || asteroid.y > canvas.height) {
          asteroid.x = Math.random() * canvas.width;
          asteroid.y = Math.random() * canvas.height;
          asteroid.angle = Math.random() * Math.PI * 2;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full" />;
};

export default SpaceBackground;