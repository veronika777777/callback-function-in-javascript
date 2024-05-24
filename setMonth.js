const appName = getAppName(channel);
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const intermediateAppPath = path.join(buildOutputPath, 'app');