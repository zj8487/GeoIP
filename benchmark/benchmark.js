#!/usr/bin/env node

var geoip = require('../index.js');

var data = geoip.open('/tmp/GeoLiteCity.dat');

var ip32 = function() {
  var ip = '';
  for (var i = 0; i < 4; ++i) {
    ip += Math.floor(Math.random() * 256);
    if (i <= 2) {
      ip += '.';
    }
  }
  return ip;
}

for (var i = 0; i < 10000; ++i) {
  geoip.City.record_by_addr(data, ip32());
}
