const cheerio = require('cheerio');
const he = require('he');

module.exports = {
	name: 'Fiáker Étterem',
	url: 'http://www.fiakeretterem.hu/category/heti-menu/',
	getMenu: (body, date = new Date()) => {
		const $ = cheerio.load(body);
		const dailyMenu = $('.item')
			.filter((index, element) => $(element).find(`.date:contains('${date.getDate()}')`).length)
			.find('.text p')
			.html();

		return he.decode(dailyMenu).replace(/<br>\n\s<br>/g, '<br>')
			.split('<br>')
			.map(el => el.trim())
			.map(el => el.replace(/Leves :/g, ''))
			.map(el => el.replace(/A menü :/g, ''))
			.map(el => el.replace(/B menü :/g, ''));
	}
};

