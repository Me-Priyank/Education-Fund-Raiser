import React from 'react';

const stories = [
  {
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=1740',
    name: 'Sarah',
    location: 'Kenya',
    story: 'Thanks to your donations, I can now attend school and pursue my dream of becoming a doctor.',
  },
  {
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1736',
    name: 'Miguel',
    location: 'Colombia',
    story: 'Education has opened new doors for me and my family. I am the first in my family to attend high school.',
  },
  {
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1740',
    name: 'Priya',
    location: 'India',
    story: 'Your support helped me continue my education during difficult times. Now I can help others in my community.',
  },
];

export function ImpactStories() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Impact Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src={story.image}
                alt={story.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{story.name}</h3>
                <p className="text-indigo-600 mb-4">{story.location}</p>
                <p className="text-gray-600">{story.story}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}