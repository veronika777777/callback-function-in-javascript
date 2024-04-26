const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
console.log("1 && 2 = "+(1 && 2));
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
console.log(1 +  +"2" + "2");
const isTabInView = () => !document.hidden;
const channelName = getChannelName(channel);