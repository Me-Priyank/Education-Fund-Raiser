import React from 'react';
import { GraduationCap, Heart } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <GraduationCap className="mx-auto h-16 w-16 mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empower Dreams Through Education
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Help underprivileged children access quality education and build a brighter future.
            Your donation can change lives.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all flex items-center mx-auto gap-2">
            <Heart className="h-5 w-5" />
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
}