'use strict';

var https = require('https');

getOrders();

// get orders from coinbase
function getOrders(req,res) {
	var get = https.get("https://coinbase.com/api/v1/orders?api_key=" + 'process.env.COINBASE_API_KEY', gotOrders);
	get.on('error', function(e) {
     console.log('{"result" : "error", "error": e.message}');
     // res.send ('{"result" : "error", "error": e.message}')

    });
}


function gotOrders(res){
	var body = '';
    res.on('data', function(chunk) {body += chunk;});
    res.on('end', function() {
		console.log('{"result": "success", { "data" : ' + body + '}');
	});
}