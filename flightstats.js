const rp = require('request-promise-native');
const queryString = require('query-string');

// get API authentication values
const { appId, key } = require('./keys.json').flightstats;

// request schedule for flight from san diego to paris
const connApiUri = 'https://api.flightstats.com/flex/connections/rest/v2/json';

// connections api parameters. refer to documentation (https://developer.flightstats.com/api-docs/connections/v2)
// required parameters to search for connecting flights
const requiredParams = [
  'firstflightin',
  'SAN', // airport code
  'to', // direction ('from' or 'to')
  'YVR', // airport code
  'arriving_before', // looks for flights arriving before the indicated date and time.
  '2017', // year
  '11', // month
  '5', // day
  '21', // hour
  '0', // minute
];

// optional parameters
const optParams = {
  appId,
  appKey: key,
  payloadType: 'passenger',
  numHours: 6,
  maxResults: 25,
};

const queryUri = `${connApiUri}/${requiredParams.join('/')}?${queryString.stringify(optParams)}`;

const exampleUri = require('./exampleUri.js');

const queryPath = queryUri.split('?')[0];
const examplePath = exampleUri.split('?')[0];

if (queryPath !== examplePath) {
  // find first character that does not match compairing queryUri to exampleUri
  for (let i = 0; i < queryUri.length; i += 1) {
    if (queryUri[i] !== exampleUri[i]) {
      // stop at the '?'
      if (queryUri[i] === '?') break;
      // display URIs up to non matching character and break
      console.log('Query URI is invalid:');
      console.log('queryUri:', queryUri.substr(0, i + 1));
      console.log('exampleUri:', exampleUri.substr(0, i + 1));
      break;
    }
  }
} else {
  rp.get(queryUri)
    .then((res, body) => {
      console.log(res);
    })
    .catch(console.log);
}
