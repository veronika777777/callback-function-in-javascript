const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;