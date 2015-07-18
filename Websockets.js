// WebSockets
// Stream-adventure tutorial : exercies #9

var ws = require('websocket-stream');

var stream = ws('ws://localhost:8099');

stream.end('hello\n');