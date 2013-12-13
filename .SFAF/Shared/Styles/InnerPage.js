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

/*begin page12 specific*/
/*--------------------*/
function highlightAnswer(Answer){
	[].forEach.call(document.querySelectorAll("."+Answer),function(element,index){
		if(element.classList.contains("unhighlightedAnswer")){
			element.classList.remove("unhighlightedAnswer");
			element.classList.add("highlightedAnswer");
		}else{
			element.classList.add("unhighlightedAnswer");
			element.classList.remove("highlightedAnswer");
		}
	});
}
/*------------------*/
/*end page12 specific*/


/*begin page12 specific*/
/*--------------------*/
function writeOn(writeOnClass){
	[].forEach.call(document.querySelectorAll("."+writeOnClass),function(element,index){
		if(element.classList.contains("underline")){
		element.classList.remove("underline");
		}else{
			element.classList.add("underline");
		}
	});
}
/*------------------*/
/*end page12 specific*/



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
function wordDefinition(word){
	var k=[].indexOf.call(document.querySelectorAll("."+word.className),word);
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
function wordPictures(ibutton){
	var j=[].indexOf.call(document.querySelectorAll("."+ibutton.className),ibutton);
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
function captainImages(img){
	var k=[].indexOf.call(document.querySelectorAll("."+img.className),img);
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


function SpinningWheel(wheelBox){
var ele=this;
ele.isSpinning=false;
var childStartAngles=[];
var ChildrenArray=[0,1,2,3,4];
var ChildrenSelected=[];
var SpinIntervals=[];
var addTime=[];
ele.getRandomIndex=function(){
	(function(variable){
		ele.randomIndex=variable;
	})
	(getRandomInt(0,ChildrenArray.length-1));
	return ele;
}
ele.getRandomChild=function(){
	(function(element){
		ele.randomChild=element;
	})
	(ChildrenArray[ele.randomIndex]);
	(function(element){
		ChildrenSelected.unshift(element);
	})
	(ChildrenArray[ele.randomIndex]);
	return ele;
}
ele.getRandomOnInterval=function(){
	(function(variable){
		ele.randomOnInterval=variable;
	})
	(getRandomInt(0+14,ele.degreesPerChild-14));
	return ele;
}
ele.getSelectedChildren=function(){
	(function(element,fn){
		ChildrenArray.splice(ele.randomIndex,1);
		ChildrenArray.push(element);
		fn(ChildrenArray);
	})
	(ChildrenSelected[3],function(ChildrenArray){
		Q = (typeof ChildrenArray[ChildrenArray.length-1]=='undefined') 
		?	ChildrenArray.pop()
		:	null ;
	});
	return ele;
}
ele.calculateDegreesToSpin=function(){
	(function(variable,fn){
		ele.degreesToSpin=variable;
		fn();
	})
	(ele.degreesToStart+360+childStartAngles[ele.randomChild]-
		ele.degreesPerChild+ele.randomOnInterval+360,
		function(){
			ele.degreesToSpin = (ele.degreesToSpin<720) 
			? ele.degreesToSpin+=360 
			: ele.degreesToSpin ;
		}
	);
	return ele;
}
ele.calculateSpinInterval=function(){
	(function(variable){
		ele.SpinInterval=variable;
	})
	((Math.floor((2000/ele.degreesToSpin)*1000))/1000);
	return ele;
}
ele.calculateSlowing=function(){
	(ele.SlowingRecursion=function(z,k,v){
		(function(fn,fnII){
			if(z<(k*(3/4))){
				addTime[z]=0;
			}else{
				v+=.03;
				addTime[z]=v;
			}
			fn(z);
			fnII(z,k,v);
		})(	function(z){
				SpinIntervals[z]=ele.SpinInterval+addTime[z];
			},
			function(z,k,v){
				Q = (z<k) 
				? ele.SlowingRecursion(z+1,k,v) 
				: null ;
			}
		);
	})(0,Math.floor(ele.degreesToSpin),0);
	return ele;
}
ele.rotate=function(element){
	ele.isSpinning=true;
	(ele.spinTimeRecursion=function(z,angleCnt,interval,spinEnd){
		setTimeout(function(){
			(function(k,j,w,f){
				ele.spinTimeRecursion(k,j,w,f);
			})(z+1,angleCnt+2,SpinIntervals[angleCnt+2],spinEnd);
			(function(fn){
				ele.currentAngle+=2;
				fn(element,-ele.currentAngle);
			})( function(element,Angle){
				element.style.webkitTransform="rotate("+Angle+"deg)";
			});
			Q = (angleCnt>=ele.degreesToSpin) 
			? spinEnd() 
			: null ;
		},interval);
	})(0,0,SpinIntervals[0],function(){
			ele.spinTimeRecursion=null;
			ele.degreesToStart=-ele.currentAngle%360;
			ele.isSpinning=false;
		}
	);
	return ele;
}
ele.Calculations=function(){
	ele
	.getRandomIndex()
	.getRandomChild()
	.getRandomOnInterval()
	.getSelectedChildren()
	.calculateDegreesToSpin()
	.calculateSpinInterval()
	.calculateSlowing()
	return ele;
}
function create(){
	ele.spinButton=document.createElement('img');
	ele.spinButton.className='spin_Button';
	ele.spinButton.src='spin_button.png';
	wheelBox.appendChild(ele.spinButton);
	ele.spinText=document.createElement('img');
	ele.spinText.className='spin_Text';
	ele.spinText.src='spinner_text.png';
	wheelBox.appendChild(ele.spinText);
	ele.spinText.onmousedown=function(){
		if(ele.isSpinning==true){return;}
		ele
		.Calculations()
		.rotate(ele.spinningWheel);
	};
	ele.spinningWheel=document.createElement('div');
	ele.spinningWheel.className='spinningWheel';
	wheelBox.appendChild(ele.spinningWheel);

	ele.spinner=document.createElement('img');
	ele.spinner.className='wheelImg';
	ele.spinner.src='spinner.png';
	ele.spinningWheel.appendChild(ele.spinner);

	ele.triangle=document.createElement('img');
	ele.triangle.className='spinTriangle';
	ele.triangle.src='spinner_Arrow.png';
	wheelBox.appendChild(ele.triangle);

	var positionImg=40;
	ele.degreesPerChild=360/5;
	ele.currentAngle=ele.degreesPerChild/2;
	ele.degreesToStart=(-ele.currentAngle);
	for(var i=0, startAngle=0; i<5; i++){
		childStartAngles[i]=startAngle;
		startAngle+=ele.degreesPerChild;
	}
	ele.spinner.style
		.webkitTransform=
			"rotate("+positionImg+"deg)";
	ele.spinningWheel.style
		.webkitTransform=
			"rotate("+ele.degreesToStart+"deg)";
	return ele;
}
create();
function getRandomInt(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}
}


window.onload=function(){
	everyWheel=document.getElementsByClassName('wheelBox');
	for(var k=0,j=everyWheel.length;k<j;k++){
		SpinningWheel.apply(everyWheel.item(k),[everyWheel.item(k)]);
	}
	
	createCloseX();
}







