const uniqueArray = arr => [...new Set(arr)];
const resultingPromises = urls.map((url) => makHttpRequest(url));
const isWeekday = (date) => date.getDay() % 6 !== 0;