import React from 'react';

interface OvalGradientBackgroundProps {
  colors: string[];
  width?: string;
  height?: string;
  opacity?: number;
  className?: string;
}

export function OvalGradientBackground({
  colors,
  width = '400px',
  height = '400px',
  opacity = 0.7,
  className = '',
}: OvalGradientBackgroundProps) {
  // Create the radial gradient CSS string
  const gradientColors = colors.join(', ');
  const gradientStyle = {
    background: `radial-gradient(ellipse at center, ${gradientColors}, transparent 70%)`,
    width,
    height,
    '--hover-opacity': opacity.toString(),
  } as React.CSSProperties;

  return (
    <div
      className={`absolute rounded-full blur-xl transition-all duration-300 opacity-0 group-hover:opacity-[var(--hover-opacity)] ${className}`}
      style={gradientStyle}
    />
  );
}
