const axios = require('axios');
const dailyMenu = require('.');

dailyMenu()
	.then(results => {
		const payload = [];

		payload.push({
			type: 'section',
			text: {
				type: 'mrkdwn',
				text: 'Íme a közeli éttermek mai kínálata:'
			}
		});

		results.forEach(restaurant => {
			payload.push({
				type: 'divider'
			});

			payload.push({
				type: 'section',
				text: {
					type: 'mrkdwn',
					text: Array.isArray(restaurant.items) ? restaurant.items.join('\n') : restaurant.items
				}
			});

			payload.push({
				type: 'context',
				elements: [
					{
						type: 'image',
						image_url: 'https://api.slack.com/img/blocks/bkb_template_images/tripAgentLocationMarker.png', // eslint-disable-line camelcase
						alt_text: 'Location Pin Icon' // eslint-disable-line camelcase
					},
					{
						type: 'plain_text',
						emoji: true,
						text: restaurant.name
					}
				]
			});
		});

		console.info('data prepared');

		axios.post('https://hooks.slack.com/services/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', {
			blocks: payload
		})
			.then(res => {
				console.info(`statusCode: ${res.status}`);
			})
			.catch(error => {
				console.error(error);
			});
	})
	.catch(err => {
		console.error(err);
	});
