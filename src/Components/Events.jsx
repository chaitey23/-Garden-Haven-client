import React from 'react';

const Events = () => {
    return (
        <section className="px-4 mt-20 mb-20">
      <h2 className="text-3xl font-bold text-center text-lime-600 mb-10">
        Upcoming Gardening Events 📅
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-base-100 p-6 rounded-lg shadow-lg border-l-4 border-lime-600 hover:shadow-2xl transition-shadow duration-300">
          <p className="text-sm text-base-content mb-2">July 30, 2025</p>
          <h3 className="text-xl font-semibold text-green-700 mb-2">Summer Flower Workshop</h3>
          <p className="text-base-content">Learn how to plant and maintain beautiful summer flowers in your garden.</p>
        </div>
        <div className="bg-base-100 p-6 rounded-lg shadow-lg border-l-4 border-lime-600 hover:shadow-2xl transition-shadow duration-300">
          <p className="text-sm text-base-content mb-2">August 12, 2025</p>
          <h3 className="text-xl font-semibold text-green-700 mb-2">Organic Gardening Basics</h3>
          <p className="text-base-content">Join us for an introductory class on organic gardening techniques.</p>
        </div>
        <div className="bg-base-100 p-6 rounded-lg shadow-lg border-l-4 border-lime-600 hover:shadow-2xl transition-shadow duration-300">
          <p className="text-sm text-base-content mb-2">September 5, 2025</p>
          <h3 className="text-xl font-semibold text-green-700 mb-2">Composting 101</h3>
          <p className="text-base-content">Discover how to start composting and reduce waste at home.</p>
        </div>
      </div>
    </section>
    );
};

export default Events;