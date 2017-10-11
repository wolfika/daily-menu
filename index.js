const path = require('path');
const got = require('got');
const requireAll = require('require-all');

const restaurants = requireAll({
	dirname: path.join(__dirname, 'restaurants'),
	filter: /(.*)\.js$/
});

module.exports = () => {
	const promises = Object.values(restaurants).map(restaurant => {
		return got(restaurant.url)
			.then(response => {
				return {
					name: restaurant.name,
					date: new Date(),
					items: restaurant.getMenu(response.body)
				};
			})
			.catch(err => {
				console.error(`Unexpected error occured while attempting to scrape ${restaurant.url}`);
				console.error(err);
			});
	});

	return Promise.all(promises);
};
