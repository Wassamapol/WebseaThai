import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="relative h-screen bg-cover bg-center text-white text-center py-20 bg-fixed"
      style={{ backgroundImage: 'url(https://s.isanook.com/tr/0/ud/284/1423727/pm.jpg)' }}
    >
      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* This will darken the background */}

      <h1 className="text-cyan-200 text-6xl font-bold text-center pt-32 relative z-10">Sea in Thailand</h1>
      <p className="mt-4 text-lg text-cyan-300 font-bold relative z-10">Discover new destinations and adventures.</p>

      <Link to="/main">
        <button className="mt-6 px-6 py-3 bg-cyan-900 text-blue-200 font-semibold rounded-lg hover:bg-cyan-950 relative z-10 transform transition-transform duration-300 hover:translate-x-2">
          Go Go
        </button>
      </Link>
    </div>
  );
}

export default Main;