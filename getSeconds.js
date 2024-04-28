console.log(false === '0');
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
console.log("1 || 2 = "+(1 || 2));
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const stringReverse = str => str.split("").reverse().join("");