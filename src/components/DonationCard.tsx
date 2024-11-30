import React, { useState } from 'react';
import { DollarSign } from 'lucide-react';

const amounts = [10, 25, 50, 100, 250, 500];

export function DonationCard() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Make a Donation</h3>
      <div className="grid grid-cols-3 gap-3 mb-6">
        {amounts.map((amount) => (
          <button
            key={amount}
            onClick={() => {
              setSelectedAmount(amount);
              setCustomAmount('');
            }}
            className={`py-3 px-4 rounded-lg border ${
              selectedAmount === amount
                ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                : 'border-gray-200 hover:border-indigo-600'
            }`}
          >
            ${amount}
          </button>
        ))}
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Custom Amount
        </label>
        <div className="relative">
          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="number"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setSelectedAmount(null);
            }}
            className="pl-10 w-full py-3 border-gray-200 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter amount"
          />
        </div>
      </div>
      <button className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
        Complete Donation
      </button>
    </div>
  );
}