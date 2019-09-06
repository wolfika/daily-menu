#!/usr/bin/env node
const Table = require('tty-table');
const cliSpinners = require('cli-spinners');
const ora = require('ora');
const dailyMenu = require('.');

const spinner = ora('Napi menük letöltése');
spinner.spinner = cliSpinners.bouncingBar;
spinner.color = 'green';
spinner.start();

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
			table.push([restaurant.name, Array.isArray(restaurant.items) ? restaurant.items.join('\n') : restaurant.items]);
		});

		spinner.succeed('Jó étvágyat!');

		console.log(table.render());
	})
	.catch(err => {
		spinner.fail('Valami hiba történt :(');
		console.error(err);
	});
