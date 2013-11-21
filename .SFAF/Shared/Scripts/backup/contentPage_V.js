/*
	DO NOT CHANGE ANY OF THIS CODE
	THIS CODE IS OFF LIMITS
	DO NOT ADD ANY CODE TO THIS SCRIPT BLOCK, AS WE WANT TO KEEP IT CLEAN AND ORGANIZED
*/
document.resetButtonClick = function(b) {
	try {
		if (reset) {
			reset(b);
		}
	} catch (e) {
	}
}
document.getDirectory = function() {
	var l = document.location.toString();
	var n = l.indexOf("SFAF");
	l = l.substring(l.indexOf("SFAF"),l.lastIndexOf("/"));
	return l;
}
document.saveDrawing = function(n) {
	if (saveDrawing)
		return saveDrawing(n.toString());
}
document.getDrawing = function(n) {
	if (getLastDrawing)
		return getLastDrawing(n.toString());
}
document.resetCanvas = function() {
	if (resetCanvas)
		resetCanvas($id('canvas1'));
}
document.hideAndShow = function(objectId){
	var o = document.getElementById(objectId);
	if (o.style.visibility == 'visible')
		o.style.visibility = 'hidden'
	else
		o.style.visibility = 'visible'
}
document.hideAndShowDisplay = function(objectId){
	var o = document.getElementById(objectId);
	if (o.style.display == 'inline')
		o.style.display = 'none'
	else
		o.style.display = 'inline'
}
document.hideAndShowElementsByClassName = function(className){
	var o = document.getElementsByClassName(className);
	for (var i = 0; i < o.length; i++) 
	{
		if (o[i].style.display != 'none')
			o[i].style.display = 'none'
		else
			o[i].style.display = '';
	}
}
document.SelectStep = function(btnClassName,selectedButton,elementClassName,selectedElement){
	//RESET BACKGROUND OF ALL STEP BUTTONS
	var o = document.getElementsByClassName(btnClassName);
	for (var i = 0; i < o.length; i++) 
	{
		o[i].style.background = '#c5cbce'
		//o[i].style.display = 'none'
	}
	//SET SELECTED BUTTON BACKGROUND
	var oSelectedButton = document.getElementById(selectedButton);
	oSelectedButton.style.background = '#006290';	
	
	//HIDE ALL STEP IMAGES/ELEMENTS
	var x = document.getElementsByClassName(elementClassName);
	for (var i = 0; i < x.length; i++) 
	{
		x[i].style.display = 'none'
	}
	//MAKE SELECTED ELEMENT VISIBLE
	var oSelectedElement = document.getElementById(selectedElement);
	oSelectedElement.style.display = 'inline';
}
document.SelectStep2 = function(btnClassName,selectedButton,elementClassName,selectedElement){
	//RESET BACKGROUND OF ALL STEP BUTTONS
	var o = document.getElementsByClassName(btnClassName);
	for (var i = 0; i < o.length; i++) 
	{
		o[i].style.background = '#cbd4d9'
		//o[i].style.display = 'none'
	}
	//SET SELECTED BUTTON BACKGROUND
	var oSelectedButton = document.getElementById(selectedButton);
	oSelectedButton.style.background = '#00547b';	
	
	//HIDE ALL STEP IMAGES/ELEMENTS
	var x = document.getElementsByClassName(elementClassName);
	for (var i = 0; i < x.length; i++) 
	{
		x[i].style.display = 'none'
	}
	//MAKE SELECTED ELEMENT VISIBLE
	var oSelectedElement = document.getElementById(selectedElement);
	oSelectedElement.style.display = 'inline';
}
document.SelectPageMenuButton = function(selectedButton,selectedButtonSrc,elementClassName,selectedElement){
	//SHOW DISABLE STYLE FOR ALL PAGE MENU BUTTONS ON THE PAGE
	var o = document.getElementsByClassName('PageMenuButtons');
	for (var i = 0; i < o.length; i++) 
	{
	    var iLen = String(o[i].src).length;
    	var s = String(o[i].src).substring(iLen, iLen - 13);
		if (s != '_disabled.png')
		{	
			o[i].src = o[i].src.replace('.png','') + '_disabled.png';
		}
	}	
	
	//HIGHLIGHT SELECTED BUTTON
	var oSelectedButton = document.getElementById(selectedButton);
	oSelectedButton.src = oSelectedButton.src.replace('_disabled','');
	
	//HIDE ALL STEP IMAGES/ELEMENTS
	var x = document.getElementsByClassName(elementClassName);
	for (var i = 0; i < x.length; i++) 
	{
		x[i].style.display = 'none'
	}
	//MAKE SELECTED ELEMENT VISIBLE
	var oSelectedElement = document.getElementById(selectedElement);
	oSelectedElement.style.display = 'inline';	
	
	
	
}
document.SelectActionButton = function(selectedButton,selectedElement){
	//SHOW DISABLE STYLE FOR ALL PAGE MENU BUTTONS ON THE PAGE
	var o = document.getElementsByClassName('ActionButtons');
	for (var i = 0; i < o.length; i++) 
	{
	    var iLen = String(o[i].src).length;
    	var s = String(o[i].src).substring(iLen, iLen - 13);
		if (s != '_disabled.png')
		{	
			o[i].src = o[i].src.replace('.png','') + '_disabled.png';
		}
	}	
	
	//HIGHLIGHT SELECTED BUTTON
	var oSelectedButton = document.getElementById(selectedButton);
	oSelectedButton.src = oSelectedButton.src.replace('_disabled','');
	
	//HIDE ALL STEP IMAGES/ELEMENTS
	var x = document.getElementsByClassName('ActionElements');
	for (var i = 0; i < x.length; i++) 
	{
		x[i].style.display = 'none'
	}
	//MAKE SELECTED ELEMENT VISIBLE
	var oSelectedElement = document.getElementById(selectedElement);
	oSelectedElement.style.display = 'inline';	
}


