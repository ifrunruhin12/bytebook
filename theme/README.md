# ByteBook Custom Theme

Modern, stylish theme for the ByteBook mdBook with gradient colors, smooth animations, and enhanced UX.

## Features

### Visual Enhancements
- 🎨 Modern gradient color scheme (indigo + pink)
- 🌙 Dark theme optimized for reading
- ✨ Smooth animations and transitions
- 📊 Gradient headers with text effects
- 🎯 Enhanced code blocks with syntax highlighting
- 📱 Fully responsive design

### Interactive Features
- 📋 Copy button on code blocks (hover to reveal)
- 📈 Reading progress bar at top
- ⬆️ Back-to-top button (appears on scroll)
- 🔍 Enhanced search with focus effects
- ⌨️ Keyboard shortcuts (Ctrl/Cmd + K for search)
- 🔗 External links open in new tab with indicator

### UX Improvements
- Smooth scrolling
- Hover effects on navigation
- Active chapter highlighting
- Custom scrollbar styling
- Fade-in animations for content
- Enhanced list items with emojis

## Files

- `css/custom.css` - All custom styles
- `js/custom.js` - Interactive features and enhancements

## Color Palette

- Primary: `#6366f1` (Indigo)
- Accent: `#ec4899` (Pink)
- Background: `#0f172a` → `#1e293b` (Gradient)
- Content: `#1e1e2e`
- Text: `#f1f5f9`

## Build

The theme is automatically applied when you build the book:

```bash
mdbook build
mdbook serve  # for local preview
```

## Customization

Edit `theme/css/custom.css` to modify colors, spacing, or add new styles.
Edit `theme/js/custom.js` to add or modify interactive features.
