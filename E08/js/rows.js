
function arow() {
	return document.getElementsByTagName("tbody")[0].innerHTML += ('<tr><td></td><td></td></tr>');
}

function drow() {
	var len = document.getElementsByTagName("tbody")[0].getElementsByTagName("tr").length;
	if (len) {
		return document.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[len-1].remove();
	} else {
		return alert('Nothing to delete!');
	}
}