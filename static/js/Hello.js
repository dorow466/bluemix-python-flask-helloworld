var helloMsg = "Hello World from Java Script";

(function() {

	console.log("ready");
	document.addEventListener("DOMContentLoaded", function(event) { 
		console.log("DOMContentLoaded");
		callHelloPython();
		}); 
})();

function callHelloPython() {
	console.log("callHelloPython");
	
	xhrGet("/HelloPython", function(responseText){
	  	console.log("HelloPython responseText", responseText);
		var helloElement = document.getElementById("HelloPython");
		helloElement.innerHTML = responseText;
	}, function(err){
		console.log(err);
	});

}
