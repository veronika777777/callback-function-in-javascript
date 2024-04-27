const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const channelName = getChannelName(channel);
const buildOutputPath = path.join(repositoryRootPath, 'out');
const intermediateAppPath = path.join(buildOutputPath, 'app');