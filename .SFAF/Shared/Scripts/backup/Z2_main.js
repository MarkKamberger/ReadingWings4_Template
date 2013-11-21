var frame1 = null;
var frame2 = null;
var frameToggle = 2;
var prevPage = "";
var nextPage = "Page2.html";
var currentPage = 1;
var outCount = 1.0;
var inCount = 0.0;
var changeTimer = 0;
var menuPos = 1;
var proceedWithSave = false;
var hasRandomReporter = false;
var hasTPS = false;
var hasTP = false;
var hasSR = false;
var hasLR = false;
var hasRC = false;
var hasVV = false;
var hasSC = false;
var hasCele = false;
var hasTGRRS = false;
var hasPeace = false;
var hasFeelings = false;
var hasThinkThrough = false;
var hasCapReadMore = false;
var hasWordPower = false;
var pageSize = "800";
var highRR = 5;
var currentNumber = highRR;
var randomNumbers = [];
var maxPages = 9;
var lessonPath = "";
var useGradient = false;
var currentFrameDir = "";
var pageLoaded = false;
var tigrrsBackground = '';
var onBlankPage = false;
var pageType = 0;
var hasInternetConn = false;
var sid='';
var lPos = 0;
var lookForComm = false;
var blankPageWindow = null;
var globalLineColor = "";
var globalLineSize = "4";
var globalLineAlpha = 1.0

						
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

var currentNumber = highRR;
var randomNumbers = [];
var previousNumbers = [];
var currentPreviousNumber = 0;

function initRandomNumberGenerator(limit) {
	highRR = parseInt(limit);
	currentNumber = highRR;
	randomNumbers = [];
	previousNumbers.push(0);
	previousNumbers.push(0);
}

function initRandomArray() {
	randomNumbers = [];
	
	for (var i = 0; i < highRR; i++) {
		randomNumbers.push(-1);
	}
	
	for (var i = 0; i < highRR; i++) {			
		var x = Math.floor((Math.random()*highRR)+1);
		
		while (randomNumbers[x - 1] > 0) {
			x = Math.floor((Math.random()*highRR)+1);
		}
		
		randomNumbers[x - 1] = i + 1;
	}
	
	currentNumber = 0;
}

function getNextNumber() {
	//if (currentNumber >= highRR) {
	//	initRandomArray();
	//}
	
	//var result = randomNumbers[currentNumber];
	
	//currentNumber++;
	
	var result = findRandomNumber();
	
	return result;
}

function findRandomNumber() {
	var x = Math.floor((Math.random()*highRR)+1);
	var found = true;
	
	while (found) {
		found = false;
		for (var i = 0; i < 2; i++) {
			if (previousNumbers[i] > 0) {
				if (previousNumbers[i] == x) {
					found = true;
					break;
				}
			}
		}
		
		if (!found) {
			break;
		}
		else
			x = Math.floor((Math.random()*highRR)+1);
	}
	previousNumbers[currentPreviousNumber] = x;
	if (currentPreviousNumber == 0)
		currentPreviousNumber = 1;
	else
		currentPreviousNumber = 0;
		
	return x;
}

function setTitle(t) {
	document.title = t.toString();
}

function $id(e) {
	return document.getElementById(e.toString());
}

function toggleElementInline(en) {
	return toggleElement(en,'inline');
}

function toggleElementBlock(en) {
	return toggleElement(en,'block');
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
	var result = -1;
	if (e != null) {
		try {
			if (e.style.display == 'none') {
				e.style.display = t;
				result = 1;
			}
			else {
				e.style.display = "none";
				result = 0;
			}
		}
		catch (ex) {
			alert(ex);
		}
	}
	
	return result;
}

function hideAndShowMenuSeparater(className){
	var o = document.getElementsByClassName(className);
	for (var i = 0; i < o.length; i++) 
	{
		if (o[i].style.display != 'none')
			o[i].style.display = 'none'
		else
			o[i].style.display = 'inline-block';
	}
}
function hideAndShow(objectId){
	var o = document.getElementById(objectId);
	if (o.style.visibility == 'visible')
		o.style.visibility = 'hidden'
	else
		o.style.visibility = 'visible'
}
function hideAndShowDisplay(objectId){
	var o = document.getElementById(objectId);
	if (o.style.display == 'inline')
		o.style.display = 'none'
	else
		o.style.display = 'inline'
}
function hideAndShowRandomReporter(objectId){
	var o = document.getElementById(objectId);
	if (o.style.display == 'inline')
		o.style.display = 'none'
	else
		o.style.display = 'inline'
}
function StartRandomReporter(){
	alert('Coming Soon!');
}

var QueryString = function () {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = pair[1];
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]], pair[1] ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(pair[1]);
    }
  } 
    return query_string;
} ();

function processCommand(c) {
	var f = null;
	
	if (frameToggle == 1) {
		f = $id('contentFrame1');
	}
	else {
		f = $id('contentFrame2');
	}
	
	if (f != null) {
		var innerDoc = f.contentDocument || f.contentWindow.document;
		innerDoc.processCommand(c);
	}
}

function drawTheLine(l) {
	var f = null;
	
	if (frameToggle == 1) {
		f = $id('contentFrame1');
	}
	else {
		f = $id('contentFrame2');
	}
	
	if (f != null) {
		var innerDoc = f.contentDocument || f.contentWindow.document;
		innerDoc.drawALine(l);
	}
}

function scrollWindowTop() {
	scrollWindow(0,0);
}

function scrollWindowBottom() {
	scrollWindow(0,10000);
}

