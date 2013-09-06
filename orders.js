'use strict';

var https = require('https');

// get orders from coinbase
function getOrders(req,res) {
	var body = '';

	var get = https.get("https://coinbase.com/api/v1/orders?api_key=" + 'process.env.COINBASE_API_KEY', function (result){
	    result.on('data', function(chunk) {body += chunk;});

	    result.on('end', function(chunk){
	    	if (chunk) {
	    	    body += chunk;
	    	}
	    	console.log(body);
	    	console.log('{"result": "success", "data" : ' + body + '}');
	        res.send('{"result": "success", "data" : ' + body + '}');
	    });
	});
	get.on('error', function(e) {
     console.log('{"result" : "error", "error": e.message}');
     res.send ('{"result" : "error", "error": e.message}');
    });


}

module.exports = getOrders