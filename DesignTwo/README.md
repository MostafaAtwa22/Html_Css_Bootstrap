# 🎨 Bondi - Creative Agency Website

A modern, responsive website for a creative agency built with HTML5, CSS3, Bootstrap, and enhanced with smooth animations and interactive features.

![Bondi Website](https://img.shields.io/badge/Status-Complete-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🎭 **Animations & Effects**
- **WOW.js Integration**: Smooth scroll-triggered animations for all sections
- **Loading Screen**: Professional animated spinner with fade-out transition
- **Scroll Animations**: Multiple animation types (fadeIn, slideIn, zoomIn) with custom delays
- **Smooth Scrolling**: Enhanced user experience with CSS smooth scroll behavior

### 🧭 **Navigation & UX**
- **Sticky Navigation**: Bootstrap-powered responsive navigation bar
- **Scroll-to-Top Button**: Floating button with smooth scroll-to-top functionality
- **Mobile Responsive**: Fully responsive design across all devices
- **Interactive Elements**: Hover effects and transitions throughout

### 🎨 **Design Elements**
- **Modern Layout**: Clean, professional design with custom color scheme
- **Typography**: Google Fonts (Roboto) integration
- **Icons**: Font Awesome icons for enhanced visual appeal
- **Grid System**: Bootstrap grid for perfect responsiveness

## 🏗️ Project Structure

```
DesignTwo/
├── HTML/
│   └── index.html          # Main HTML file
├── CSS/
│   ├── style.css          # Custom styles
│   ├── bootstrap.min.css  # Bootstrap framework
│   ├── animate.min.css    # Animation library
│   └── all.min.css        # Font Awesome icons
├── JS/
│   ├── script.js          # Custom JavaScript
│   ├── wow.min.js         # WOW.js animation library
│   ├── bootstrap.bundle.min.js # Bootstrap JavaScript
│   └── all.min.js         # Font Awesome JavaScript
├── Images/
│   ├── logo.png           # Brand logo
│   ├── title.png          # Section title decoration
│   ├── work-*.jpg         # Portfolio images
│   ├── team-*.png         # Team member photos
│   ├── blog-*.jpg         # Blog post images
│   ├── tech-*.png         # Technology logos
│   └── laptop.png         # Feature showcase image
├── webfonts/              # Font Awesome web fonts
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs locally

### Installation
1. **Clone or download** the project files
2. **Navigate** to the project directory
3. **Open** `HTML/index.html` in your web browser

```bash
# If using a local server (optional)
# Navigate to project directory
cd DesignTwo
# Open with live server or similar
```

## 🎯 Sections Overview

### 🏠 **Landing Section**
- Hero area with call-to-action
- Engaging tagline and branding

### ⚡ **Features Section**
- Service offerings with animated icons
- Three main service categories
- Smooth fade-in animations

### 💼 **Portfolio Section**
- Filterable work gallery
- Project showcase with categories
- Fade-up animations on scroll

### 📖 **About Section**
- Company information and values
- Feature highlights with laptop mockup
- Side-sliding animations

### 👥 **Team Section**
- Team member profiles
- Professional photos and descriptions
- Right-slide entrance animations

### 🤝 **Clients Section**
- Technology partner logos
- Brand showcase grid
- Simple fade-in effect

### 🚀 **Call-to-Action Section**
- Project start invitation
- Prominent action button
- Zoom-in animation for emphasis

### 📝 **Blog Section**
- Latest articles preview
- Publication dates and titles
- Upward slide animations

### 📧 **Newsletter Section**
- Email subscription form
- Contact information
- Bottom slide-up animation

## 🛠️ Technologies Used

| Technology | Purpose | Version |
|------------|---------|---------|
| **HTML5** | Structure & Semantics | Latest |
| **CSS3** | Styling & Animations | Latest |
| **Bootstrap** | Responsive Framework | 5.x |
| **JavaScript** | Interactivity | ES6+ |
| **WOW.js** | Scroll Animations | Latest |
| **Animate.css** | CSS Animations | 4.x |
| **Font Awesome** | Icons | 6.x |
| **Google Fonts** | Typography (Roboto) | Latest |

## 🎨 Custom Features

### Loading Screen
```javascript
// Vanilla JavaScript implementation
// Fades out after page load with smooth transitions
window.addEventListener('load', function() {
    // Loading animation logic
});
```

### Scroll-to-Top Button
```javascript
// Shows after scrolling one viewport height
// Smooth scroll behavior to top
btn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
```

### WOW.js Animations
```html
<!-- Example animation classes -->
<div class="wow animate__animated animate__fadeInUp" 
     data-wow-duration="1.5s" 
     data-wow-delay="0.2s">
    Content here
</div>
```

## 🎭 Animation Types Used

- `fadeIn` - Simple fade entrance
- `fadeInUp` - Fade with upward movement
- `fadeInLeft` - Fade with left-to-right movement
- `fadeInRight` - Fade with right-to-left movement
- `slideInUp` - Slide from bottom
- `zoomIn` - Scale-up entrance

## 🎨 Color Scheme

```css
:root {
    --yellow-color: #ffc400;
    --green-color: #19ca3a;
    --red-color: #ff3150;
    --dark-color: #0f1419;
    --main-transition: 0.3s;
}
```

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: Bootstrap's responsive grid system
- **Flexible Images**: All images are responsive
- **Touch Friendly**: Interactive elements sized for touch

## 🔧 Customization

### Adding New Animations
1. Include desired animation class from Animate.css
2. Add `wow` class and animation class to element
3. Configure duration and delay with data attributes

### Modifying Colors
1. Update CSS custom properties in `:root`
2. Colors automatically cascade throughout the design

### Adding New Sections
1. Follow existing HTML structure
2. Add appropriate WOW.js classes for animations
3. Style with custom CSS following the established patterns

## 🌟 Performance Features

- **Minified Assets**: All CSS and JS files are minified
- **Optimized Images**: Compressed images for faster loading
- **Efficient Animations**: Hardware-accelerated CSS animations
- **Clean Code**: Well-structured, maintainable codebase

## 🙏 Acknowledgments

- **Bootstrap Team** for the responsive framework
- **Animate.css** for the animation library
- **WOW.js** for scroll-triggered animations
- **Font Awesome** for the icon library
- **Google Fonts** for typography

---

⭐ **Star this repository if you found it helpful!**

*Built with ❤️ and lots of ☕*
