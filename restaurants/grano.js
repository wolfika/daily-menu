const cheerio = require('cheerio');
const he = require('he');
const striptags = require('striptags');

module.exports = {
	name: 'Piazza del Grano',
	url: 'http://etterem.grano.hu/',
	getMenu: (body, date = new Date()) => {
		const $ = cheerio.load(body);
		const day = date.getDay();

		if ([0, 6].indexOf(day) > 0) {
			return [];
		}

		const dailyMenu = $('#ajanlat')
			.find(`div:nth-child(${day}) h2`)
			.html();

		return dailyMenu
			.split(', ')
			.map(el => striptags(el))
			.map(el => he.decode(el));
	}
};
