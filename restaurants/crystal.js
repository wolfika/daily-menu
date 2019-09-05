const cheerio = require('cheerio');
const he = require('he');
const striptags = require('striptags');
const iso88592 = require('iso-8859-2');

module.exports = {
	name: 'Crystal Restaurant',
	url: 'https://www.crystalrestaurant.hu/?p=hetimenu',
	getMenu: (body, date = new Date()) => {
		const $ = cheerio.load(body);
		const dailyMenu = $('#hetimenu_content table tbody')
			.find(`tr:nth-child(${date.getDay()}) .kaja`)
			.html();

		return dailyMenu
			.split('<br>')
			.map(el => el.trim())
			.map(el => el.replace(/[\n\t]/g, ''))
			.map(el => he.decode(el))
			.map(el => iso88592.decode(el));
	}
};
