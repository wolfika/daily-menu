const cheerio = require('cheerio');
const he = require('he');

module.exports = {
	name: 'Fiáker Étterem',
	url: 'http://www.fiakeretterem.hu/category/heti-menu/',
	getMenu: (body, date = new Date()) => {
		const $ = cheerio.load(body);
		let dailyMenu = $('.item')
			.filter((index, element) => $(element).find(`.date:contains('${date.getDate()}')`).length)
			.find('.text p')
			.text();

		dailyMenu = dailyMenu
			.split(/Leves : |A menü : |B menü : /)
			.map(el => el.trim());

		dailyMenu.shift();

		return dailyMenu;
	}
};

