// MeetPipe.js
// Stream-Adventure : exercie #2

var fs = require('fs');

var file = process.argv[2];

// fs.createReadStram will take the file specified by process.argv[2] and turn it into a stream.
// Then we pipe it to stdout.

fs.createReadStream(file).pipe(process.stdout);