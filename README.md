# Pet Paradise - Pet Selling Website

A beautiful, responsive pet selling website built with React.js featuring a modern design and user-friendly interface.

## Features

- 🐾 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Beautiful gradient designs and smooth animations
- 🐕 **Pet Categories** - Filter pets by Dogs, Cats, Birds, Rabbits, or view all
- 💳 **Product Cards** - Detailed pet information with pricing and features
- 📱 **Mobile-First** - Optimized for mobile devices with touch-friendly interface
- ⚡ **Fast Loading** - Optimized performance with modern React practices

## Pet Categories

- **Dogs** - Golden Retrievers, German Shepherds, French Bulldogs, and more
- **Cats** - Persian, Maine Coon, Siamese, and other popular breeds
- **Birds** - Budgerigars, Cockatiels, Canaries, and other feathered friends
- **Rabbits** - Holland Lop, Netherland Dwarf, Flemish Giant, and more

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000` to view the website

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── Hero.js            # Hero section with call-to-action
│   ├── ProductCard.js     # Individual pet product card
│   ├── ProductGrid.js     # Grid layout for pet products
│   └── Footer.js          # Footer with links and contact info
├── data/
│   └── pets.js            # Dummy pet data and categories
├── App.js                 # Main application component
├── App.css                # Application styles
├── index.js               # React entry point
└── index.css              # Global styles
```

## Technologies Used

- **React.js** - Frontend framework
- **CSS3** - Styling with modern features like Grid and Flexbox
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Inter font family)
- **Unsplash** - High-quality pet images

## Features in Detail

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interface
- Optimized for all screen sizes

### Pet Information
- High-quality images
- Detailed descriptions
- Age and breed information
- Health guarantees and features
- Pricing information

### User Experience
- Smooth hover animations
- Category filtering
- Search functionality
- Contact seller options
- Wishlist feature

## Customization

### Adding New Pets
Edit `src/data/pets.js` to add new pets:

```javascript
{
  id: 13,
  name: "Your Pet Name",
  category: "dogs", // or cats, birds, rabbits
  price: 1000,
  age: "8 weeks",
  breed: "Breed Name",
  image: "image-url",
  description: "Pet description",
  features: ["Feature 1", "Feature 2", "Feature 3"]
}
```

### Styling
- Global styles: `src/index.css`
- Component styles: Individual CSS files in `src/components/`
- Color scheme can be customized by modifying CSS variables

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)


