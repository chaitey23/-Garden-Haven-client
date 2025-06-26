import React from 'react';

const GardeningFunFacts = () => {
    return (
         <section className="px-4 mt-20 mb-20">
      <h2 className="text-3xl font-bold text-center text-lime-600 mb-10">
        Gardening Fun Facts 🌿
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-green-700 mb-3">Banana is a Herb!</h3>
          <p className="text-gray-700">Did you know? Banana plants are actually giant herbs, not trees.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-green-700 mb-3">Tomatoes once Poisonous</h3>
          <p className="text-gray-700">In the past, Europeans thought tomatoes were poisonous!</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-green-700 mb-3">Gardening Reduces Stress</h3>
          <p className="text-gray-700">Spending time in the garden can improve your mental health and reduce stress.</p>
        </div>
      </div>
    </section>
    );
};

export default GardeningFunFacts;