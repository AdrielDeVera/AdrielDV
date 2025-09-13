# Dot Grid Background Component

A flexible React component for creating seamless dot grid backgrounds with two efficient approaches.

## Features

- ✅ **Efficient**: No external images required
- ✅ **Seamless**: Patterns repeat perfectly across viewport
- ✅ **Customizable**: Easy to adjust dot size, color, and spacing
- ✅ **Two Approaches**: CSS radial-gradient and SVG data-URI
- ✅ **TypeScript**: Full type safety and IntelliSense support
- ✅ **Presets**: Common configurations ready to use

## Quick Start

```tsx
import DotGridBackground from './components/DotGridBackground';

// Basic usage
<DotGridBackground>
  <div>Your content here</div>
</DotGridBackground>

// Custom configuration
<DotGridBackground 
  approach="css"
  dotSize={2}
  spacing={20}
  dotColor="#e5e7eb"
  className="min-h-screen"
>
  <div>Your content here</div>
</DotGridBackground>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `approach` | `'css' \| 'svg'` | `'css'` | Method to generate the dot pattern |
| `dotSize` | `number` | `2` | Size of each dot in pixels |
| `spacing` | `number` | `20` | Spacing between dots in pixels |
| `dotColor` | `string` | `'#e5e7eb'` | Color of the dots (any valid CSS color) |
| `backgroundColor` | `string` | `'transparent'` | Background color behind dots |
| `className` | `string` | `''` | Additional CSS classes |
| `children` | `React.ReactNode` | - | Content to render inside the background |

## Approaches

### 1. CSS Approach (Recommended)

Uses CSS `radial-gradient` for maximum efficiency and browser support.

```tsx
<DotGridBackground 
  approach="css"
  dotSize={2}
  spacing={20}
  dotColor="#e5e7eb"
>
  <div>Content with CSS dot grid</div>
</DotGridBackground>
```

**Pros:**
- Most efficient performance
- Better browser support
- Smaller CSS footprint
- Can be easily animated with CSS

**Cons:**
- Limited to simple circular dots
- Less flexible for complex patterns

### 2. SVG Approach

Uses inline SVG data-URI for maximum flexibility.

```tsx
<DotGridBackground 
  approach="svg"
  dotSize={3}
  spacing={16}
  dotColor="#d1d5db"
>
  <div>Content with SVG dot grid</div>
</DotGridBackground>
```

**Pros:**
- More flexible for complex patterns
- Can be easily modified for animations
- Supports any SVG shape (not just circles)

**Cons:**
- Slightly larger CSS footprint
- More complex data URI encoding

## Presets

Use predefined configurations for common patterns:

```tsx
import { DotGridPresets } from './components/DotGridBackground';

// Subtle background
<DotGridBackground {...DotGridPresets.subtle}>
  <div>Subtle dot pattern</div>
</DotGridBackground>

// Medium contrast
<DotGridBackground {...DotGridPresets.medium}>
  <div>Medium contrast pattern</div>
</DotGridBackground>

// Bold pattern
<DotGridBackground {...DotGridPresets.bold}>
  <div>Bold dot pattern</div>
</DotGridBackground>

// Animated SVG pattern
<DotGridBackground {...DotGridPresets.animated}>
  <div>Animated pattern</div>
</DotGridBackground>
```

## Common Use Cases

### 1. Page Background

```tsx
function HomePage() {
  return (
    <DotGridBackground 
      approach="css"
      dotSize={1}
      spacing={24}
      dotColor="#f3f4f6"
      className="min-h-screen bg-white"
    >
      <div className="p-8">
        <h1>Welcome to my site</h1>
        <p>Content goes here...</p>
      </div>
    </DotGridBackground>
  );
}
```

### 2. Card Background

```tsx
function Card() {
  return (
    <DotGridBackground 
      approach="css"
      dotSize={2}
      spacing={18}
      dotColor="#e5e7eb"
      className="rounded-lg p-6 bg-white"
    >
      <h3>Card Title</h3>
      <p>Card content with subtle dot pattern</p>
    </DotGridBackground>
  );
}
```

### 3. Dark Theme

```tsx
function DarkCard() {
  return (
    <DotGridBackground 
      approach="css"
      dotSize={2}
      spacing={20}
      dotColor="#374151"
      backgroundColor="#1f2937"
      className="rounded-lg p-6"
    >
      <h3 className="text-white">Dark Card</h3>
      <p className="text-gray-300">Content on dark background</p>
    </DotGridBackground>
  );
}
```

### 4. Animated Background

```tsx
function AnimatedBackground() {
  return (
    <DotGridBackground 
      approach="svg"
      dotSize={2}
      spacing={16}
      dotColor="#3b82f6"
      className="min-h-screen animate-pulse"
    >
      <div>Animated dot grid background</div>
    </DotGridBackground>
  );
}
```

## Customization Tips

### Adjusting Spacing

- **Tight spacing** (12-16px): Creates a dense, textured look
- **Medium spacing** (18-24px): Balanced, professional appearance
- **Loose spacing** (28-32px): Subtle, minimal effect

### Dot Size Guidelines

- **Small dots** (1-2px): Subtle texture, good for backgrounds
- **Medium dots** (2-3px): Visible pattern, good for cards
- **Large dots** (3-4px): Bold pattern, use sparingly

### Color Combinations

```tsx
// Light theme
dotColor="#f3f4f6" // Very subtle
dotColor="#e5e7eb" // Subtle
dotColor="#d1d5db" // Medium

// Dark theme
dotColor="#374151" // Subtle on dark
dotColor="#4b5563" // Medium on dark
dotColor="#6b7280" // Bold on dark

// Accent colors
dotColor="#3b82f6" // Blue
dotColor="#10b981" // Green
dotColor="#f59e0b" // Orange
```

## Performance Notes

- **CSS approach** is more efficient for static patterns
- **SVG approach** is better for animated or complex patterns
- Both approaches are lightweight and don't require external resources
- Patterns are generated at runtime, so they're always crisp at any resolution

## Browser Support

- **CSS approach**: All modern browsers (IE10+)
- **SVG approach**: All modern browsers (IE9+)
- Both approaches work with CSS Grid, Flexbox, and traditional layouts
