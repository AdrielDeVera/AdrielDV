import React from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  placeholder?: string;
}

export function ResponsiveImage({ 
  src, 
  alt, 
  className = "", 
  sizes = "100vw",
  priority = false,
  placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+"
}: ResponsiveImageProps) {
  return (
    <img 
      src={src}
      alt={alt}
      className={`object-cover w-full h-full transition-transform duration-300 ${className}`}
      loading={priority ? "eager" : "lazy"}
      sizes={sizes}
      style={{
        backgroundImage: `url(${placeholder})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      onLoad={(e) => {
        // Remove placeholder background once image loads
        e.currentTarget.style.backgroundImage = 'none';
      }}
    />
  );
}

// Advanced responsive image with multiple sources
interface MultiSourceImageProps {
  mobileSrc: string;
  tabletSrc: string;
  desktopSrc: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function MultiSourceImage({ 
  mobileSrc, 
  tabletSrc, 
  desktopSrc, 
  alt, 
  className = "",
  priority = false 
}: MultiSourceImageProps) {
  return (
    <picture>
      <source media="(max-width: 768px)" srcSet={mobileSrc} />
      <source media="(max-width: 1024px)" srcSet={tabletSrc} />
      <source media="(min-width: 1025px)" srcSet={desktopSrc} />
      <img 
        src={desktopSrc}
        alt={alt}
        className={`object-cover w-full h-full transition-transform duration-300 ${className}`}
        loading={priority ? "eager" : "lazy"}
      />
    </picture>
  );
}
