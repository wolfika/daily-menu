const cheerio = require('cheerio');
const he = require('he');
const striptags = require('striptags');

module.exports = {
	name: 'Bohémia Sörkonyha',
	url: 'https://www.facebook.com/pg/bohemia.sorkonyha/posts/?ref=page_internal',
	getMenu: body => {
		try {
			const $ = cheerio.load(body);
			const separators = ['<br>', '<p>', '</div>'];
			const dailyMenu = $('.userContent').filter((i, e) => {
				return e.children.length;
			}).eq(0).html();

			return dailyMenu
				.split(new RegExp(separators.join('|'), 'g'))
				.map(el => striptags(el))
				.map(el => el.trim())
				.map(el => el.replace(/\.\.\./g, ''))
				.map(el => he.decode(el));
		} catch (e) {
			return 'Hiba történt a begyűjtés során..';
		}
	}
};
