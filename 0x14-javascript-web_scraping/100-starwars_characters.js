#!/usr/bin/node

const request = require('request');
const id = process.argv[2];
const url = 'https://swapi-api.alx-tools.com/api/films/';
request.get(url + id, function (error, response, body) {
  if (error) {
    console.log(error);
  } else if (response.statusCode === 200) {
    const characters = JSON.parse(body).characters;
    for (const character of characters) {
      request.get(character, function (error, response, body) {
        if (error) {
          console.log(error);
        } else if (response.statusCode === 200) {
          console.log(JSON.parse(body).name);
        }
      });
    }
  } else {
    console.log('An error occurred. Status code: ' + response.statusCode);
  }
});