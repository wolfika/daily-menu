const cheerio = require('cheerio');
const he = require('he');
const striptags = require('striptags');

module.exports = {
	name: 'István Pince Borozó & Étterem',
	url: 'https://www.facebook.com/istvanpince/',
	getMenu: body => {
		const $ = cheerio.load(body);
		const separators = ['<br>', '<p>'];
		const dailyMenu = $('.userContent').filter((i, e) => {
			return e.children.length;
		}).eq(0).find('.text_exposed_root').html();

		return dailyMenu.split(new RegExp(separators.join('|'), 'g'))
			.map(el => el.trim())
			.map(el => striptags(el))
			.map(el => el.replace(/\.\.\./g, ''))
			.map(el => he.decode(el));
	}
};
