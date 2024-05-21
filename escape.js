const isEmptyObject = obj => Object.keys(obj).length === 0;
const goToTop = () => window.scrollTo(0, 0);
const merge = (a, b) => [...a, ...b];