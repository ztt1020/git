define(["jquery"],function($){
	var fun = function(){
		$("body").css("background", 'green');
		$("body").html([1,2,3,4,5,6])
		console.log([1,2,3,4,5,6])
	}
	return fun();
})
