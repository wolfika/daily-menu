const cheerio = require('cheerio');
const he = require('he');
const striptags = require('striptags');

module.exports = {
	name: 'István Pince Borozó & Étterem',
	url: 'https://www.facebook.com/istvanpince/',
	getMenu: body => {
		const $ = cheerio.load(body);
		const dailyMenu = $('.userContent').eq(0).find('p').eq(1).html();

		return dailyMenu.split('<br>')
			.map(el => el.trim())
			.map(el => striptags(el))
			.map(el => el.replace(/\.\.\./g, ''))
			.map(el => he.decode(el));
	}
};
