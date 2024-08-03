const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};