#!/usr/bin/node
const request = require('request');

const aa = async () => {
  const url = 'https://prod-public-api.livescore.com/v1/api/app/date/soccer/20240422/1?countryCode=NG&locale=en&MD=1';
  await request(url, function (error, response, body) {
    if (!error) {
      const c = JSON.parse(body);
      console.log(c);
    }
    if(error) {
      console.log(error);
    }
    console.log();
  });
};

aa();