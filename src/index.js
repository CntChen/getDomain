/*
* Edited by ChenHanJie
* 可以处理:
* 顶级域名后缀 xxx.com
* 国家域名及二级域(假设其二级域是顶级域名后缀) xxx.cn / xxx.com.cn
* 不能处理 xxx.cn.com (这种情况比较少出现)
*/
function getDomain(url) {
	var topDomainNameSuffix = '(com|net|org|gov|edu|mil|biz|info|club)';
	var countryDomainNameSuffix = '(cc|cn|in|us|hk|ru|me|tv|io|la|im|kz|ee|co)';

	var isTopDomainRegExp = RegExp('\\.' + topDomainNameSuffix + '\\b(?=[^\\.]|$)');
	var isCountryDomainRegExp = RegExp('\\.' + countryDomainNameSuffix + '\\b(?=[^\\.]|$)');
	var getTopDomainRegExp = RegExp('[\\w-]+\\.' + topDomainNameSuffix + '\\b(?=[^\\.]|$)');
	var getCountryDomainRegExp = RegExp('[\\w-]+(\\.' + topDomainNameSuffix + '\\b)?\\.' + countryDomainNameSuffix + '\\b(?=[^\\.]|$)');

	var v = null;
	if (isTopDomainRegExp.test(url)) {
		console.log('top domain');
		var v = getTopDomainRegExp.exec(url)[0];
	} else if (isCountryDomainRegExp.test(url)) {
		console.log('country domain');
		v = getCountryDomainRegExp.exec(url)[0];
	}

	return v;
}

exports.getDomain = getDomain;