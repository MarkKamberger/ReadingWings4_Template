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
}
