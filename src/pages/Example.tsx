import React from 'react';
import { OvalGradientBackground } from '../components/OvalGradientBackground';

export function Example() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        OvalGradientBackground Examples
      </h1>
      
      {/* Example 1: Default orange-pink-yellow gradient with hover */}
      <div className="relative group flex items-center justify-center h-96 mb-16">
        <OvalGradientBackground 
          colors={['#ff7f50', '#ff6bd6', '#ffe08a']}
          opacity={0.9}
          className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Adriel De Vera
          </h2>
          <p className="text-lg text-gray-600">
            Software Engineer & Student (Hover to see gradient!)
          </p>
        </div>
      </div>

      {/* Example 2: Custom size and opacity with hover */}
      <div className="relative group flex items-center justify-center h-64 mb-16">
        <OvalGradientBackground 
          colors={['#ff6b6b', '#4ecdc4', '#45b7d1']}
          width="300px"
          height="300px"
          opacity={0.9}
          className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <div className="relative z-10 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            About Me
          </h2>
          <p className="text-gray-600">
            Learn more about my journey (Hover to see gradient!)
          </p>
        </div>
      </div>

      {/* Example 3: Multiple gradients with hover */}
      <div className="relative group flex items-center justify-center h-80 mb-16">
        <OvalGradientBackground 
          colors={['#ff9a9e', '#fecfef', '#fecfef']}
          width="200px"
          height="200px"
          opacity={0.9}
          className="top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2"
        />
        <OvalGradientBackground 
          colors={['#a8edea', '#fed6e3']}
          width="250px"
          height="250px"
          opacity={0.9}
          className="top-1/2 right-1/3 transform translate-x-1/2 -translate-y-1/2"
        />
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Multiple Gradients
          </h2>
          <p className="text-lg text-gray-600">
            Layered background effects (Hover to see gradients!)
          </p>
        </div>
      </div>
    </div>
  );
}
