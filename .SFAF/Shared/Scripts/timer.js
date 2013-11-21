var secCounter;
var minCounter;
var soundPlayed = false;
function firstCountdown() {
	$id('timerCountdown').style.color="#333";
	writeMin();
	writeSec();
	soundPlayed=false;
	timerStart = true;
	countDownMin();
}
function countDownMin() {
	minCounter=setTimeout(countDownMin,60000);								
	if (timerStart) {
		secCounter = setTimeout(countDownSec,1000);									
	}
	else {
		min--;
		if (min >= 0) {
			if (min < startSecCountdown && sec == 00 && !soundPlayed) {
				soundPlayed=true;
				setTimeout(playBirdSound,10);
			}
			
			secCounter = setTimeout(countDownSec,1000);
			sec = 0;
			writeSec();
			writeMin();
		}
		else {
			clearTimeout(secCounter);
			clearTimeout(minCounter);
			playBirdSound();
			sec = 0;
			writeSec();

		}
	}
}
function countDownSec() {
	if (timerStart) {
		timerStart = false;
		min--;
		writeMin();
	}
	clearTimeout(secCounter);
	sec--;
	if (sec < 0)
		sec = 59;
		
	writeSec();
	
	if (sec >= 0)
		secCounter = setTimeout(countDownSec,1000);
}
function writeMin() {
	var stringMin = min.toString();
	
	if (min < 10)
		stringMin = "0" + stringMin;
		
	setSpanInnerText('minTen',stringMin.substring(0,1));
	setSpanInnerText('minOne',stringMin.substring(1,2));
}
function writeSec() {
	var stringSec = sec.toString();
	
	if (stringSec < 10)
		stringSec = "0" + stringSec;
		
	setSpanInnerText('secTen',stringSec.substring(0,1));
	setSpanInnerText('secOne',stringSec.substring(1,2));
}
function playBirdSound() {
	var snd = document.getElementById("audioTimer");
	snd.play();
}