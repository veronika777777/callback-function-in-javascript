const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const merge = [...new Set([...a, ...b])];
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());