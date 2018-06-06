'use strict';
const fs = require('fs');
const torrent = fs.readFileSync('leaves.torrent');
console.log(torrent.toString('utf8'));