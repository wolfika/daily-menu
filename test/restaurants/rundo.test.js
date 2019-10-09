import test from 'ava';
import restaurant from '../../restaurants/rundo';

test('returns an object', t => {
	t.true(typeof restaurant === 'object');
});

test('has a name property', t => {
	t.truthy(restaurant.name);
});

test('has an url property', t => {
	t.truthy(restaurant.url);
});

test('has a getMenu method', t => {
	t.truthy(restaurant.getMenu);
	t.true(typeof restaurant.getMenu === 'function');
});

test('getMenu() given the http response body as argument, returns a non-empty array of the daily menu items', t => {
	const exampleBody = `<span class="mycontent" id="content2"><a href="dl.php" style="margin-right:40px;font-size:12px;text-decoration:underline">Heti ajánlat letöltése</a><br><br>Tekintse meg étlapunkat!<br><br><br></span>`;

	const dailyMenu = restaurant.getMenu(exampleBody, new Date('2019-10-09'));

	t.truthy(dailyMenu);
	t.true(Array.isArray(dailyMenu));
	t.truthy(dailyMenu.length);
});
