const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const isWeekday = (date) => date.getDay() % 6 !== 0;