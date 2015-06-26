var top_level_domain = require('./top-level-domain'),
	second_level_domain = require('./second-level-domain');

// /[\w-]+.((com|net|gov|edu|info)\.)?(com|net|org|gov|edu|info|mobi|cn|hk|in|us|tv|io|la|im|kz|club|ee|me)\b(?!\.)/
function getReg() {
	var reg = '[\\w-]+\\.((';
	second_level_domain.forEach(function (item, index) {
		if (index !== 0) {
			reg += '|' + item;
		} else {
			reg += item;
		}
	});
	reg += ')\\.)?(';
	top_level_domain.forEach(function (item, index) {
		if (index !== 0) {
			reg += '|' + item;
		} else {
			reg += item;
		}
	});
	reg += ')\\b(?!\\.)';
	return new RegExp(reg);
}

module.exports = function (url) {
	
	if (typeof url !== 'string') {
		return null;
	}	
	var r = getReg();
	console.log(r);
	var v = r.exec(url);
	if (!v) {
		return null;
	} 
	return v[0];
};