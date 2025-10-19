# Car Inventory Web App

## Overview
Car Inventory is a responsive web application designed to help users explore and discover cars effortlessly. This is a front-end portfolio project showcasing modern web development skills with HTML5, CSS3, and vanilla JavaScript.

**Current State**: Fully functional static website running on Python HTTP server, ready for deployment.

## Recent Changes
- **October 19, 2025**: Initial project setup in Replit environment
  - Organized image assets into proper directory structure (`images/Assets/` and `images/Background/`)
  - Created Python HTTP server (`main.py`) to serve static files on port 5000
  - Configured workflow to run the web server automatically
  - Added cache-control headers to prevent caching issues in Replit's iframe preview
  - Created favicon for professional appearance
  - Set up deployment configuration for production

## Project Architecture

### File Structure
```
/
├── index.html          # Main HTML page with sidebar navigation
├── index.css           # Styles with flexbox layout and animations
├── main.py            # Python HTTP server (port 5000)
├── favicon.svg        # Website icon
├── images/
│   ├── Assets/        # UI icons (hamburger, home, search, etc.)
│   └── Background/    # Background images (lamborghini.png)
└── README.md          # Project description
```

### Features
- **Responsive Design**: Works on mobile and desktop devices
- **Interactive Sidebar**: Slide-out navigation menu with hamburger icon
- **Search Functionality**: Search bar for finding cars
- **Hero Section**: Engaging title section with background image
- **Modern UI/UX**: Clean design with smooth animations

### Technologies
- **HTML5**: Semantic markup structure
- **CSS3**: Flexbox layouts, transitions, and animations
- **JavaScript**: Vanilla JS for sidebar toggle interaction
- **Python**: Simple HTTP server for serving static files

## Development

### Running Locally
The server automatically starts on port 5000 when you run the Replit. The workflow is configured to:
- Serve static files from the root directory
- Disable caching for immediate update visibility
- Listen on 0.0.0.0:5000 for compatibility with Replit's proxy

### Server Configuration
- **Host**: 0.0.0.0 (allows Replit proxy access)
- **Port**: 5000 (Replit's standard web port)
- **Cache Control**: Disabled to ensure updates are visible in the iframe preview

## Future Plans
As noted in the original README:
- Add "Car of the Month" section
- Include detailed car information, images, and parts
- Implement backend for storing and fetching car inventory data
- Add user authentication and favorites
- Create car comparison features

## User Preferences
- Project type: Static frontend website
- No backend dependencies currently
- Simple, clean code structure preferred
