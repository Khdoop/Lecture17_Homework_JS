
function checkv(form) {
	var nerr = [];
	var perr = [];
	
	if (form.username.value.length < 6) {
		nerr.push('Min username length: 6');
	}
	if (form.password.value.length < 8) {
		perr.push('Min password length: 8');
	}
	
	if (!nerr.length && !perr.length) {
		return true;
	}
	
	form.username.style.background = '#ffb3b3';
	var childN = document.createElement('span');
	childN.className = 'errors';
	childN.innerHTML = nerr;
	document.querySelector('form div:nth-child(1)').appendChild(childN);
	
	form.password.style.background = '#ffb3b3';
	var childP = document.createElement('span');
	childP.className = 'errors';
	childP.innerHTML = perr;
	document.querySelector('form div:nth-child(3)').appendChild(childP);
	
	return false;
}

function addbox(checko) {
	if (checko.selectedIndex == 2) {
		var par = document.getElementById('chold');
		var child = document.createElement('input');
		child.id = child.name = 'customc';
		par.appendChild(child);	
	} else {
		var custom = document.getElementById('customc');
		if (custom) {
			custom.parentNode.removeChild(custom);
		}
	}
}