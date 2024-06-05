const merge = [...new Set(a.concat(b))];
const shuffledArray = array.sort(() => Math.random() - 0.5); 
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;