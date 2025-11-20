# Adriel Babalola - Portfolio Website

A modern, responsive portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Features smooth scroll animations, interactive components, and showcases professional work with an impressive UI/UX design.

## 🚀 Features

- **Smooth Scrolling** - Powered by [Lenis](https://github.com/studio-freight/lenis) for butter-smooth scroll behavior
- **Scroll Animations** - GSAP-based reveal animations with ScrollTrigger plugin
- **Responsive Design** - Mobile-first approach using Tailwind CSS
- **Interactive Navigation** - Dynamic navbar with active state indicators
- **Project Portfolio** - Grid layout showcasing portfolio projects with live links
- **Skills Showcase** - Organized tech stack visualization by category
- **Client Reviews** - Horizontal scrolling carousel of testimonials with ratings
- **Contact Integration** - Functional contact form with form backend
- **Social Links** - Quick access to GitHub, LinkedIn, Twitter X, and Instagram

## 📁 Project Structure

```
src/
├── components/
│   ├── About.jsx          # About section with stats
│   ├── Button.jsx         # Reusable button components
│   ├── Contact.jsx        # Contact form & social links
│   ├── Footer.jsx         # Footer with sitemap & socials
│   ├── Header.jsx         # Navigation header
│   ├── Hero.jsx           # Landing hero section
│   ├── Navbar.jsx         # Responsive navbar
│   ├── ProjectCard.jsx    # Project card component
│   ├── Review.jsx         # Reviews section
│   ├── ReviewCard.jsx     # Individual review card
│   ├── Skill.jsx          # Skills section
│   └── SkillCard.jsx      # Skill card component
├── App.jsx                # Main app with animations
├── App.css                # App styles
├── index.css              # Global styles
└── main.jsx               # React entry point
```

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **GSAP 3.13** - Animation library with ScrollTrigger
- **Lenis 1.3** - Smooth scroll library
- **PropTypes 15.8** - Type checking
- **ESLint 9** - Code linting

## 📦 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/adriel-babalola/adriel-s-portfolio-website.git
cd portfolio-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build & Preview

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 🎨 Key Sections

**Hero** - Professional introduction with CTA buttons and resume download

**About** - Bio with quick stats on experience and completed projects

**Skills** - Tech stack organized by category (Design, Frontend, Backend, Databases, Tools)

**Work** - Portfolio grid showcasing 6+ projects with descriptions and live links

**Reviews** - Client testimonials carousel with 5-star ratings

**Contact** - Contact form and social media links

**Footer** - Sitemap and copyright information

## 🔧 Customization

### Update Content
- **Projects** - Edit `src/components/Work.jsx`
- **Skills** - Edit `src/components/Skill.jsx`
- **Reviews** - Edit `src/components/Review.jsx`
- **Social Links** - Edit `src/components/Contact.jsx` and `Footer.jsx`

### Colors & Styling
- Primary accent color: `#D4AF6A` (Gold)
- Dark theme with zinc colors
- Customize in `src/index.css` and `tailwind.config.js`

### Fonts
Uses **Inter** font from Google Fonts. Change in `index.html` and `tailwind.config.js`

## 📄 License

Licensed under the Apache License 2.0. See [LICENSE](LICENSE) file for details.

## 🔗 Connect

- **Portfolio** - [View Live](https://adriel-portfolio.com)
- **GitHub** - [adriel-babalola](https://github.com/adriel-babalola)
- **LinkedIn** - [adriel-babalola](https://linkedin.com/in/adriel-babalola)
- **Twitter** - [@AdrielBaba57136](https://x.com/AdrielBaba57136)
- **Instagram** - [@adriel.127](https://instagram.com/adriel.127)

---

**Built with ❤️ by Adriel Babalola**
