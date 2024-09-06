import React, { useState } from "react";
import Spinner from "./Spinner";

const DowryCalculator = () => {
  const [boyName, setBoyName] = useState("");
  const [boyCtc, setBoyCtc] = useState("");
  const [boyCtcUnit, setBoyCtcUnit] = useState("lakh");
  const [boyAge, setBoyAge] = useState("");
  const [boyNetWorth, setBoyNetWorth] = useState("");
  const [boyNetWorthUnit, setBoyNetWorthUnit] = useState("lakh");
  const [girlName, setGirlName] = useState("");
  const [girlAge, setGirlAge] = useState("");
  const [girlCtc, setGirlCtc] = useState("");
  const [girlCtcUnit, setGirlCtcUnit] = useState("lakh");
  const [girlNetWorth, setGirlNetWorth] = useState("");
  const [girlNetWorthUnit, setGirlNetWorthUnit] = useState("lakh");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const unitMultiplier = {
    thousand: 1000,
    lakh: 100000,
    crore: 10000000,
  };

  const convertToNumber = (value, unit) => {
    return parseFloat(value) * unitMultiplier[unit];
  };

  const formatResult = (value) => {
  if (value >= 10000000) {
    return `₹${(value / 10000000).toFixed(2)} Crore`;
  } else if (value >= 100000) {
    return `₹${(value / 100000).toFixed(2)} Lakh`;
  } else if (value >= 1000) {
    return `₹${(value / 1000).toFixed(2)} Thousand`;
  }
  return `₹${value.toFixed(2)}`;
};

  const calculateDowry = () => {
  setLoading(true);
  setTimeout(() => {
    const boyCtcValue = convertToNumber(boyCtc, boyCtcUnit);
    const girlCtcValue = convertToNumber(girlCtc, girlCtcUnit);

    if (
      boyName.toLowerCase() === "yash mishra" &&
      girlName.toLowerCase() === "shweta choudhary"
    ) {
      setResult(
        "Tujhe kya lagta hai Shweta 🥺 mai tere se Dowry lunga..... naa, kabhi naa"
      );
      setLoading(false);
      return;
    }

    if (girlCtcValue > boyCtcValue) {
      setResult("Beta Tu Rahende 😂");
      setLoading(false);
      return;
    }

    const minDowry = boyCtcValue / 2 + 100000;
    const maxDowry = boyCtcValue / 2 + 500000;

    setResult(
      `Minimum Dowry: ${formatResult(minDowry)}\nMaximum Dowry: ${formatResult(maxDowry)}`
    );
    setLoading(false);
  }, 2000);
};

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-blue-400 p-6">
      <h1 className="text-3xl font-bold mb-8 animate-bounce font-sans text-blue-900 text-center">
        💸  दहेज / Dowry Calculator😂 💸
      </h1>
      {!loading && !result && (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-bold mb-4 text-center text-blue-900">
                Boy's Side
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Boy's Name & Surname
                  </label>
                  <input
                    type="text"
                    value={boyName}
                    onChange={(e) => setBoyName(e.target.value)}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 bg-blue-100 hover:bg-blue-200 transition duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Boy's CTC/Package
                  </label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      value={boyCtc}
                      onChange={(e) => setBoyCtc(e.target.value)}
                      required
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-400 bg-blue-100 hover:bg-blue-200 transition duration-300"
                    />
                    <select
                      value={boyCtcUnit}
                      onChange={(e) => setBoyCtcUnit(e.target.value)}
                      className="mt-1 block p-2 border border-gray-300 rounded-r-md focus:outline-none focus:border-blue-400 bg-blue-100 hover:bg-blue-200 transition duration-300"
                    >
                      <option value="thousand">Thousand</option>
                      <option value="lakh">Lakh</option>
                      <option value="crore">Crore</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Boy's Age
                  </label>
                  <input
                    type="number"
                    value={boyAge}
                    onChange={(e) => setBoyAge(e.target.value)}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 bg-blue-100 hover:bg-blue-200 transition duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Boy's Net Worth
                  </label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      value={boyNetWorth}
                      onChange={(e) => setBoyNetWorth(e.target.value)}
                      required
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-400 bg-blue-100 hover:bg-blue-200 transition duration-300"
                    />
                    <select
                      value={boyNetWorthUnit}
                      onChange={(e) => setBoyNetWorthUnit(e.target.value)}
                      className="mt-1 block p-2 border border-gray-300 rounded-r-md focus:outline-none focus:border-blue-400 bg-blue-100 hover:bg-blue-200 transition duration-300"
                    >
                      <option value="thousand">Thousand</option>
                      <option value="lakh">Lakh</option>
                      <option value="crore">Crore</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4 text-center text-blue-900">
                Girl's Side
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Girl's Name & Surname
                  </label>
                  <input
                    type="text"
                    value={girlName}
                    onChange={(e) => setGirlName(e.target.value)}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 bg-blue-100 hover:bg-blue-200 transition duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Girl's CTC/Package
                  </label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      value={girlCtc}
                      onChange={(e) => setGirlCtc(e.target.value)}
                      required
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-400 bg-blue-100 hover:bg-blue-200 transition duration-300"
                    />
                    <select
                      value={girlCtcUnit}
                      onChange={(e) => setGirlCtcUnit(e.target.value)}
                      className="mt-1 block p-2 border border-gray-300 rounded-r-md focus:outline-none focus:border-blue-400 bg-blue-100 hover:bg-blue-200 transition duration-300"
                    >
                      <option value="thousand">Thousand</option>
                      <option value="lakh">Lakh</option>
                      <option value="crore">Crore</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Girl's Age
                  </label>
                  <input
                    type="number"
                    value={girlAge}
                    onChange={(e) => setGirlAge(e.target.value)}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 bg-blue-100 hover:bg-blue-200 transition duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Girl's Net Worth
                  </label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      value={girlNetWorth}
                      onChange={(e) => setGirlNetWorth(e.target.value)}
                      required
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-400 bg-blue-100 hover:bg-blue-200 transition duration-300"
                    />
                    <select
                      value={girlNetWorthUnit}
                      onChange={(e) => setGirlNetWorthUnit(e.target.value)}
                      className="mt-1 block p-2 border border-gray-300 rounded-r-md focus:outline-none focus:border-blue-400 bg-blue-100 hover:bg-blue-200 transition duration-300"
                    >
                      <option value="thousand">Thousand</option>
                      <option value="lakh">Lakh</option>
                      <option value="crore">Crore</option>
                    </select>
                  </div>
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
      )}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <Spinner />
        </div>
      )}
      {!loading && result && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-blue-400 p-6">
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-900">
            😁 Here is your answer 😂
          </h2>
          <div className="text-center text-lg font-bold p-4 bg-white rounded-md shadow-md max-w-lg w-full">
            {result.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DowryCalculator;
