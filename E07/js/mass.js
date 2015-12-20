
function kgtolb() {
	var kg = document.getElementById("box1").value;
	return document.getElementById("box2").value = (kg * 2.20462262185).toFixed(2);
}

function lbtokg() {
	var lb = document.getElementById("box2").value;
	return document.getElementById("box1").value = (lb * 0.45359237).toFixed(2);
}

function reset() {
	document.getElementById("box1").value = '';
	document.getElementById("box2").value = '';
}