function scrollWindow(x,y){
	window.scrollTo(x,y);
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

function hasLocalStorage() {
	try {
		return 'localStorage' in window && window['localStorage'] !== null;
	} catch (e) {
		return false;
	}
}

function deleteLocalStorage(n) {
	if (hasLocalStorage()) {
		var c = window.confirm('Do you wish to delete \'' + n + '\'?');
		
		if (c)
			localStorage.removeItem(n);
			
		return c;
	}
}

function overwriteLocalStorage(n) {
	var result = false;
	if (hasLocalStorage()) {
		result = window.confirm("Do you wish to overwrite '" + n + "' with this new drawing?");
	}
	return result;
}

var ajaxUrl = "http://localhost:2887/SALIWebService/SFAFJSONRequest.aspx?";
//var ajaxUrl = "http://www-dev1/mobile/SFAFJSONRequest.aspx?";
//var ajaxUrl = "https://api.successforall.org/SFAFJSONRequest.aspx?";

function testConnection() {
	makeCrossAJAXRequest(ajaxUrl + "f=helloworld&callback=testConnBack");
}

function testConnBack(json) {
	cleanupAJAXScript();
	if (connExists) {
		connExists(json);
	}
}

function setOuterBackground(c) {
	$id('contentFrame').style.backgroundColor=c;
	$id('iframeDiv').style.backgroundColor=c;
}

function initParent() {
	if (prevPage === "") {
		//$id("btnPrevious").style.opacity = '0.2';
		//$id("btnPreviousL").style.opacity = '0.2';
		$id("btnPrevious").src = '../Shared/Images/Math/MenuBar/Nav_2_back_OFF.png';
	}
	else {
		//$id("btnPrevious").style.opacity = '1.0';
		//$id("btnPreviousL").style.opacity = '1.0';
		$id("btnPrevious").src = '../Shared/Images/Math/MenuBar/Nav_2_back.png';
	}
		
	if (nextPage === "") {
		//$id("btnNext").style.opacity = '0.2';
		//$id("btnNextL").style.opacity = '0.2';
		$id("btnNext").src = '../Shared/Images/Math/MenuBar/Nav_3_forward_OFF.png';
	}
	else {
		//$id("btnNext").style.opacity = '1.0';
		//$id("btnNextL").style.opacity = '1.0';
		$id("btnNext").src = '../Shared/Images/Math/MenuBar/Nav_3_forward.png';
	}
}

function setCurrentFrame() {
	scrollWindowTop();
	if (frame1 == null)
		frame1 = $id('contentFrame1');
	
	if (frame2 == null)
		frame2 = $id('contentFrame2');
	
	if (frameToggle == 2) {
		frameToggle = 1;
		frame1.style.zIndex = 2;
		frame1.style.display='inline';
		frame2.style.zIndex = 1;
		initFrame(frame1);
		frame2.style.display = 'none';
	}
	else {
		frameToggle = 2;
		frame2.style.zIndex = 2;
		frame2.style.display='inline';
		frame1.style.zIndex = 1;
		initFrame(frame2);
		frame1.style.display = 'none';
	}	

	if (!pageLoaded) {
		var f = $id('contentFrame1');
		var innerDoc = f.contentDocument || f.contentWindow.document;
		var head = document.getElementsByTagName("head").item(0);
		var script = document.createElement("script");
		script.setAttribute("type", "text/javascript");
		script.innerHTML = innerDoc.getTOCScript();
		script.setAttribute("id","tocScript");
		head.appendChild(script);
		pageLoaded = true;
	}
}

function initFrame(f) {
	var innerDoc = f.contentDocument || f.contentWindow.document;
//	hasRandomReporter = innerDoc.hasRandomReporter();
//	hasTPS = innerDoc.hasTPS();
//	hasTP = innerDoc.hasTP();
//	hasSR = innerDoc.hasSR();
//	hasLR = innerDoc.hasLR();
//	hasRC = innerDoc.hasRC();
//	hasSC = innerDoc.hasSC();
//	hasVV = innerDoc.hasVV();
//	hasCele = innerDoc.hasCele();
//	hasTGRRS = innerDoc.hasTGRRS();
//	hasPeace = innerDoc.hasPeace();
//	hasFeelings = innerDoc.hasFeelings();
//	hasThinkThrough = innerDoc.hasThinkThrough();
//	hasCapReadMore = innerDoc.hasCapReadMore();
//	hasWordPower = innerDoc.hasWordPower();
	pageSize = innerDoc.getPageSize();
	currentFrameDir = innerDoc.getDirectory();
	pageType = innerDoc.getPageType();

	f.style.minHeight=pageSize+"px";
	
//	if (!hasRandomReporter) {
//		$id('rrButton').src="../Shared/Images/REMS/RR_OFF.png";
//		if ($id('rrButtonLeft') != null)
//			$id('rrButtonLeft').src="../Shared/Images/REMS/RR_OFF.png";
//	}
//	else {
//		$id('rrButton').src="../Shared/Images/REMS/RR.png";
//		if ($id('rrButtonLeft') != null)
//			$id('rrButtonLeft').src="../Shared/Images/REMS/RR.png";
//	}
//	
//	if (!hasTPS) {
//		$id('tpsButton').src="../Shared/Images/REMS/TPS_OFF.png";
//		if ($id('tpsButtonLeft') != null)
//			$id('tpsButtonLeft').src="../Shared/Images/REMS/TPS_OFF.png";
//	}
//	else {
//		$id('tpsButton').src="../Shared/Images/REMS/TPS.png";
//		if ($id('tpsButtonLeft') != null)
//			$id('tpsButtonLeft').src="../Shared/Images/REMS/TPS.png";
//	}
//	
//	if (!hasSR) {
//		$id('srButton').src="../Shared/Images/REMS/SR_OFF.png";
//		if ($id('srButtonLeft') != null)
//			$id('srButtonLeft').src="../Shared/Images/REMS/SR_OFF.png";
//	}
//	else {
//		$id('srButton').src="../Shared/Images/REMS/SR.png";
//		if ($id('srButtonLeft') != null)
//			$id('srButtonLeft').src="../Shared/Images/REMS/SR.png";
//	}
//	
//	if (!hasTP) {
//		$id('tpButton').src="../Shared/Images/REMS/TP_OFF.png";
//		if ($id('tpButtonLeft') != null)
//			$id('tpButtonLeft').src="../Shared/Images/REMS/TP_OFF.png";
//	}
//	else {
//		$id('tpButton').src="../Shared/Images/REMS/TP.png";
//		if ($id('tpButtonLeft') != null)
//			$id('tpButtonLeft').src="../Shared/Images/REMS/TP.png";
//	}
//	
//	//clear the buttons that are not static
//	while($id('bottomTR').cells.length>5) {
//		$id('bottomTR').deleteCell(0);
//	}
//	
//	while($id('bottomTRLeft').cells.length>4) {
//		$id('bottomTRLeft').deleteCell(4);
//	}
//	
//	//now add the non-static buttons back in one-by-one in the reverse order they are shown
//	if (hasTGRRS){
//		addTGRRS('bottomTR',0);
//	}
//	
//	if (hasSC){
//		addSC('bottomTR',0);
//	}
//	
//	if (hasRC){
//		addRC('bottomTR',0);
//	}
//	
//	if (hasCapReadMore){
//		addReadMore('bottomTR',0);
//	}
//	
//	if (hasLR){
//		addLR('bottomTR',0);
//	}
//	
//	if (hasVV){
//		addVV('bottomTR',0);
//	}
//	
//	if (hasCele){
//		addCele('bottomTR',0);
//	}
//	
//	if (hasFeelings){
//		addFeelings('bottomTR',0);
//	}
//	
//	if (hasPeace){
//		addPeace('bottomTR',0);
//	}
//	
//	if (hasThinkThrough){
//		addThink('bottomTR',0);
//	}
//	
//	// and do the same thing for the left side menu
//	if (hasTGRRS){
//		addTGRRS('bottomTRLeft',-1);
//	}
//	
//	if (hasSC){
//		addSC('bottomTRLeft',-1);
//	}
//	
//	if (hasRC){
//		addRC('bottomTRLeft',-1);
//	}
//	
//	if (hasCapReadMore){
//		addReadMore('bottomTRLeft',-1);
//	}
//	
//	if (hasLR){
//		addLR('bottomTRLeft',-1);
//	}
//	
//	if (hasVV){
//		addVV('bottomTRLeft',-1);
//	}
//	
//	if (hasCele){
//		addCele('bottomTRLeft',-1);
//	}
//	
//	if (hasFeelings){
//		addFeelings('bottomTRLeft',-1);
//	}
//	
//	if (hasPeace){
//		addPeace('bottomTRLeft',-1);
//	}
//	
//	if (hasThinkThrough){
//		addThink('bottomTRLeft',-1);
//	}

	//set the top banner color
//	switch (pageType) {
//		case 1:
//			//
//			innerDoc.setTopBanner('#08b7a7','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Plane.png','../../../../../../Shared/Images/REMS/ColorBars/CB_Teal.png');
//			break;
//		case 2:
//			//f27b21
//			innerDoc.setTopBanner('#fff','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Plane.png','../../../../../../Shared/Images/REMS/ColorBars/CB_Orange.png');
//			break;
//		case 3:
//			innerDoc.setTopBanner('#487fb3','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Dog.png','../../../../../../Shared/Images/REMS/ColorBars/CB_Blue.png');
//			break;
//		case 4:
//			innerDoc.setTopBanner('#b83680','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Birds.png','../../../../../../Shared/Images/REMS/ColorBars/CB_Magenta.png');
//			break;
//		case 5:
//			innerDoc.setTopBanner('#09a1d0','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Birds.png','../../../../../../Shared/Images/REMS/ColorBars/CB_LightBlue.png');
//			break;
//		case 6:
//			innerDoc.setTopBanner('#99ca3c','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Plane.png','../../../../../../Shared/Images/REMS/ColorBars/CB_LightGreen.png');
//			break;
//		case 7:
//			innerDoc.setTopBanner('#cc3f2d','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Dog.png','../../../../../../Shared/Images/REMS/ColorBars/CB_Red.png');
//			break;
//		case 8:
//			innerDoc.setTopBanner('#4a469c','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Plane.png','../../../../../../Shared/Images/REMS/ColorBars/CB_Purple.png');
//			break;
//		case 9:
//			innerDoc.setTopBanner('#18ac4e','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Dog.png','../../../../../../Shared/Images/REMS/ColorBars/CB_Green.png');
//			break;
//		case 10:
//			//f36f3a
//			innerDoc.setTopBanner('#fff','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Birds.png','../../../../../../Shared/Images/REMS/ColorBars/CB_Orange.png');
//			break;
//		case 11:
//			innerDoc.setTopBanner('#842c7e','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Face.png','../../../../../../Shared/Images/REMS/ColorBars/CB_Magenta.png');
//			break;
//		case 12:
//			innerDoc.setTopBanner('#08b7a7','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Key.png','../../../../../../Shared/Images/REMS/ColorBars/CB_Teal.png');
//			break;
//		case 13:
//			//487fb3
//			innerDoc.setTopBanner('#fff','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Plane.png','../../../../../../Shared/Images/REMS/ColorBars/CB_Orange.png');
//			break;
//		case 14:
//			innerDoc.setTopBanner('#487fb3','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Plane.png','../../../../../../Shared/Images/REMS/ColorBars/CB_Blue.png');
//			break;
//		case 15:
//			innerDoc.setTopBanner('#b83680','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Sun.png','../../../../../../Shared/Images/REMS/ColorBars/CB_Magenta.png');
//			break;
//		case 16:
//			innerDoc.setTopBanner('#09a1d0','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Lightbulb.png','../../../../../../Shared/Images/REMS/ColorBars/CB_Blue.png');
//			break;
//		case 17:
//			innerDoc.setTopBanner('#99ca3c','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Brain.png','../../../../../../Shared/Images/REMS/ColorBars/CB_Green.png');
//			break;
//		case 18:
//			innerDoc.setTopBanner('#cc3f2d','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Plane.png','../../../../../../Shared/Images/REMS/ColorBars/CB_Red.png');
//			break;
//		case 19:
//			innerDoc.setTopBanner('#4a469c','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Plane.png','../../../../../../Shared/Images/REMS/ColorBars/CB_Purple.png');
//			break;
//		case 20:
//			innerDoc.setTopBanner('#18ac4e','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Dog.png','../../../../../../Shared/Images/REMS/ColorBars/CB_Green.png');
//			break;
//		case 21:
//			//f36f3a
//			innerDoc.setTopBanner('#fff','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Dog.png','../../../../../../Shared/Images/REMS/ColorBars/CB_Orange.png');
//			break;
//		case 22:
//			innerDoc.setTopBanner('#842c7e','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Dog.png','../../../../../../Shared/Images/REMS/ColorBars/CB_ReddishPurple.png');
//			break;
//		case 23:
//			innerDoc.setTopBanner('#08b7a7','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Birds.png','../../../../../../Shared/Images/REMS/ColorBars/CB_Teal.png');
//			break;
//		case 24:
//			//f27b21
//			innerDoc.setTopBanner('#fff','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Birds.png','../../../../../../Shared/Images/REMS/ColorBars/CB_Orange.png');
//			break;
//		case 25:
//			innerDoc.setTopBanner('#487fb3','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Birds.png','../../../../../../Shared/Images/REMS/ColorBars/CB_Blue.png');
//			break;
//		case 26:
//			innerDoc.setTopBanner('#b83680','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Plane.png','../../../../../../Shared/Images/REMS/ColorBars/CB_Magenta.png');
//			break;
//		case 27:
//			innerDoc.setTopBanner('#09a1d0','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Plane.png','../../../../../../Shared/Images/REMS/ColorBars/CB_LightBlue.png');
//			break;
//		case 28:
//			innerDoc.setTopBanner('#f27b21','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Plane.png','../../../../../../Shared/Images/REMS/ColorBars/CB_Orange_GRAYBACK.png');
//			break;
//		case 29:
//			innerDoc.setTopBanner('#99ca3c','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Plane.png','../../../../../../Shared/Images/REMS/ColorBars/CB_LightGreen_TEALBACK.png');
//			break;
//		case 30:
//			innerDoc.setTopBanner('#99ca3c','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Plane.png','../../../../../../Shared/Images/REMS/ColorBars/CB_LightGreen.png');
//			break;
//		case 31:
//			innerDoc.setTopBanner('#99ca3c','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Dog.png','../../../../../../Shared/Images/REMS/ColorBars/CB_LightGreen.png');
//			break;
//		case 32:
//			innerDoc.setTopBanner('#b83680','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Dog.png','../../../../../../Shared/Images/REMS/ColorBars/CB_Magenta.png');
//			break;
//		case 33:
//			innerDoc.setTopBanner('#99ca3c','../../../../../../Shared/Images/REMS/ColorBars/CB_art_Dog.png','../../../../../../Shared/Images/REMS/ColorBars/CB_Green.png');
//			break;
//		case 34:
//			innerDoc.setTopBanner('#99ca3c','../../../../../../Shared/Images/REMS/ColorBars/present.png','../../../../../../Shared/Images/REMS/ColorBars/CB_LightGreen.png');
//			break;
//		case 35:
//			//f27b21
//			innerDoc.setTopBanner('#fff','../../../../../../Shared/Images/REMS/ColorBars/present.png','../../../../../../Shared/Images/REMS/ColorBars/CB_Orange.png');
//			break;
//		case 36:
//			innerDoc.setTopBanner('#b83680','../../../../../../Shared/Images/REMS/ColorBars/present.png','../../../../../../Shared/Images/REMS/ColorBars/CB_Magenta.png');
//			break;
//		case 37:
//			innerDoc.setTopBanner('#99ca3c','../../../../../../Shared/Images/REMS/ColorBars/present.png','../../../../../../Shared/Images/REMS/ColorBars/CB_Green.png');
//			break;
//		case 38:
//			innerDoc.setTopBanner('#09a1d0','../../../../../../Shared/Images/REMS/ColorBars/present.png','../../../../../../Shared/Images/REMS/ColorBars/CB_LightBlue.png');
//			break;
//		case 101:
//			//
//			innerDoc.setTopBanner('#08b7a7','../../../../../Shared/Images/REMS/ColorBars/CB_art_Plane.png','../../../../../Shared/Images/REMS/ColorBars/CB_Teal.png');
//			break;
//		case 102:
//			//f27b21
//			innerDoc.setTopBanner('#fff','../../../../../Shared/Images/REMS/ColorBars/CB_art_Plane.png','../../../../../Shared/Images/REMS/ColorBars/CB_Orange.png');
//			break;
//		case 103:
//			innerDoc.setTopBanner('#487fb3','../../../../../Shared/Images/REMS/ColorBars/CB_art_Dog.png','../../../../../Shared/Images/REMS/ColorBars/CB_Blue.png');
//			break;
//		case 104:
//			innerDoc.setTopBanner('#b83680','../../../../../Shared/Images/REMS/ColorBars/CB_art_Birds.png','../../../../../Shared/Images/REMS/ColorBars/CB_Magenta.png');
//			break;
//		case 105:
//			innerDoc.setTopBanner('#09a1d0','../../../../../Shared/Images/REMS/ColorBars/CB_art_Birds.png','../../../../../Shared/Images/REMS/ColorBars/CB_LightBlue.png');
//			break;
//		case 128:
//			innerDoc.setTopBanner('#f27b21','../../../../../Shared/Images/REMS/ColorBars/CB_art_Plane.png','../../../../../Shared/Images/REMS/ColorBars/CB_Orange_GRAYBACK.png');
//			break;
//		default:
//			break;
//	}
	
	// reset the outer div to white
	setOuterBackground('#fff');
	// run the page script to set the outer background
	innerDoc.processCommand(-999);
	
	//set to toc
	$id('innerTOCRight').innerHTML = innerDoc.getTOC();
	$id('innerTOCLeft').innerHTML = innerDoc.getTOC();
	
	// set iframe height
	innerDoc.setCanvasWidth($id('iframeDiv').style.width.replace(/px/g," "));
	innerDoc.setCanvasHeight(pageSize);
	
	// reset the pencil for drawing
	pencil(globalLineColor,globalLineSize,globalLineAlpha);
	
	// push the TP for the helper page
	pushTP();
}

function pushTP() {
	if (sid != null && sid != '') {
		var f = frame1;
	
		if (frameToggle === 2)
			f = frame2;
			
		var innerDoc = f.contentDocument || f.contentWindow.document;
		makeCrossAJAXRequest2(ajaxUrl + "f=setlessontp&callback=pushTPReturn&s=" + sid + "&t=" + urlencode(innerDoc.getTPInfo()));
	}
}
function pushTPReturn(json) {
	cleanupAJAXScript2();
}

function transition() {
	outCount -= 0.1;
	inCount += 0.1;
	
	frame2.style.display='inline';
	
	if (frameToggle === 1) {
		frame1.style.opacity=outCount.toString();
		frame2.style.opacity=inCount.toString();
	}
	else {
		frame2.style.opacity=outCount.toString();
		frame1.style.opacity=inCount.toString();
	}
	
	if (outCount > 0.0)
		changeTimer = setTimeout(transition, 25);
	else {
		clearTimeout(changeTimer);
		$id('contentFrame2').style.top='';
		setupPage(currentPage);
		setCurrentFrame();
	}
}

function startTransition() {
	outCount = 1.0;
	inCount = 0.0;
	$id('contentFrame1').style.display="inline";
	$id('contentFrame2').style.display="inline";
	$id('contentFrame2').style.top='300px';
	changeTimer = setTimeout(transition,10);
}

var resolveTimer;

function showElementWithResolve(e) {
	clearTimeout(resolveTimer);
	var s1 = parseFloat(e.style.opacity);
	resolveTimer = setTimeout(function(){showPartOfElement(e,s1)},10);
}

function showPartOfElement(e,c) {
	c += .008;
	e.style.opacity=c.toString();
	if (c < 1.0)
		resolveTimer = setTimeout(function(){showPartOfElement(e,c)},10);
	else
		clearTimeout(resolveTimer);
}

var dissolveTimer;

function hideElementWithDissolve(e) {
	clearTimeout(dissolveTimer);
	dissolveTimer = setTimeout(function(){hidePartOfElement(e,parseFloat(e.style.opacity))},10);
}

function hidePartOfElement(e,c) {
	c -= .1;
	e.style.opacity=c.toString();
	if (c < 0.0) {
		e.style.display="none";
		clearTimeout(dissolveTimer);
	}
	else
		dissolveTimer = setTimeout(function(){hidePartOfElement(e,c)},150);
}

function next_Click(button) {
	currentPage++;
	if (currentPage <= maxPages)
		
		jumpToPage(nextPage,currentPage);
	else
		currentPage = maxPages;
		
	//RESET PAGE TITLE TO DISPLAY WHICH PAGE THE USER IS ON
	var t = document.title;
	setTitle(t.substring(0, t.indexOf("(")) + " (page " + currentPage.toString() + " of " + maxPages.toString() + ")");
}

function previous_Click(button) {
	currentPage--;
	if (currentPage >= 1)
		jumpToPage(prevPage,currentPage);
	else
		currentPage = 1;
		
	//RESET PAGE TITLE TO DISPLAY WHICH PAGE THE USER IS ON
	var t = document.title;
	setTitle(t.substring(0, t.indexOf("(")) + " (page " + currentPage.toString() + " of " + maxPages.toString() + ")");		
}

function jumpToPage(p,index) {
	closeAllWindows();
	resetButtons();
	var i = frame1;			
	var i2 = frame2;
	
	var innerDoc = i.contentDocument || i.contentWindow.document;
	var innerDoc2 = i2.contentDocument || i2.contentWindow.document;
	
	i2.onload = '';
	i.onload = '';
	
	if (!lessonPath)
		lessonPath="";
	
	if (frameToggle === 1) {
		innerDoc2.location = lessonPath + p;
	}
	else {
		innerDoc.location = lessonPath + p;
	}
	currentPage=parseInt(index);
	startTransition();
}

function setupPage(c) {
	var c1 = c-1;
	var c2 = c+1;
	prevPage = "Page" + (c1).toString() + ".html";
	nextPage = "Page" + (c2).toString() + ".html";
	
	if (c == 1) {
		prevPage = "";
	}
	
	if (c == maxPages) {
		nextPage = "";
	}
	initParent();
}

function resetButtons() {
}

function switchMenu() {
	var e = $id('saveDialog');
	var e1 = $id('getDialog');
	// set the menu to the left side
	if (menuPos === 2) {
		menuPos = 1;
		$id('universalMenuRight').style.display="none";
		$id('universalMenuLeft').style.display="inline";
		$id('pageMenu').style.display="none";
		$id('pageMenuLeft').style.display="inline";
		$id('mainLogo').style.float = "right";
		$id('mainLogo').style.marginLeft = "0px";
		$id('mainLogo').style.marginRight = "40px";
		$id('contentFrame').style.left="65px";
		$id('loginDiv').style.left="3px";
		$id('loginDiv').style.right="";
		var r = $id('rightFacingTOC');
		
		if (r != null)
			r.style.display="none";
			
		var l = $id('leftFacingTOC');
		
		if (l != null)
			l.style.display="inline";
			
		e.style.right = "";
		e.style.left = "100px";
		e1.style.right = "";
		e1.style.left = "100px";
	}
	// set the menu to the right side
	else {
		menuPos = 2;
		$id('universalMenuRight').style.display="inline";
		$id('universalMenuLeft').style.display="none";
		$id('pageMenu').style.display="inline";
		$id('pageMenuLeft').style.display="none";
		$id('mainLogo').style.float = "left";
		$id('mainLogo').style.marginRight = "30px";
		$id('contentFrame').style.left="15px";
		$id('loginDiv').style.right="3px";
		$id('loginDiv').style.left="";
		var r = $id('rightFacingTOC');
		
		if (r != null)
			r.style.display="inline";
			
		var l = $id('leftFacingTOC');
		
		if (l != null)
			l.style.display="none";
			
		e.style.left = "";
		e.style.right = "100px";
		e1.style.left = "";
		e1.style.right = "100px";
	}
}

function toggleSaveDialog() {
	hideElement('getDialog');
	var e = $id('saveDialog');
	
	if (menuPos == 1) {
		e.style.right = "";
		e.style.left = "275px";
	}
	else {
		e.style.left = "";
		e.style.right = "275px";
	}
	
	proceedWithSave = false;
	var state = toggleElementInline('saveDialog');

	//if (state == 1) {
		closeAllWindows();
		toggleElementInline('saveDialog');
		$id('saveLocalStorageList').innerHTML = buildLocalStorageList('saveOld',false);
		$id('newDrawingName').focus();
	//}
}

function toggleGetDialog() {
	hideElement('saveDialog');
	var e = $id('getDialog');
	
	if (menuPos == 1) {
		e.style.right = "";
		e.style.left = "275px";
	}
	else {
		e.style.left = "";
		e.style.right = "275px";
	}
	
	proceedWithSave = false;
	var state = toggleElementInline('getDialog');
	
	
	//alert(state);
	//if (state == 1) {
		closeAllWindows();
		toggleElementInline('getDialog');
		$id('getLocalStorageList').innerHTML = buildLocalStorageList('get',true);				
	//}
}

function buildLocalStorageList(p,d) {
	if (hasLocalStorage()) {
		var s = '';
		var c = 0;
		var keys = [];
		for(var i=0, len=localStorage.length; i<len; i++) {
			var key = localStorage.key(i);
			if (localStorage[key] != null && key != 'sfafAutoLogin' && key != 'sfafLoginInfo' && !endsWith(key,'__sfaprop')) {
				var o = { skey: key,
						  sort: parseInt(localStorage[key].split('$')[0])
						};
				keys.push(o);
				c++;
			}
		}
		
		try {
			var done = qsort(keys);
			s = "<table border='0' cellspacing='0' cellpadding='10' width='100%'>";
			for (var i=0; i < done.length; i++) {
				/*s += '<div onmouseover="highlightLocalStorageItem(this,' + i.toString() + ');" onmouseout="unHighlightLocalStorageItem(this,' + i.toString() + ');" style="padding:10px;border-bottom:1px dotted #333;"><a class="linkClass" onclick="' + p + 'Drawing(\'' + done[i] + '\');">' + (i+1).toString() + '.&nbsp;' + done[i] + '</a>';
				if (d) {
					s += "<span id='d" + i.toString() + "' style='display:none;cursor:pointer;color:#eee;font-weight:bold;padding:3px;border-radius:5px;background-image: -webkit-linear-gradient(top left, #FFADAD 0%, #EF0505 100%);box-shadow:1px 1px 1px 1px #888;float:right;' onclick='deleteDrawing(\"" + done[i] + "\");'>X</span>";
				}
				s += '<br/></div>';*/
				
				s += "<tr>";
				if (d) {
					s += "<td align='left' style='width: 15px;border-bottom:1px dotted #333;'><span><span id='d" + i.toString() + "' style='display:inline;cursor:pointer;color:#eee;font-weight:bold;font-size:11px;padding:3px;margin:3px;border-radius:5px;background-image: -webkit-linear-gradient(top left, #FFADAD 0%, #EF0505 100%);box-shadow:1px 1px 1px 1px #888;' onclick='deleteDrawing(\"" + done[i] + "\");'>X</span></span></td>";
				}
				s += "<td style='border-bottom:1px dotted #333;'>";
				s += '<span><a class="linkClass" onclick="' + p + 'Drawing(\'' + done[i] + '\');">' + (i+1).toString() + '.&nbsp;' + done[i] + '</a></span>';
				s += "</td></tr>";
			}
			s += "</table>";
		} catch (e) {}

		return s;
	}
	else
		return "";
}

function highlightLocalStorageItem(t,i) {
	
	//t.style.fontSize="18px";
	t.style.backgroundColor="#fff";
	var ii = $id('d' + i.toString());
	
	if (ii != null)
		ii.style.display="inline";
}

function unHighlightLocalStorageItem(t,i) {
	//t.style.fontSize="16px";
	t.style.backgroundColor="";
	var ii = $id('d' + i.toString());
	
	if (ii != null)
		ii.style.display="none";
}

function qsort(arr)
{
    var stack = arr;
    var sorted = [];
	var lowest = Math.pow(2, 53);
	var highest = 0;
	var skips = [];
	var c = 0;
	var found = 0;
	var compare = true;
	for (var x = 0; x < stack.length; x++) {
		highest = 0;
		for (var y = 0; y < stack.length; y++) {
			compare = true;
			for (var z = 0; z < skips.length; z++) {
				if (y == skips[z]) {
					compare = false;
					break;
				}
			}
			
			if (compare) {
				if (stack[y].sort > highest) {
					console.log(stack[y].skey);
					found = y;
					highest = stack[y].sort;
				}
			}
		}
		
		skips.push(found);
		sorted.push(stack[found].skey);
	}
 
    return sorted;
}

function saveOldDrawing(n) {
	if (overwriteLocalStorage(n))
		saveNewDrawing(n);
}

function saveNewDrawing(n) {
	var f = frame1;
	
	if (frameToggle === 2)
		f = frame2;
		
	if (f != null) {
		var innerDoc = f.contentDocument || f.contentWindow.document;
		innerDoc.saveDrawing(n);
	}
	else {
		saveDrawing(n);
	}
	
	var props = '';
	
	if (QueryString.t != null && QueryString.t != 'undefined') {
			if (QueryString.t == '1') {
				props += "/tigrrs";
			}
			else if (QueryString.t == '2') {
				props += "/peace";
			}
			else if (QueryString.t == '3') {
				props += "/feelings";
			}
			else if (QueryString.t == '4') {
				props += "/think";
			}
			else if (QueryString.t == "5") {
				props += "/caprm1";
			}
			else if (QueryString.t == "6") {
				props += "/caprm2";
			}
			else if (QueryString.t == "7") {
				props += "/caprm3";
			}
			else if (QueryString.t == "8") {
				props += "/caprm4";
			}
			else if (QueryString.t == "9") {
				props += "/caprm5";
			}
			else if (QueryString.t == "10") {
				props += "/caprm6";
			}
			else if (QueryString.t == "0") {
				props += "/blank";
			}
	}
	else if (onBlankPage)
		props += "/blank";
	
	if (hasLocalStorage()) {
		localStorage.setItem(n + '__sfaprop', props);
	}
	
	showSaveCheck();
}

function getDrawing(n) {
	var newWin = null;
	var f = frame1;
	if (frameToggle === 2)
		f = frame2;
	var innerDoc = null;
	var inFrame = false;
	var keepGoing = true;
	if (f != null) {
		innerDoc = f.contentDocument || f.contentWindow.document;
		inFrame = true;
	}
	
	if (inFrame) {
		var l = localStorage.getItem(n + '__sfaprop');
		var isBlankPage = false;
		if (l != null && l != 'undefined') {
			var props = l.split('/');
			for (var i = 0; i < props.length; i++) {
				if (props[i] == 'tigrrs') {
					newWin = openBlank('0',n);
					isBlankPage = true;
					break;
				}
				else if (props[i] == 'peace') {
					newWin = openBlank('0',n);
					isBlankPage = true;
					break;
				}
				else if (props[i] == 'feelings') {
					newWin = openBlank('0',n);
					isBlankPage = true;
					break;
				}
				else if (props[i] == 'think') {
					newWin = openBlank('0',n);
					isBlankPage = true;
					break;
				}
				else if (props[i] == 'blank') {
					newWin = openBlank('0',n);
					isBlankPage = true;
					break;
				}
				else if (props[i] == 'caprm1') {
					newWin = openBlank('0',n);
					isBlankPage = true;
					break;
				}
				else if (props[i] == 'caprm2') {
					newWin = openBlank('0',n);
					isBlankPage = true;
					break;
				}
				else if (props[i] == 'caprm3') {
					newWin = openBlank('0',n);
					isBlankPage = true;
					break;
				}
				else if (props[i] == 'caprm4') {
					newWin = openBlank('0',n);
					isBlankPage = true;
					break;
				}
				else if (props[i] == 'caprm5') {
					newWin = openBlank('0',n);
					isBlankPage = true;
					break;
				}
				else if (props[i] == 'caprm6') {
					newWin = openBlank('0',n);
					isBlankPage = true;
					break;
				}
			}
		}
		
		if (!isBlankPage)
			innerDoc.getDrawing(n);
		else {
			inFrame = false;
			keepGoing = false;
		}
	}
	else {
		getLastDrawing(n);
	}
		
	if (keepGoing) {
		if (hasLocalStorage()) {
			var l = localStorage.getItem(n + '__sfaprop');

			if (l != null && l != 'undefined') {
				var props = l.split('/');
				
				if (inFrame)
					innerDoc.setCanvasBackground('');
				else
					setCanvasBackground('');
				
				for (var i = 0; i < props.length; i++) {
					if (props[i] == 'tigrrs') {
						
						if (inFrame) {
							tigrrsBackground = '../../../../../../Shared/Images/REMS/TRE_TIGRRS.png';
							innerDoc.setCanvasBackground(tigrrsBackground);
						}
						else {
							tigrrsBackground = '../Shared/Images/REMS/TRE_TIGRRS.png';
							setCanvasBackground(tigrrsBackground);
						}
					}
					else if (props[i] == 'peace') {
						
						if (inFrame) {
							tigrrsBackground = '../../../../../../Shared/Images/REMS/PeacePath_FINAL.png';
							innerDoc.setCanvasBackground(tigrrsBackground);
						}
						else {
							tigrrsBackground = '../Shared/Images/REMS/PeacePath_FINAL.png';
							setCanvasBackground(tigrrsBackground);
						}
					}
					else if (props[i] == 'feelings') {
						
						if (inFrame) {
							tigrrsBackground = '../../../../../../Shared/Images/REMS/FeelingsThermometer_final.png';
							innerDoc.setCanvasBackground(tigrrsBackground);
						}
						else {
							tigrrsBackground = '../Shared/Images/REMS/FeelingsThermometer_final.png';
							setCanvasBackground(tigrrsBackground);
						}
					}
					else if (props[i] == 'think') {
						
						if (inFrame) {
							tigrrsBackground = '../../../../../../Shared/Images/REMS/ThinkThrough_FINAL.png';
							innerDoc.setCanvasBackground(tigrrsBackground);
						}
						else {
							tigrrsBackground = '../Shared/Images/REMS/ThinkThrough_FINAL.png';
							setCanvasBackground(tigrrsBackground);
						}
					}
					else if (props[i] == 'caprm1') {
						
						if (inFrame) {
							tigrrsBackground = '../../../../../../Shared/Images/REMS/TRE_Sail_SuffixBaseword.png';
							innerDoc.setCanvasBackground(tigrrsBackground);
						}
						else {
							tigrrsBackground = '../Shared/Images/REMS/TRE_Sail_SuffixBaseword.png';
							setCanvasBackground(tigrrsBackground);
							$id('capButtons').style.display="inline";
						}
					}
					else if (props[i] == 'caprm2') {
						
						if (inFrame) {
							tigrrsBackground = '../../../../../../Shared/Images/REMS/TRE_Sail_PrefixBaseword.png';
							innerDoc.setCanvasBackground(tigrrsBackground);
						}
						else {
							tigrrsBackground = '../Shared/Images/REMS/TRE_Sail_PrefixBaseword.png';
							setCanvasBackground(tigrrsBackground);
							$id('capButtons').style.display="inline";
						}
					}
					else if (props[i] == 'caprm3') {
						
						if (inFrame) {
							tigrrsBackground = '../../../../../../Shared/Images/REMS/TRE_Sail_CompoundWords.png';
							innerDoc.setCanvasBackground(tigrrsBackground);
						}
						else {
							tigrrsBackground = '../Shared/Images/REMS/TRE_Sail_CompoundWords.png';
							setCanvasBackground(tigrrsBackground);
							$id('capButtons').style.display="inline";
						}
					}
					else if (props[i] == 'caprm4') {
						
						if (inFrame) {
							tigrrsBackground = '../../../../../../Shared/Images/REMS/TRE_Sail_Contradictions.png';
							innerDoc.setCanvasBackground(tigrrsBackground);
						}
						else {
							tigrrsBackground = '../Shared/Images/REMS/TRE_Sail_Contradictions.png';
							setCanvasBackground(tigrrsBackground);
							$id('capButtons').style.display="inline";
						}
					}
					else if (props[i] == 'caprm5') {
						
						if (inFrame) {
							tigrrsBackground = '../../../../../../Shared/Images/REMS/TRE_Sail_Chunking.png';
							innerDoc.setCanvasBackground(tigrrsBackground);
						}
						else {
							tigrrsBackground = '../Shared/Images/REMS/TRE_Sail_Chunking.png';
							setCanvasBackground(tigrrsBackground);
							$id('capButtons').style.display="inline";
						}
					}
					else if (props[i] == 'caprm6') {
						
						if (inFrame) {
							tigrrsBackground = '../../../../../../Shared/Images/REMS/TRE_Sail_Blends.png';
							innerDoc.setCanvasBackground(tigrrsBackground);
						}
						else {
							tigrrsBackground = '../Shared/Images/REMS/TRE_Sail_Blends.png';
							setCanvasBackground(tigrrsBackground);
							$id('capButtons').style.display="inline";
						}
					}
				}
			}	
		}
	}
	showSaveCheck();
	return newWin;
}

function openBlank(t,n) {
	if (t == null)
		t = '0';
	var f = '';
	if (n != null && n != 'undefined')
		f = '&f=' + n.toString();
	return window.open('BlankPage.html?t=' + t.toString() + f, '_blank', 'height=768,width=1024,fullscreen=no,location=no,menubar=no,toolbar=no,scrollbars=yes',true);
}
		
function deleteDrawing(n) {
	var b = deleteLocalStorage(n);
	
	if(b) {
		showSaveCheck();
	}
}
function openRuler(){
	document.getElementById("divRuler").style.display = "inline";
}
function closeRuler(){
	document.getElementById("divRuler").style.display = "none";	
}
function openProtractor(){
	document.getElementById("divProtractor").style.display = "inline";
}
function closeProtractor(){
	document.getElementById("divProtractor").style.display = "none";	
}
function openCompass(){
	//document.getElementById("divRuler").style.display = "inline";
}
function closeCompass(){
	//document.getElementById("divRuler").style.display = "none";	
}
function openCalculator(){
	//document.getElementById("divRuler").style.display = "inline";
}
function closeCalculator(){
	//document.getElementById("divRuler").style.display = "none";	
}
function pencilColorPicker(c) {
	var f = frame1;
	if (frameToggle === 2) {
		f = frame2;
	}
	var innerDoc = f.contentDocument || f.contentWindow.document;
	pencil(c);
	}
function openPencilColorPicker(){
	document.getElementById("divPencilColorSizePicker").style.display = "inline";
	document.getElementById("divHighlighterColorSizePicker").style.display = "none";
}
function openHighlighterColorPicker(){
	document.getElementById("divHighlighterColorSizePicker").style.display = "inline";
	document.getElementById("divPencilColorSizePicker").style.display = "none";
}
function pencilColorSizePicker(c,s,o) {
	var f = frame1;
	if (frameToggle === 2) {
		f = frame2;
	}
	//SET GLOBAL DRAWING TOOL VARS TO HOLD FOR SESSION
	globalLineColor = c;
	globalLineSize = s;
	globalLineAlpha = o;
	
	//var innerDoc = f.contentDocument || f.contentWindow.document;
	pencil(globalLineColor,globalLineSize,globalLineAlpha);
	document.getElementById("divPencilIconBG").style.backgroundColor = c;
	document.getElementById("divHighlighterIconBG").style.backgroundColor = c;	
	if(o < 1.0)//HIGHLIGHTER IS SELECTED:
	{
		document.getElementById("divPencilIconBG").style.backgroundColor = '#ffffff';
	}
	else //PENCIL IS SELECTED
	{
		document.getElementById("divHighlighterIconBG").style.backgroundColor = '#ffffff';
	}
	
	document.getElementById("divPencilColorSizePicker").style.display = "none";
	document.getElementById("divHighlighterColorSizePicker").style.display = "none";
	}		

function pencil(c,s,o) {
	var f = frame1;
	if (frameToggle === 2) {
		f = frame2;
	}
	var innerDoc = f.contentDocument || f.contentWindow.document;
	
	
	innerDoc.pencilClicked(c,s,o);
}


function eraser() {
	document.getElementById("divPencilColorSizePicker").style.display = "none";
	document.getElementById("divHighlighterColorSizePicker").style.display = "none";
	document.getElementById("divPencilIconBG").style.backgroundColor = '#ffffff';
	document.getElementById("divHighlighterIconBG").style.backgroundColor = '#ffffff';	
	var f = frame1;
	
	if (frameToggle === 2)
		f = frame2;
		
	var innerDoc = f.contentDocument || f.contentWindow.document;
	innerDoc.eraserClicked();
}

function hasLocalStorage() {
	try {
		return 'localStorage' in window && window['localStorage'] !== null;
	} catch (e) {
		return false;
	}
}

function resetScreen(b) {
	closeAllWindows();
	var i = frame1;
	
	if (frameToggle === 2)
		i = frame2;
		
	if (i != null) {
		var innerDoc = i.contentDocument || i.contentWindow.document;
		//ADDED JUMP TO PAGE TO RELOAD THE ENTIRE CURRENT PAGE	
		jumpToPage('Page' + currentPage.toString() + ".html",currentPage);
	}
	else {
		resetCanvas($id('canvas1'));
	}
}
//OLD REFRESH BUTTON CODE - DID NOT RE-LOAD THE ENTIRE PAGE
//function resetScreen(b) {
//	closeAllWindows();
//	
//	var i = frame1;
//	
//	if (frameToggle === 2)
//		i = frame2;
//		
//	if (i != null) {
//		var innerDoc = i.contentDocument || i.contentWindow;
//		innerDoc.resetCanvas();
//		innerDoc.resetButtonClick(b);
//		//innerDoc.location.reload(true);
//	}
//	else {
//		resetCanvas($id('canvas1'));
//	}
//	//pencil();
//}


function showSaveCheck() {
	$id('newDrawingName').value='';
	hideElement('getDialog');
	hideElement('saveDialog');
	setTimeout('hideSaveCheck();', 1000);
}

function hideSaveCheck() {
}

function openNewPage() {
	window.open("BlankPage.html", 'new page');
}
		
function stringToBoolean(s) {
	if (s === 'true')
		return true;
	else
		return false;
}

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}
		
