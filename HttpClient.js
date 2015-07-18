// HttpClient
// Stream-adventure tutorial : exercies #8

var request = require('request');

var r = request.post('http://localhost:8099/');
process.stdin.pipe(r).pipe(process.stdout);

