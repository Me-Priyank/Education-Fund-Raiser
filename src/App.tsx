import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { DonationCard } from './components/DonationCard';
import { ImpactStories } from './components/ImpactStories';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Stats />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Make a Difference Today</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your contribution helps provide education, supplies, and support to children
            who need it most. Every donation brings us closer to a world where quality
            education is accessible to all.
          </p>
        </div>
        <div className="flex justify-center">
          <DonationCard />
        </div>
      </div>
      <ImpactStories />
    </div>
  );
}

export default App;