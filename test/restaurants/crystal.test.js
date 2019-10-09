import test from 'ava';
import restaurant from '../../restaurants/crystal';

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
	const exampleBody = `<div id="hetimenu_content"> <h1>Heti menü</h1> <p> Étel választékunkban vannak állandó ételek: levesek, előételek, grillezett húsok, ételkülönlegességek és idény szerinti ételek. A konyhában szakácsaink a reform életmód kedvelt alapanyagait is használják ételeink elkészítésénél. </p><h2>Házhozszállítás: 06 30 590 6001</h2> <p> A napi menü házhozszállítása esetén kérnénk a rendelést 11h-ig telefonon leadni.<br>Ebben az esetben vállaljuk legkésőbb 13h-ig a megrendelt étel kiérkezését.<br>Házhozszállítás esetén 50 Ft/étel csomagolási díjat számítunk fel.<br>Nem szállítunk: Pécsbánya, Szabolcsfalu, Pécsújhegy, Postavölgy, Nagyárpád. </p><p> Válasszon heti kínálatunkból! </p><table border="0"> <tbody><tr> <td class="nap">Hétfő</td><td class="kaja">Zöldségleves<br>Baconos-zöldborsós csirkemellragu, párolt rizs, csemege uborka</td><td class="ar">1.180,- Ft</td></tr><tr> <td class="nap">Kedd</td><td class="kaja">Zöldborsó krémleves<br>Brassói aprópecsenye, ecetes almapaprika</td><td class="ar">1.180,- Ft</td></tr><tr> <td class="nap">Szerda</td><td class="kaja">Paradicsomleves<br>Parajos-tejfölös-sajtos tepsis csirkemell, párolt rizs, friss kevert saláta szüz olívaolaj<br><br></td><td class="ar">1.180,- Ft</td></tr></tbody></table></div>`;

	const dailyMenu = restaurant.getMenu(exampleBody, new Date('2019-10-09'));

	t.truthy(dailyMenu);
	t.true(Array.isArray(dailyMenu));
	t.truthy(dailyMenu.length);
});
