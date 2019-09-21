const cheerio = require('cheerio');
const he = require('he');
const striptags = require('striptags');

module.exports = {
	name: 'Szabadkikötő',
	url: 'https://www.facebook.com/SzabadKikotoPecs',
	getMenu: (body, date = new Date()) => {
		// try {
		// 	const $ = cheerio.load(body);
		// 	const separators = ['<br>', '<p>', '</div>'];
		// 	const dailyMenu = $('.userContent').filter((i, e) => {
		// 		return e.children.length;
		// 	}).eq(0).html();
		//
		// 	return dailyMenu
		// 		.split(new RegExp(separators.join('|'), 'g'))
		// 		.map(el => striptags(el))
		// 		.map(el => el.trim())
		// 		.map(el => el.replace(/\.\.\./g, ''))
		// 		.map(el => he.decode(el));
		// } catch (e) {
		// 	return 'Hiba történt a begyűjtés során..';
		// }

		return 'nincs heti menü megosztva';

		const hetimenu = [
			'párolt zöldséges subji, jázmin rizzsel és paradicsom chatnival',
			'lencsefőzelék, répafasirttal',
			'chilli sin carne, házi lepénykenyérrel',
			'paradicsomos-cukkinis penne',
			'tofus spenót, kukoricás jázmin rizzsel',
		];

		return hetimenu[date.getDay() -1];
	}
};
