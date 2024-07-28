const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const currentDate = () => new Date().toLocaleDateString('en-US');