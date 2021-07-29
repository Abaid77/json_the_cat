const request = require('request');
const args = process.argv.slice(2);
const breed = args[0];

const URL = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;

request(URL, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  const data = JSON.parse(body);
  if (data.length !== 0) {
    console.log(data[0].description);
  } else {
    console.log("Cannot find breed: ",breed);
  }
});