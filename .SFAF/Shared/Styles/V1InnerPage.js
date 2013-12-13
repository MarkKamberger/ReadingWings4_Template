function goToLessonMenu(direction,numberToMove){
	if(direction==='right'){
		for(var k=0;k<numberToMove;k++){
			this.parent.parent.document.getElementById('btnNext').click();
		}
	}
	else if(direction==='left'){
		for(var k=0;k<numberToMove;k++){
			this.parent.parent.document.getElementById('btnPrevious').click();
		}
	}
}
function lessonMenuI(numberToMove){
	for(var k=0;k<numberToMove;k++){
		this.parent.parent.document.getElementById('btnNext').click();
	}
}

function createCloseX(){
	[].forEach.call(document.querySelectorAll(".modalWindow"),function(element,index){
		var closeX=document.createElement("div");
		closeX.classList.add("closeX");
		closeX.innerHTML="X";
		element.closeX=closeX;
		document.body.appendChild(closeX);
		closeX.onclick=function(){
			teacherInstructions(this,element.id);
			closeX.style.visibility='hidden';
		}
	});
}
function teacherInstructions(k,modalWindow){
	if(!k.classList.contains("onPageClick")){
		[].forEach.call(document.querySelectorAll(".onPageClick"),function(element,index){
			element.style.zIndex=4;
		});
	}else{
		[].forEach.call(document.querySelectorAll(".onPageClick"),function(element,index){
			element.style.zIndex=4;
		});
		k.style.zIndex=1000;
	}
	[].forEach.call(document.querySelectorAll(".modalWindow"),function(element,index){
		if(element!=document.getElementById(modalWindow) && element.style.visibility=="visible"){
			element.style.visibility='hidden';
			element.closeX.style.visibility='hidden';
		}
	});
	if(document.getElementById(modalWindow).style.visibility=="visible"){
		document.getElementById('greyModal').style.visibility='hidden';
		document.getElementById(modalWindow).style.visibility='hidden';
		document.getElementById(modalWindow).closeX.style.visibility='hidden';
		[].forEach.call(document.querySelectorAll(".onPageClick"),function(element,index){
			element.style.zIndex=1000;
		});
	}else{
		document.getElementById('greyModal').style.visibility="visible";
		document.getElementById(modalWindow).style.visibility="visible";
		document.getElementById(modalWindow).closeX.style.visibility="visible";
	}
}





/*begin page5 specific*/
/*--------------------*/
function scoreSheetPages(k){
	initCanvasForDrawing('canvas1');
	if(!document.getElementsByClassName('openClose').item(k)){
		document.getElementsByClassName('openClose').item(k-1).style.visibility="hidden";
		document.getElementsByClassName('openClose').item(0).style.visibility="visible";
		document.getElementsByClassName('openClose2').item(k-2).style.visibility="hidden";
	}
	document.getElementsByClassName('openClose').item(k).style.visibility="visible";
	document.getElementsByClassName('openClose').item(k-1).style.visibility="hidden";
	
	document.getElementsByClassName('openClose2').item(k-1).style.visibility="visible";
	document.getElementsByClassName('openClose2').item(k-2).style.visibility="hidden";
}
/*------------------*/
/*end page5 specific*/

/*begin page8 specific*/
/*--------------------*/
var current=null;
var colour="#B5D6AE";
function wordDefinition(word,k){
	if(current==k){
		if(word.isGreen){	
			classElements('word').item(k).style.backgroundColor="transparent";
			classElements('definition').item(k).style.visibility="hidden";
			word.isGreen=false;
		}else{
			classElements('word').item(k).style.backgroundColor=colour;
			classElements('definition').item(k).style.visibility="visible";
			word.isGreen=true;
		}
	}else{
		classElements('word').item(current).style.backgroundColor="transparent";
		classElements('definition').item(current).style.visibility="hidden";
		word.style.backgroundColor=colour;
		classElements('definition').item(k).style.visibility="visible";
		word.isGreen=true;
	}
	current=k;
	styleClass('wordPicture','visibility','hidden');
}	
function wordPictures(j){
	if(classElements('wordPicture').item(j-1).style.visibility==="visible"){
		styleClass('word','backgroundColor','transparent');
		styleClass('definition','visibility','hidden');
		styleClass('wordPicture','visibility','hidden');
		classElements('wordPicture').item(j-1).style.visibility="hidden";
	}else{
		styleClass('word','backgroundColor','transparent');
		styleClass('definition','visibility','hidden');
		styleClass('wordPicture','visibility','hidden');
		classElements('wordPicture').item(j-1).style.visibility="visible";
	}
}
function styleClass(className,style,condition){
	if(style==="backgroundColor"){
		for(var t=0,w=classElements(className);t<w.length;t++){
			w.item(t).style.backgroundColor=condition;
		}
	}else if(style==="visibility"){
		for(var t=0,w=classElements(className);t<w.length;t++){
			w.item(t).style.visibility=condition;
		}
	}
}
function classElements(className){
	return document.getElementsByClassName(className);
}
function captainImages(img,k){
			if(document.getElementsByClassName('popUpImage').item(k).style.visibility==="visible"){
				document.getElementsByClassName('popUpImage').item(k).style.visibility="hidden";
			}else{
				for(var j=0; j<19; j++){
					document.getElementsByClassName('popUpImage').item(j).style.visibility="hidden";
				}
				document.getElementsByClassName('popUpImage').item(k).style.visibility="visible";
			}
		}
/*------------------*/
/*end page8 specific*/













window.onload=function(){
	createCloseX();
}