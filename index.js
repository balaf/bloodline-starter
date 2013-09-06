'use strict';

var express = require('express');
var getOrders = require(__dirname + '/orders');
var app = express();

app.use(express.static(__dirname +'/public'));
/// router
app.get('/orders', getOrders);






var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});




