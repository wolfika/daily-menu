const cheerio = require('cheerio');

module.exports = {
	name: 'Fiáker Étterem',
	url: 'http://www.fiakeretterem.hu/category/heti-menu/',
	getMenu: (body, date = new Date()) => {
		const $ = cheerio.load(body);
		let dailyMenu = $(`.item:nth-of-type(${date.getDay()})`)
			.find('.text p')
			.text();

		dailyMenu = dailyMenu
			.split(/Leves : |A menü : |B menü : /)
			.map(el => el.trim());

		dailyMenu.shift();

		return dailyMenu;
	}
};

