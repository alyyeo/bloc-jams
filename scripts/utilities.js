var forEach = function(array, callback) {
	var i = 0;
	while (i < array.length) {
		callback(i);
		i++;
	}
};