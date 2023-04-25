#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else if (response.statusCode === 200) {
    const tasks = JSON.parse(body);
    const completed = {};
    for (const task of tasks) {
      if (task.completed) {
        if (completed[task.userId]) {
          completed[task.userId]++;
        } else {
        completed[task.userId] = 1;
        }
    }
        }
        console.log(completed);
    } else {
        console.log('An error occurred. Status code: ' + response.statusCode);
    }
});
