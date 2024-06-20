const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const arrayContains = (arr, element) => arr.includes(element);
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;