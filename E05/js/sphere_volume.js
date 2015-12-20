


function spherevol() {
	var radius = document.getElementById("radius").value;
	var volume = Math.PI * Math.pow(radius,3) * 4/3;
	volume = volume.toFixed(2);
	return document.getElementById("result").innerHTML = 'Sphere volume = ' + volume;
}