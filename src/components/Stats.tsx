import React from 'react';
import { Users, School, Globe2 } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '10,000+',
    label: 'Children Supported',
  },
  {
    icon: School,
    value: '500+',
    label: 'Schools Partnered',
  },
  {
    icon: Globe2,
    value: '50+',
    label: 'Countries Reached',
  },
];

export function Stats() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="h-10 w-10 text-indigo-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}