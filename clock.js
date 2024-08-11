var idsOnes = ['h12','h13','h22','h23','m12','m13','m22','m23'];

var MS1 = 100;
var MS2 = 50;

var randTime = true;

function changeTime() {
    var hour = Math.floor(Math.random() * 12).toString().padStart(2, '0');
    var minute = Math.floor(Math.random() * 60).toString().padStart(2, '0');

	document.getElementById("hour-1").setAttribute("class","num-"+hour.substr(0,1));
	document.getElementById("hour-2").setAttribute("class","num-"+hour.substr(1,1));
	document.getElementById("minute-1").setAttribute("class","num-"+minute.substr(0,1));
	document.getElementById("minute-2").setAttribute("class","num-"+minute.substr(1,1));

	if (hour == '11' && minute == '11') {
		clearClassNames();
		hit(0);
	}
	else
		if (randTime) setTimeout(changeTime, MS1);
}

function ids() {
	let prefix = ["h", "m"];
	let cn = [];
	prefix.map((p, index) => {
		for (var i=1; i<8; i++) {
			for (var j=1; j<3; j++) {
				cn.push(`${p}${j}${i}`);
			}
		}	
	});
	return cn;
}

function toggle() {
	if (randTime) {
		randTime = false;
		clearClassNames();
		hit(0);
	} else {
		location.reload();
	}
}

function arrayDifference(A, B) {
    const setB = new Set(B);
    return A.filter(element => !setB.has(element));
}

var idsMinusOnes = arrayDifference(ids(), idsOnes);

function clearClassNames() {
	ids().map((id, index) => {
		document.getElementById(id).setAttribute('class','');
	});
}

function hit(count) {

	if (count == 100) {
		location.reload(true);
		return;
	}
	idsOnes.map((id, index) => {
		document.getElementById(id).setAttribute('fill', getRandomRgbColor());
	});
	idsMinusOnes.map((id, index) => {
		document.getElementById(id).setAttribute('fill', getRandomRgbColor2());
	});
    setTimeout(() => {
		hit(count+1);
	  }, MS2);
  
}

function getRandomRgbColor() {
	const r = Math.floor(Math.random() * 196) + 64;
	const g = Math.floor(Math.random() * 196) + 64;
	const b = Math.floor(Math.random() * 196) + 64;
	return `rgb(${r}, ${g}, ${b})`;
}
function getRandomRgbColor2() {
	const r = Math.floor(Math.random() * 16);
	const g = Math.floor(Math.random() * 16);
	const b = Math.floor(Math.random() * 16);
	return `rgb(${r}, ${g}, ${b})`;
}  

changeTime();