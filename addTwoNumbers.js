const currentDate = () => new Date().toLocaleDateString('en-US');
const scriptRootPath = path.join(repositoryRootPath, 'script');
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const removeDuplicates = (arr) => [...new Set(arr)];
const merge = (a, b) => [...a, ...b];