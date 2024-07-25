console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const intermediateAppPath = path.join(buildOutputPath, 'app');
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);