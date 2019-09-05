const cheerio = require('cheerio');
const he = require('he');
const striptags = require('striptags');

module.exports = {
	name: 'Rundó Söröző - Étterem',
	url: 'http://rundo.hu',
	getMenu: (body, date = new Date()) => {
		const $ = cheerio.load(body);
		const dailyMenu = $('#content2')
			.text()
			.replace(/[\n\t]/g,'')
			.replace(/Heti ajánlat letöltése/g,'')
			.replace(/Tekintse meg étlapunkat!/g,'Egyelőre nincs elérhető menü!');

		return dailyMenu
			.split(/[AB]/)
			.map(el => el.trim())
			.map(el => he.decode(el));
	}
};
