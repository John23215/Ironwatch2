// Theme toggle logic
const themeToggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;

const darkTheme = {
  '--bg-color': '#0d1117',
  '--text-color': '#c9d1d9',
  '--accent-blue': '#58a6ff',
  '--accent-purple': '#8a3ffc',
  '--glass-bg': 'rgba(13, 17, 23, 0.6)',
  '--glass-border': 'rgba(255, 255, 255, 0.1)',
  '--shadow-glow-blue': '#58a6ff88',
  '--shadow-glow-purple': '#8a3ffc88',
};

const lightTheme = {
  '--bg-color': '#f0f0f3',
  '--text-color': '#222222',
  '--accent-blue': '#3b82f6',
  '--accent-purple': '#8b5cf6',
  '--glass-bg': 'rgba(255, 255, 255, 0.6)',
  '--glass-border': 'rgba(0, 0, 0, 0.1)',
  '--shadow-glow-blue': '#3b82f688',
  '--shadow-glow-purple': '#8b5cf688',
};

function setTheme(theme) {
  for (const [key, value] of Object.entries(theme)) {
    root.style.setProperty(key, value);
  }
}

function toggleTheme() {
  const currentBg = getComputedStyle(root).getPropertyValue('--bg-color').trim();
  if (currentBg === darkTheme['--bg-color']) {
    setTheme(lightTheme);
    themeToggleBtn.textContent = '🌞';
  } else {
    setTheme(darkTheme);
    themeToggleBtn.textContent = '🌗';
  }
}

themeToggleBtn.addEventListener('click', toggleTheme);

// Initialize with dark theme
setTheme(darkTheme);
themeToggleBtn.textContent = '🌗';