function toggleTPS() {
	if (hasTPS) {
		var v = "none";

		if  ($id('tpsDialog').style.display=='none') {
			$id('tpsStep2').style.opacity=".1";
			$id('tpsStep3').style.opacity=".1";
			closeAllWindows();
			v = 'inline';
		}

		$id('tpsDialog').style.display=v;
	}
}
		
function autoRotate() {
	var snd = $id("audioSpinner");
	snd.play();
	var i = document.getElementById("rImg");
	i.className = 'rotate360';
	var s = document.getElementById("number");
	s.innerHTML="?";
	$id('newNum').innerHTML="?";
	setTimeout(resetRotate, 1001);
}
function resetRotate() {
	var i = document.getElementById("rImg");
	i.className = '';
	var s = document.getElementById("number");
	s.innerHTML=getNextNumber().toString();
	$id('newNum').innerHTML=s.innerHTML;
}

function setVideo(v) {
	toggleElement('videoDialog','inline');
	var vid = $id('videoPlayer');
	
	if (vid != null) {
		vid.src = v;
		vid.load();
		setTimeout(playVideo,500);
	}
}

function playVideo() {
	
	var vid = $id('videoPlayer');
	
	if (vid != null) {
		vid.play();
	}
}


function f_clientWidth() {
	return f_filterResults (
		window.innerWidth ? window.innerWidth : 0,
		document.documentElement ? document.documentElement.clientWidth : 0,
		document.body ? document.body.clientWidth : 0
	);
}
function f_clientHeight() {
	return f_filterResults (
		window.innerHeight ? window.innerHeight : 0,
		document.documentElement ? document.documentElement.clientHeight : 0,
		document.body ? document.body.clientHeight : 0
	);
}
function f_scrollLeft() {
	return f_filterResults (
		window.pageXOffset ? window.pageXOffset : 0,
		document.documentElement ? document.documentElement.scrollLeft : 0,
		document.body ? document.body.scrollLeft : 0
	);
}
function f_scrollTop() {
	return f_filterResults (
		window.pageYOffset ? window.pageYOffset : 0,
		document.documentElement ? document.documentElement.scrollTop : 0,
		document.body ? document.body.scrollTop : 0
	);
}
function f_filterResults(n_win, n_docel, n_body) {
	var n_result = n_win ? n_win : 0;
	if (n_docel && (!n_result || (n_result > n_docel)))
		n_result = n_docel;
	return n_body && (!n_result || (n_result > n_body)) ? n_body : n_result;
}

function loadPage() {
	menuPos = parseInt(QueryString.s)
	lessonPath = QueryString.l.replace(/%2F/g,"/");
	ajaxUrl = "https://api.successforall.org/SFAFJSONRequest.aspx?";
	initParent();
	initRandomNumberGenerator(highRR);
	switchMenu();
	$id('contentFrame1').src = lessonPath + "Page1.html";
	maxPages = parseInt(QueryString.p);
	document.getElementById("divHighlighterIconBG").style.backgroundColor = '#ffffff';
	
	setTitle(decodeURIComponent(QueryString.t) + " (page 1 of " + maxPages.toString() + ")");

	//setTitle(QueryString.title.replace(/%21/g," "));
	
	if (maxPages == 1) {
		$id("btnNext").style.opacity = '0.2';
		$id("btnNextL").style.opacity = '0.2';
		$id("btnTOCL").style.opacity = '0.2';
		$id("btnTOCL").setAttribute("onclick","");
		$id("btnTOC").style.opacity = '0.2';
		$id("btnTOC").setAttribute("onclick","");
	}
		
	if (QueryString.r=="1") {
		testConnection();
	}	
}