// get API authentication values
const { appId, key } = require('./keys.json').flightstats;

module.exports = `https://api.flightstats.com/flex/connections/rest/v2/json/firstflightin/SAN/to/YVR/arriving_before/2017/11/5/21/0?appId=${appId}&appKey=${key}&numHours=6&payloadType=passenger&maxResults=25`;
