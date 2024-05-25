console.log(+"1" +  "1" + "2");
const uniqueArr = (arr) => [...new Set(arr)];
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);