exports.space = function(count) {
	var r = "";
	for (var i = 0; i < count; i++) {
		r = r.concat(" ");
	}
	return r;
}

exports.tabs = function(count) {
	var r = "";
	for (var i = 0; i < count; i++) {
		r = r.concat("\t");
	}
	return r;
}

exports.showArray = function(array) {
  array.map((item, i) => {
    console.log(item);
  })
}
