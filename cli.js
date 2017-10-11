#!/usr/bin/env node
const Table = require('tty-table');
const dailyMenu = require('.');

dailyMenu()
	.then(results => {
		const table = Table([
			{
				alias: 'Étterem',
				align: 'left',
				paddingTop: 1,
				paddingRight: 1,
				paddingBottom: 1,
				paddingLft: 1,
				width: 30
			},
			{
				alias: 'Napi ajánlat',
				align: 'left',
				paddingTop: 1,
				paddingRight: 1,
				paddingBottom: 1,
				paddingLeft: 1,
				width: 70
			}
		]);

		results.forEach(restaurant => {
			table.push([restaurant.name, restaurant.items.join('\n')]);
		});

		console.log(table.render());
	})
	.catch(err => {
		console.error(err);
	});
