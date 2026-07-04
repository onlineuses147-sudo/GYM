@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-heading: "Oswald", ui-sans-serif, system-ui, sans-serif;
  
  --color-brand-primary: #DC2626; /* Deep Crimson Red */
  --color-brand-primary-glow: rgba(220, 38, 38, 0.4);
  
  --color-dark-900: #0a0a0a;
  --color-dark-800: #121212;
  --color-dark-700: #1a1a1a;
  --color-dark-600: #242424;
}

body {
  background-color: var(--color-dark-900);
  color: #ffffff;
  overflow-x: hidden;
}

html {
  scroll-behavior: smooth;
}

.text-glow {
  text-shadow: 0 0 10px var(--color-brand-primary-glow), 0 0 20px var(--color-brand-primary-glow);
}

.box-glow {
  box-shadow: 0 0 15px var(--color-brand-primary-glow);
}

.glass-panel {
  background: rgba(18, 18, 18, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

/* Hide scrollbar for gallery */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
