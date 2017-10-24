import test from 'ava';
import restaurant from '../../restaurants/grano';

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
	const exampleBody = `<div id="ajanlat" class="ajanlatbox" onclick="csere_ajanlat('ajanlat');" style="display: block;"><div><h1>OKTÓBER 10.<span>Hétfő</span></h1><h2>Karfiolkrémleves, kemencés ricottás tészta húsraguval sült paprikával</h2><h3>1.100 Ft</h3></div><div><h1>OKTÓBER 11.<span>Kedd</span></h1><h2>mustáros burgonyaleves ruccola pesztóval, mézes szezámos csirkemell falatok citrusos salátával</h2><h3>1.100 Ft</h3></div><div><h1>OKTÓBER 12.<span>Szerda</span></h1><h2>borsóleves csipetkével, rántott sertésborda sült paprikás rizzsel</h2><h3>1.100 Ft</h3></div><div><h1>OKTÓBER 13.<span>Csütörtök</span></h1><h2>pesztós zöldségleves, gombás mozzarrellás csirkemell steak burgonyával</h2><h3>1.100 Ft</h3></div><div><h1>OKTÓBER 14.<span>Péntek</span></h1><h2>babgulyás, daramorzsa barack raguval</h2><h3>1.100 Ft</h3></div></div>`;

	const dailyMenu = restaurant.getMenu(exampleBody, new Date('2017-10-13'));

	t.truthy(dailyMenu);
	t.true(Array.isArray(dailyMenu));
	t.truthy(dailyMenu.length);
});
