import React from 'react';

interface DotGridBackgroundProps {
  /**
   * Approach to use for the dot grid
   * 'css' - Uses CSS radial-gradient (more efficient, better browser support)
   * 'svg' - Uses inline SVG data URI (more flexible, can be animated)
   */
  approach?: 'css' | 'svg';
  
  /**
   * Size of each dot in pixels
   * Default: 2px
   */
  dotSize?: number;
  
  /**
   * Spacing between dots in pixels
   * Default: 20px
   */
  spacing?: number;
  
  /**
   * Color of the dots
   * Default: '#e5e7eb' (light gray)
   */
  dotColor?: string;
  
  /**
   * Background color behind the dots
   * Default: 'transparent'
   */
  backgroundColor?: string;
  
  /**
   * Additional CSS classes to apply to the container
   */
  className?: string;
  
  /**
   * Children to render inside the dot grid background
   */
  children?: React.ReactNode;
}

/**
 * DotGridBackground Component
 * 
 * Provides two efficient approaches for creating seamless dot grid backgrounds:
 * 1. CSS approach using radial-gradient (recommended for most use cases)
 * 2. SVG approach using inline data URI (useful for animations or complex patterns)
 * 
 * Both approaches are efficient, don't require external images, and repeat seamlessly.
 */
export const DotGridBackground: React.FC<DotGridBackgroundProps> = ({
  approach = 'css',
  dotSize = 2,
  spacing = 20,
  dotColor = '#e5e7eb',
  backgroundColor = 'transparent',
  className = '',
  children
}) => {
  
  // CSS Approach - Using radial-gradient
  const cssDotGridStyle: React.CSSProperties = {
    backgroundImage: `radial-gradient(circle, ${dotColor} ${dotSize / 2}px, transparent ${dotSize / 2}px)`,
    backgroundSize: `${spacing}px ${spacing}px`,
    backgroundColor: backgroundColor,
  };

  // SVG Approach - Using inline data URI
  const svgDotGridStyle: React.CSSProperties = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='${spacing}' height='${spacing}' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='dot' patternUnits='userSpaceOnUse' width='${spacing}' height='${spacing}'%3E%3Ccircle cx='${spacing / 2}' cy='${spacing / 2}' r='${dotSize / 2}' fill='${encodeURIComponent(dotColor)}'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23dot)'/%3E%3C/svg%3E")`,
    backgroundColor: backgroundColor,
  };

  const selectedStyle = approach === 'css' ? cssDotGridStyle : svgDotGridStyle;

  return (
    <div 
      className={`w-full h-full ${className}`}
      style={selectedStyle}
    >
      {children}
    </div>
  );
};

/**
 * Preset configurations for common dot grid patterns
 */
export const DotGridPresets = {
  // Subtle background pattern
  subtle: {
    approach: 'css' as const,
    dotSize: 1,
    spacing: 24,
    dotColor: '#f3f4f6',
    backgroundColor: 'transparent'
  },
  
  // Medium contrast pattern
  medium: {
    approach: 'css' as const,
    dotSize: 2,
    spacing: 20,
    dotColor: '#e5e7eb',
    backgroundColor: 'transparent'
  },
  
  // Bold pattern for dark themes
  bold: {
    approach: 'css' as const,
    dotSize: 3,
    spacing: 16,
    dotColor: '#d1d5db',
    backgroundColor: 'transparent'
  },
  
  // Animated SVG pattern (use with CSS animations)
  animated: {
    approach: 'svg' as const,
    dotSize: 2,
    spacing: 18,
    dotColor: '#e5e7eb',
    backgroundColor: 'transparent'
  }
};

/**
 * Example usage component showing different configurations
 */
export const DotGridExamples: React.FC = () => {
  return (
    <div className="space-y-8 p-8">
      <h2 className="text-2xl font-bold mb-4">Dot Grid Background Examples</h2>
      
      {/* Example 1: Basic CSS approach */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Basic CSS Approach</h3>
        <DotGridBackground 
          approach="css"
          dotSize={2}
          spacing={20}
          dotColor="#e5e7eb"
          className="h-32 border border-gray-300 rounded-lg"
        >
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-600">CSS Radial Gradient Pattern</p>
          </div>
        </DotGridBackground>
      </div>

      {/* Example 2: SVG approach */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">SVG Data URI Approach</h3>
        <DotGridBackground 
          approach="svg"
          dotSize={3}
          spacing={16}
          dotColor="#d1d5db"
          className="h-32 border border-gray-300 rounded-lg"
        >
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-600">SVG Data URI Pattern</p>
          </div>
        </DotGridBackground>
      </div>

      {/* Example 3: Using presets */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Using Presets</h3>
        <div className="grid grid-cols-2 gap-4">
          <DotGridBackground 
            {...DotGridPresets.subtle}
            className="h-24 border border-gray-300 rounded-lg"
          >
            <div className="flex items-center justify-center h-full">
              <p className="text-sm text-gray-600">Subtle</p>
            </div>
          </DotGridBackground>
          
          <DotGridBackground 
            {...DotGridPresets.bold}
            className="h-24 border border-gray-300 rounded-lg"
          >
            <div className="flex items-center justify-center h-full">
              <p className="text-sm text-gray-600">Bold</p>
            </div>
          </DotGridBackground>
        </div>
      </div>

      {/* Example 4: Custom colors */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Custom Colors</h3>
        <div className="grid grid-cols-3 gap-4">
          <DotGridBackground 
            approach="css"
            dotSize={2}
            spacing={18}
            dotColor="#3b82f6"
            className="h-24 border border-gray-300 rounded-lg"
          >
            <div className="flex items-center justify-center h-full">
              <p className="text-sm text-white">Blue</p>
            </div>
          </DotGridBackground>
          
          <DotGridBackground 
            approach="css"
            dotSize={2}
            spacing={18}
            dotColor="#10b981"
            className="h-24 border border-gray-300 rounded-lg"
          >
            <div className="flex items-center justify-center h-full">
              <p className="text-sm text-white">Green</p>
            </div>
          </DotGridBackground>
          
          <DotGridBackground 
            approach="css"
            dotSize={2}
            spacing={18}
            dotColor="#f59e0b"
            className="h-24 border border-gray-300 rounded-lg"
          >
            <div className="flex items-center justify-center h-full">
              <p className="text-sm text-white">Orange</p>
            </div>
          </DotGridBackground>
        </div>
      </div>
    </div>
  );
};

export default DotGridBackground;
