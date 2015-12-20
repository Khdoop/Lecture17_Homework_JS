
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var count;
var max = 0;
var hold;
var most;

for (var i = 0; i < arr1.length; i++) {
	count = 0;
	for (var k = i; k < arr1.length; k++) {
		if (arr1[k] == arr1[i]) {
			count++;
			hold = arr1[k];
		} else {
			break;
		}
	}
	if (count > max) {
		max = count;
		most = hold;
	}
}

console.log(most);