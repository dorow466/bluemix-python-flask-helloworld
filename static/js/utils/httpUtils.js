//utilities
function createXHR(){
	if(typeof XMLHttpRequest != 'undefined'){
		return new XMLHttpRequest();
	}else{
		try{
			return new ActiveXObject('Msxml2.XMLHTTP');
		}catch(e){
			try{
				return new ActiveXObject('Microsoft.XMLHTTP');
			}catch(e){}
		}
	}
	return null;
}
function xhrGet(url, callback, errback){
	var xhr = new createXHR();
	xhr.open("GET", url, true);
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				callback(xhr.responseText);
			}else{
				errback('service not available');
			}
		}
	};
	xhr.timeout = 30000;
	xhr.ontimeout = errback;
	xhr.send();
}

function xhrPost(url, req, callback, errback){
	var xhr = new createXHR();
	xhr.open("POST", url, true);
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				callback(xhr.responseText);
			}else{
				errback('service not available');
			}
		}
	};
	xhr.timeout = 30000;
	xhr.ontimeout = errback;
	console.log(req);
	xhr.send(JSON.stringify(req));
	//xhr.send(req);
}

function uploadFiles(url, blob, type, callback, errback) {
	  var xhr = new createXHR();
	  //var xhr = new XMLHttpRequest();
	  xhr.open('POST', url, true);
	  xhr.onload = function(e){
			if(xhr.readyState == 4){
				if(xhr.status == 200){
					callback(xhr.responseText);
				}else{
					errback('service not available');
				}
			}
		};
	  xhr.setRequestHeader("Content-Type", type); 
	  xhr.send(blob);  // multipart/form-data
	}