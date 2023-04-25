#!/usr/bin/node
const request = require('request');
request(process.argv[2], function (err, response, body) {
  if (err) {
    console.log(err);
  } else if (response.statusCode === 200) {
    console.log(JSON.parse(body).results.reduce((count, film) => {
      return count + film.characters.filter(character => character.includes('18')).length;
    }, 0));
  } else {
    console.log('Error code: ' + response.statusCode);
  }
});