const cheerio = require('cheerio');
const he = require('he');

module.exports = {
	name: 'Trafik',
	url: 'https://kinotrafik.hu/ebed',
	getMenu: (body, date = new Date()) => {
		try{
			const $ = cheerio.load(body);
			let dailyMenu = $('.currentDay h5')
				.html();

			dailyMenu = dailyMenu
				.replace('<br><br>', '<br>')
				.split('<br>')
				.map(el => el.trim())
				.map(el => he.decode(el));

			dailyMenu.pop();

			return dailyMenu;
		} catch (e) {
			return 'Hiba történt a begyűjtés során..';
		}
	}
};
