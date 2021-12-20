const startingMin = 10;
let time = startingMin * 60;
const countdown = document.getElementById('countdown');

setInterval(updateCountdown,1000);

function updateCountdown(){
	const min= Math.floor(time / 60);
	let seconds = time % 60;
	
	seconds = seconds < 10  ?  '0' + seconds : seconds;
	
	countdown.innerHTML = `${min}:${seconds}`;
	
	time--;
	
} 