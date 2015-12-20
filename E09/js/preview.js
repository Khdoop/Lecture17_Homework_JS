
var img = document.getElementsByClassName('pic');
var prv = document.getElementById('preview');


for (var i = 0; i < img.length; i++) {
	img[i].addEventListener("mouseover", preview,false);
	img[i].addEventListener("mouseout", normal,false);
}

function preview() {
	prv.src = this.src.replace('.png', '-big.png');
}

function normal() {
	prv.src = '';
}