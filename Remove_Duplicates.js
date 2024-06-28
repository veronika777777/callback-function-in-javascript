const goToTop = () => window.scrollTo(0, 0);
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};