document.GetRightString = function(str, n){
  if (n <= 0)
    return "";
  else if (n > String(str).length)
    return str;
  else {
    var iLen = String(str).length;
    return String(str).substring(iLen, iLen - n);
  }
}
document.goToSection = function(s){
	window.location.hash= '#' + s;
}


document.getSlideTitle = function() {
	var t = $id('slideTitle');
	var result = '';
	if (t != null && c != 'undefined') {
		result = t.value;
	}
	
	if (result == null) {
		result = t.innerHTML;
	}
	return result;
}
document.hasRandomReporter = function() {
	var c = $id('hasRandomReporter');
	
	if (c != null && c != 'undefined')
		return stringToBoolean(c.value);
	else
		return false;
}
document.hasTPS = function() {
	var c = $id('hasTPS');
	
	if (c != null && c != 'undefined')
		return stringToBoolean(c.value);
	else
		return false;
}
document.hasTP = function() {
	var c = $id('hasTP');
	
	if (c != null && c != 'undefined')
		return stringToBoolean(c.value);
	else
		return false;
}
document.hasSR = function() {
	var c = $id('hasSR');
	
	if (c != null && c != 'undefined')
		return stringToBoolean(c.value);
	else
		return false;
}
document.hasLR = function() {
	var c = $id('hasLR');
	
	if (c != null && c != 'undefined')
		return stringToBoolean(c.value);
	else
		return false;
}
document.hasRC = function() {
	var c = $id('hasRC');
	
	if (c != null && c != 'undefined')
		return stringToBoolean(c.value);
	else
		return false;
}
document.hasSC = function() {
	var c = $id('hasSC');
	
	if (c != null && c != 'undefined')
		return stringToBoolean(c.value);
	else
		return false;
}
document.hasVV = function() {
	var c = $id('hasVV');
	
	if (c != null && c != 'undefined')
		return stringToBoolean(c.value);
	else
		return false;
}
document.hasCele = function() {
	var c = $id('hasCele');
	
	if (c != null && c != 'undefined')
		return stringToBoolean(c.value);
	else
		return false;
}
document.hasTGRRS = function() {
	var c = $id('hasTGRRS');
	
	if (c != null && c != 'undefined')
		return stringToBoolean(c.value);
	else
		return false;
}
document.hasPeace = function() {
	var c = $id('hasPeace');
	
	if (c != null && c != 'undefined')
		return stringToBoolean(c.value);
	else
		return false;
}
document.hasFeelings = function() {
	var c = $id('hasFeelings');
	
	if (c != null && c != 'undefined')
		return stringToBoolean(c.value);
	else
		return false;
}
document.hasThinkThrough = function() {
	var c = $id('hasThinkThrough');
	
	if (c != null && c != 'undefined')
		return stringToBoolean(c.value);
	else
		return false;
}
document.hasCapReadMore = function() {
	var c = $id('hasCapReadMore');
	
	if (c != null && c != 'undefined')
		return stringToBoolean(c.value);
	else
		return false;
}
document.hasWordPower = function() {
	var c = $id('hasWordPower');
	
	if (c != null && c != 'undefined')
		return stringToBoolean(c.value);
	else
		return false;
}
document.getSRContent = function () {
	var s = $id('srContent');
	var r = '';
	
	if (s != null && s != 'undefined')
		r = s.innerHTML;
	
	return r;
}
document.getTPContent = function () {
	var s = $id('tpContent');
	var r = '';
	
	if (s != null && s != 'undefined')
		r = s.innerHTML;
	
	return r;
}
document.getPageSize = function () {
	var s = $id('pageSize');
	var r = '615';
	
	if (s != null && s != 'undefined')
		r = s.value;
	
	return r;
}
document.getTPInfo = function() {
	var s = $id('tpDiv');
	var r = '';
	
	if (s != null && s != 'undefined')
		r = s.innerHTML;
		
	return r;
}
document.getTPInfo2 = function() {
	var s = $id('tpDiv2');
	var r = '';
	
	if (s != null && s != 'undefined')
		r = s.innerHTML;
		
	return r;
}
document.getSRInfo = function() {
	
	var s = $id('srDiv');
	var r = '';
	
	if (s != null && s != 'undefined')
		r = s.innerHTML;
		
	return r;
}
document.slideOutFlag = function() {
	var s =$id('slideOutFlag');
	var r = 0;
	if (s != null && s != 'undefined') {
		r = parseInt(s.value);
	}
	
	return r;
}
document.pencilClicked = function(c,s,o) {
	setPencilLine(c,s,o);
}
document.eraserClicked = function() {
	setEraserLine();
}
document.getTOC = function() {
	var f = $id('toc');
	var innerDoc = f.contentDocument || f.contentWindow.document;
	return innerDoc.getTOC();
}
document.getTOCScript = function() {
	var f = $id('toc');
	var innerDoc = f.contentDocument || f.contentWindow.document;
	return innerDoc.getTOCScript();
}
document.setCanvasBackground = function(b) {
	var c = $id('canvas1');
	if (c != null) {
		c.style.backgroundRepeat="no-repeat";
		c.style.backgroundImage = "url(" + b + ")";
		if (b == '')
			c.style.zIndex = 3;
		else
			c.style.zIndex = 20;
	}
}
document.setCanvasWidth = function(w) {
	var dw = parseInt(w) - 7;
	$id("canvas1").width=dw;
}
document.setCanvasHeight = function(h) {
	$id('canvas1').height=parseInt(h);
}

