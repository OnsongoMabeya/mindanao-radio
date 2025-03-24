# Mindanao Radio React App

A modern redesign of the Mindanao Radio website into a React-based single-page application (SPA) with dark mode aesthetics, interactive features, and a live audio stream.

## Features

- 🎨 Dark Mode UI with modern design
- 📻 Live Audio Stream Integration
- 📱 Responsive Navigation
- 🎯 Dynamic Sections (Home, About, Services, Contact)
- ✨ Interactive Elements and Animations
- 📝 Contact Form with Formspree Integration

## Tech Stack

- React (JavaScript)
- React Router for navigation
- Tailwind CSS for styling
- React Icons for icons
- Formspree for form handling
- HTML5 Audio API for streaming

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Getting Started

1. Clone the repository:

   ```bash
   git clone git@github.com:OnsongoMabeya/mindanao-radio.git
   cd mindanao-radio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Formspree form ID:

   ```bash
   VITE_FORMSPREE_FORM_ID=your_form_id_here
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```bash
src/
├── components/
│   ├── Navbar.jsx       # Responsive navbar with logo + menu toggle
│   ├── AudioPlayer.jsx  # Play/pause controls + stream status
│   ├── Section.jsx      # Reusable section wrapper
│   └── SocialIcons.jsx  # Social media links with icons
├── pages/
│   ├── Home.jsx         # Hero section + banner
│   ├── About.jsx        # Mission/vision cards
│   ├── Services.jsx     # Services list
│   └── Contact.jsx      # Form + contact info
├── App.jsx              # Router setup
└── main.jsx             # React root
```

## Customization

1. Update the logo in `public/media/logo.png`
2. Modify the color scheme in `tailwind.config.js`
3. Update social media links in `src/components/SocialIcons.jsx`
4. Customize content in respective page components

## Deployment

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your preferred hosting service (Netlify, Vercel, etc.)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
