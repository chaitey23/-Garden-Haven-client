import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import {

  FaLeaf,
  FaHeart,
  FaFire,
  FaWater,
  FaSun,
  FaRecycle,
  FaLightbulb
} from 'react-icons/fa';

const GardeningFunFacts = () => {
  const { theme } = useContext(ThemeContext);

  const funFacts = [
    {
      title: "Banana is a Herb!",
      description: "Banana plants are actually giant herbs, not trees. They're classified as herbaceous perennials.",
      icon: <FaLeaf className="text-3xl text-emerald-500" />,
      bgColor: theme === 'dark' ? 'bg-emerald-900/30 border-emerald-800' : 'bg-emerald-50 border-emerald-200',
      accentColor: 'text-emerald-600'
    },
    {
      title: "Tomatoes once Poisonous",
      description: "In the past, Europeans thought tomatoes were poisonous and called them 'poison apples'.",
      icon: <FaFire className="text-3xl text-red-500" />,
      bgColor: theme === 'dark' ? 'bg-red-900/30 border-red-800' : 'bg-red-50 border-red-200',
      accentColor: 'text-red-600'
    },
    {
      title: "Gardening Reduces Stress",
      description: "Spending time in the garden can improve mental health and reduce stress levels significantly.",
      icon: <FaHeart className="text-3xl text-pink-500" />,
      bgColor: theme === 'dark' ? 'bg-pink-900/30 border-pink-800' : 'bg-pink-50 border-pink-200',
      accentColor: 'text-pink-600'
    },
    {
      title: "Plants Can Communicate",
      description: "Plants release chemicals to warn nearby plants of dangers like insect attacks.",
      icon: <FaWater className="text-3xl text-blue-500" />,
      bgColor: theme === 'dark' ? 'bg-blue-900/30 border-blue-800' : 'bg-blue-50 border-blue-200',
      accentColor: 'text-blue-600'
    },
    {
      title: "Sunflower Follows the Sun",
      description: "Young sunflowers track the sun from east to west during the day, a process called heliotropism.",
      icon: <FaSun className="text-3xl text-yellow-500" />,
      bgColor: theme === 'dark' ? 'bg-yellow-900/30 border-yellow-800' : 'bg-yellow-50 border-yellow-200',
      accentColor: 'text-yellow-600'
    },
    {
      title: "Gardening Burns Calories",
      description: "30 minutes of gardening can burn up to 300 calories - it's a great workout!",
      icon: <FaRecycle className="text-3xl text-lime-500" />,
      bgColor: theme === 'dark' ? 'bg-lime-900/30 border-lime-800' : 'bg-lime-50 border-lime-200',
      accentColor: 'text-lime-600'
    }
  ];

  return (
    <div className={`py-16 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-b from-white to-lime-50/30'}`}>
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-lime-900/30' : 'bg-lime-100'}`}>
              <FaLightbulb className={`text-xl ${theme === 'dark' ? 'text-lime-400' : 'text-lime-600'}`} />
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Gardening <span className="text-lime-600">Fun Facts</span>
            </h2>
          </div>
          <p className={`max-w-2xl mx-auto text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
            Discover interesting and surprising facts about the wonderful world of gardening
          </p>
          <div className={`w-20 h-1 mx-auto ${theme === 'dark' ? 'bg-gradient-to-r from-lime-500 to-emerald-500' : 'bg-gradient-to-r from-lime-400 to-emerald-400'} rounded-full`}></div>
        </div>

        {/* Fun Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {funFacts.map((fact, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className={`relative rounded-xl overflow-hidden border transition-all duration-300 h-full flex flex-col p-6 ${fact.bgColor} ${theme === 'dark'
                ? 'hover:shadow-2xl hover:shadow-lime-900/20'
                : 'hover:shadow-xl hover:shadow-lime-100/50'} hover:-translate-y-2`}>

                {/* Icon */}
                <div className="mb-4">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${theme === 'dark'
                    ? 'bg-black/20'
                    : 'bg-white/80'} backdrop-blur-sm`}>
                    {fact.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} group-hover:${fact.accentColor} transition-colors`}>
                    {fact.title}
                  </h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {fact.description}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                  <div className={`absolute -top-6 -right-6 w-12 h-12 ${theme === 'dark' ? 'bg-lime-900/20' : 'bg-lime-100'} rotate-45`}></div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
                  <div className={`absolute top-0 left-0 right-0 h-0.5 ${fact.accentColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${fact.accentColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right delay-150`}></div>
                </div>
              </div>

              {/* Floating Effect */}
              <div className={`absolute -z-10 -bottom-2 left-3 right-3 h-4 rounded-xl blur-md ${theme === 'dark'
                ? 'bg-lime-900/20'
                : 'bg-lime-200/50'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Fun Fact Stats */}
        <div className={`mt-16 p-8 rounded-2xl border ${theme === 'dark'
          ? 'bg-gray-800 border-gray-700'
          : 'bg-white border-gray-200'} shadow-lg`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-lime-400' : 'text-lime-600'}`}>
                80%
              </div>
              <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Stress Reduction
              </div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-lime-400' : 'text-lime-600'}`}>
                300+
              </div>
              <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Calories Burned/Hour
              </div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-lime-400' : 'text-lime-600'}`}>
                400k+
              </div>
              <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Plant Species
              </div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-lime-400' : 'text-lime-600'}`}>
                94%
              </div>
              <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Gardeners are Happier
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GardeningFunFacts;