document.processCommand = function(c) {
	if (typeof processCmd != 'undefined') {
		processCmd(c);
	}
}

document.getPageType = function() {
	var s =$id('pageType');
	var r = 0;
	if (s != null) {
		r = parseInt(s.value);
	}
	
	return r;
}

document.setTopBanner = function(c,i,g) {
	var s1 = $id('pathSuffix');
	if (s1 !=null) {
		i = s1.value + i;
		g = s1.value + g;
	}
	var s = $id('slideTitle');
	if (s!=null) {
		s.style.backgroundColor=c;
		s.style.backgroundImage='url("'+g+'")';
	}
	var b = $id('pageImage');
	if (b !=null) {
		b.src=i;
	}
}

document.drawALine = function(l) {
	drawTheLine(l);
}

function stringToBoolean(s) {
	if (s === 'true')
		return true;
	else
		return false;
}

function toggleElementInline(en) {
	toggleElement(en,'inline');
}

function toggleElementBlock(en) {
	toggleElement(en,'block');
}

function showElementInline(en) {
	var e = $id(en);
	
	if (e != null) {
		try {
			e.style.display = 'inline';
		}
		catch (ex) {
		}
	}
}

function showElementBlock(en) {
	var e = $id(en);
	
	if (e != null) {
		try {
			e.style.display = 'block';
		}
		catch (ex) {
		}
	}
}

function hideElement(en) {
	var e = $id(en);
	
	if (e != null) {
		try {
			e.style.display = 'none';
		}
		catch (ex) {
		}
	}
}

function toggleElement(en,t) {
	var e = $id(en);
	
	if (e != null) {
		try {
			if (e.style.display == 'none')
				e.style.display = t;
			else
				e.style.display = "none";
		}
		catch (ex) {
		}
	}
}

function setSpanInnerText(s, t) {
	var sp = s;
	
	if (typeof s == "string")
		sp = $id(s);
		
	if (document.all)
		sp.innerText = t;
	else
		sp.textContent = t;
}

function getSpanInnerText(s) {
	var sp = s;
	
	if (typeof s == "string")
		sp = $id(s);
	
	var result = "";
	if (document.all)
		result = sp.innerText;
	else
		result = sp.textContent;

	return result;
}
		
function $id(e) {
	return document.getElementById(e.toString());
}

// set the radio button with the given value as being checked
// do nothing if there are no radio buttons
// if the given value does not exist, all the radio buttons
// are reset to unchecked
function setCheckedValue(radioObj, newValue) {
	if(!radioObj)
		return;
	var radioLength = radioObj.length;
	if(radioLength == undefined) {
		radioObj.checked = (radioObj.value == newValue.toString());
		return;
	}
	for(var i = 0; i < radioLength; i++) {
		radioObj[i].checked = false;
		if(radioObj[i].value == newValue.toString()) {
			radioObj[i].checked = true;
		}
	}
}

// return the value of the radio button that is checked
// return an empty string if none are checked, or
// there are no radio buttons
function getCheckedValue(radioObj) {
	if(!radioObj) {
		return "";
	}
	var radioLength = radioObj.length;
	if(radioLength == undefined) {
		if(radioObj.checked) {
			return radioObj.value;
		}
		else {
			return "";
		}
	}
	for(var i = 0; i < radioLength; i++) {
		if(radioObj[i].checked) {
			return radioObj[i].value;
		}
	}
	return "";
}

function over(id, cursorVal)
{
	document.getElementById(id).style.cursor = cursorVal;
}

function out(id)
{
	document.getElementById(id).style.cursor = 'default';
}

/*
	DO NOT CHANGE ANY OF THE CODE ABOVE
	THIS CODE IS OFF LIMITS
	DO NOT ADD ANY CODE TO THIS SCRIPT BLOCK, AS WE WANT TO KEEP IT CLEAN AND ORGANIZED
*/