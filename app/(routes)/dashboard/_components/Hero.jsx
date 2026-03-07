import React from 'react';
// import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
            Turn Your Wireframes into Code Instantly
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Transform hand-drawn or digital wireframes into 
            production-ready HTML, Tailwind, or React code. 
            Accelerate your UI development. Just upload your 
            wireframe, and let our AI do the rest.
          </p>
          <div className="flex flex-wrap gap-4">
            {/* <Link
              to="/dashboard"
              className="inline-flex items-center px-6 py-3 border border-transparent 
                text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Try Live Demo
            </Link> */}
            <button
              className="inline-flex items-center px-6 py-3 border border-gray-300 
                text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white p-4">
            <div className="flex items-center space-x-1 mb-2">
              <div className="h-2.5 w-2.5 rounded-full bg-gray-300"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-gray-300"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-gray-300"></div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-1/3">
                <div className="aspect-square bg-gray-200 rounded flex items-center justify-center">
                  <ArrowRight className="text-gray-400" />
                </div>
                <div className="mt-2 bg-gray-200 h-2 rounded"></div>
                <div className="mt-1 bg-gray-200 h-2 rounded w-2/3"></div>
                <div className="mt-1 bg-gray-200 h-2 rounded w-1/2"></div>
              </div>
              <div className="w-2/3">
                <div className="bg-blue-500 p-4 rounded text-white mb-2">
                  <div className="h-2 bg-blue-400 rounded mb-1"></div>
                  <div className="h-2 bg-blue-400 rounded w-2/3"></div>
                </div>
                <div className="bg-gray-100 p-2 rounded">
                  <div className="h-2 bg-gray-200 rounded mb-1"></div>
                  <div className="h-2 bg-gray-200 rounded mb-1 w-3/4"></div>
                  <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                </div>
                <div className="mt-3 flex justify-end">
                  <div className="h-6 w-16 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;