// src/DowryCalculator.js
import React, { useState } from 'react';

const DowryCalculator = () => {
  const [boyName, setBoyName] = useState('');
  const [boyCtc, setBoyCtc] = useState('');
  const [boyAge, setBoyAge] = useState('');
  const [boyNetWorth, setBoyNetWorth] = useState('');
  const [girlName, setGirlName] = useState('');
  const [girlAge, setGirlAge] = useState('');
  const [girlCtc, setGirlCtc] = useState('');
  const [girlNetWorth, setGirlNetWorth] = useState('');
  const [result, setResult] = useState(null);

  const calculateDowry = () => {
    const boyCtcValue = parseFloat(boyCtc);
    const girlCtcValue = parseFloat(girlCtc);

    if (boyName.toLowerCase() === 'yash mishra' && girlName.toLowerCase() === 'shweta chaudhary') {
      setResult('Tujhe kya lagta hai Shweta 🥺 mai tere se Dowry lunga..... naa, kabhi naa');
      return;
    }

    if (girlCtcValue > boyCtcValue) {
      setResult('Beta Tu Rahende 😂');
      return;
    }

    const minDowry = boyCtcValue / 2 + 100000;
    const maxDowry = boyCtcValue / 2 + 500000;

    setResult(`Minimum Dowry: ₹${minDowry.toFixed(2)}\nMaximum Dowry: ₹${maxDowry.toFixed(2)}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-blue-400 p-6">
      <h1 className="text-3xl font-bold mb-8 animate-bounce font-sans text-blue-900">💸 Boys Calculate Your Dowry 😂 💸</h1>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-bold mb-4 text-center text-blue-900">Boy's Side</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Boy's Name</label>
                <input
                  type="text"
                  value={boyName}
                  onChange={(e) => setBoyName(e.target.value)}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 bg-blue-100 hover:bg-blue-200 transition duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Boy's CTC/Package</label>
                <input
                  type="number"
                  value={boyCtc}
                  onChange={(e) => setBoyCtc(e.target.value)}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 bg-blue-100 hover:bg-blue-200 transition duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Boy's Age</label>
                <input
                  type="number"
                  value={boyAge}
                  onChange={(e) => setBoyAge(e.target.value)}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 bg-blue-100 hover:bg-blue-200 transition duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Boy's Net Worth</label>
                <input
                  type="number"
                  value={boyNetWorth}
                  required
                  onChange={(e) => setBoyNetWorth(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 bg-blue-100 hover:bg-blue-200 transition duration-300"
                />
              </div>
            </form>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4 text-center text-blue-900">Girl's Side</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Girl's Name</label>
                <input
                  type="text"
                  value={girlName}
                  onChange={(e) => setGirlName(e.target.value)}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 bg-blue-100 hover:bg-blue-200 transition duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Girl's CTC/Package</label>
                <input
                  type="number"
                  value={girlCtc}
                  onChange={(e) => setGirlCtc(e.target.value)}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 bg-blue-100 hover:bg-blue-200 transition duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Girl's Age</label>
                <input
                  type="number"
                  value={girlAge}
                  onChange={(e) => setGirlAge(e.target.value)}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 bg-blue-100 hover:bg-blue-200 transition duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Girl's Net Worth</label>
                <input
                  type="number"
                  value={girlNetWorth}
                  onChange={(e) => setGirlNetWorth(e.target.value)}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 bg-blue-100 hover:bg-blue-200 transition duration-300"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="text-center mt-6">
          <button
            type="button"
            onClick={calculateDowry}
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Calculate Dowry
          </button>
        </div>
      </div>
      {result && (
        <div className="mt-6 text-center text-lg font-bold p-4 bg-white rounded-md shadow-md max-w-lg w-full">
          {result.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default DowryCalculator;
