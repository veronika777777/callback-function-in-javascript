const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const minNumber = arr => Math.min(...arr);
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;