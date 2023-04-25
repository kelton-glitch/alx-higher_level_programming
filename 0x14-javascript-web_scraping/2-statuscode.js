#!/usr/bin/node
const request = require('request');
request.get(process.argv[2], function (response) {
    console.log(`code: ${response.statusCode}`);
});
