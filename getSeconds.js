const currentDate = () => new Date().toLocaleDateString('en-US');
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const shuffledArray = array.sort(() => Math.random() - 0.5); 