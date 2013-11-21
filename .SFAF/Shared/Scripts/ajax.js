function makeCrossAJAXRequest(url) {
	var request = url;
	var head = document.getElementsByTagName("head").item(0);
	var script = document.createElement("script");
	script.setAttribute("type", "text/javascript");
	script.setAttribute("src", request + "&g=" + guid());
	script.setAttribute("id","ajaxScript");
	head.appendChild(script);
}

function cleanupAJAXScript() {
	var head = document.getElementsByTagName("head").item(0);
	var script = document.getElementById("ajaxScript");
	head.removeChild(script);
}

function makeCrossAJAXRequest2(url) {
	var request = url;
	var head = document.getElementsByTagName("head").item(0);
	var script = document.createElement("script");
	script.setAttribute("type", "text/javascript");
	script.setAttribute("src", request + "&g=" + guid());
	script.setAttribute("id","ajaxScript2");
	head.appendChild(script);
}

function cleanupAJAXScript2() {
	var head = document.getElementsByTagName("head").item(0);
	var script = document.getElementById("ajaxScript2");
	head.removeChild(script);
}

function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

function guid() {
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

function urlencode(str) {
	var result = str.replace(/\//g,"%2F");
	result = result.replace(/\+/g,"%2B");
	result = result.replace(/%20/g,"+");
	result = result.replace(/\*/g,"%2A");
	result = result.replace(/@/g,"%40");
    return result;
}