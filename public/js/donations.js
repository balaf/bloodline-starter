$(document).ready(function() {

	var source   = $("#donations").html();
	var template = Handlebars.compile(source);


    $.get('/orders', function(result) {
    	result = JSON.parse(result);
    	var newhtml    = template(result['data']['orders']);
    	$("#donations").html(newhtml);
    	console.log(newhtml)
    });


});
