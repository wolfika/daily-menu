const cheerio = require('cheerio');
const he = require('he');
const striptags = require('striptags');

module.exports = {
	name: 'Mátyás Király Vendéglö',
	url: 'http://www.matyasvendeglo.hu/index.php?m=content&a=weeklymenu',
	getMenu: (body, date = new Date()) => {
		const $ = cheerio.load(body);
		const dataTableMapping = {
			0: 14,
			1: 2,
			2: 4,
			3: 6,
			4: 8,
			5: 10,
			6: 12
		};
		const dailyMenu = $('#weekly.menu')
			.find(`tr:nth-child(${dataTableMapping[date.getDay()]})`)
			.html();

		return dailyMenu
			.split('<br>')
			.map(el => el.trim())
			.map(el => striptags(el))
			.map(el => el.replace(/[\n\t]/g, ''))
			.map(el => he.decode(el));
	}
};
