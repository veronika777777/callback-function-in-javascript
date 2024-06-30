const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const fullName = name || 'buddy';
const isWeekday = (date) => date.getDay() % 6 !== 0;