$(document).ready(function() {

	var source   = $("#donations").html();
	var template = Handlebars.compile(source);


    $.get('/orders', function(result) {
    	result = JSON.parse(result);
        
    	for (var i=0; i<result.data.orders.length;i++){
    		result.data.orders[i].order.total_btc.cents /= 100000000;
    	}

    	var newhtml = template(result.data);
    	console.log(newhtml)
    	$("#orders").html(newhtml);
    	console.log(newhtml)
    });


});
