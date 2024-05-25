const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const channelName = getChannelName(channel);
console.log("1 || 2 = "+(1 || 2));