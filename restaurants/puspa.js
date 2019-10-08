const cheerio = require('cheerio');
const he = require('he');
const striptags = require('striptags');

module.exports = {
	name: 'Puspa Konyhája',
	url: 'http://www.puspakonyhaja.hu',
	getMenu: (body, date = new Date()) => {
		try {
			const $ = cheerio.load(body);

			const dailyMenu = $('body center > table > tbody > tr:nth-child(3)')
				.find(`td:nth-child(${date.getDay()})`)
				.html();

			return dailyMenu
				.split('<br>')
				.map(el => el.trim())
				.map(el => striptags(el))
				.map(el => el.replace(/[\n\t]/g, ''))
				.map(el => he.decode(el));
		} catch (e) {
			return 'Jelenleg nem elérhető a menü...';
		}
	}
};
