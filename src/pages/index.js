import Spaceship from '../components/Spaceship';
import SpaceBackground from '../components/SpaceBackground';
import AsteroidSection from '../components/AsteroidSection';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <SpaceBackground />
      <Spaceship />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-4xl font-bold mb-8">Param's Portfolio Website</h1>
        <div className="flex flex-wrap justify-center mt-8">
          <AsteroidSection title="About Me" content="I'm a Junior CS student at University of South Florida" />
          <AsteroidSection title="Projects" content="Check out my cool projects" />
          <AsteroidSection title="Skills" content="JavaScript, React, Next.js" />
        </div>
        <button className="mt-8 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
          Start Journey
        </button>
      </div>
    </div>
  );
}