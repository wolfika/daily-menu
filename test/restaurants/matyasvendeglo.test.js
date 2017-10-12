import test from 'ava';
import restaurant from '../../restaurants/matyasvendeglo';

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
	const exampleBody = `<div id="menulist"><table class="menu" id="weekly"><tbody><tr><td class="title" colspan="2"> <span>Hétfö</span></td></tr><tr><td> Paradicsomleves								<br></td><td> Lecsós virsli tarhonyával vagy Szecsuani csirke rizzsel								<br>Medvehagymás körözöttel töltött sertésborda, vegyes köret, káposztasaláta</td></tr><tr><td class="title" colspan="2"> <span>Kedd</span></td></tr><tr><td> Húsleves tésztával, zöldséggel								<br></td><td> Lencsefőzelék rostonsült, füstölt tarjával vagy Vadas marha spagettivel								<br>Rántott gomba, rizs, tartár</td></tr><tr><td class="title" colspan="2"> <span>Szerda</span></td></tr><tr><td> Kolbászos bableves								<br>Csurgatott tojásleves</td><td> Túrós csusza tepertővel vagy Szilvás gombóc vagy Darás metélt lekvárral								<br>Sertésmáj rántva, burgonyapüré, tejfölös uborkasaláta</td></tr><tr><td class="title" colspan="2"> <span>Csütörtök</span></td></tr><tr><td> Magyaros burgonyaleves								<br></td><td> Csikós tokány, csavart tészta, paprikasaláta vagy Rántott sajt, rizs, tartár								<br>Töltött csirkecomb, zöldséges rizs, paprikasaláta</td></tr><tr><td class="title" colspan="2"> <span>Péntek</span></td></tr><tr><td> Zöldborsóleves								<br></td><td> Bácskai rizses hús vagy Kolbászos rakott burgonya, kovászos uborka vagy Rántott csirkemell, balzsamecetes saláta, krokett								<br>Extra ajánlat: Zöldborsóleves : Harcsafilé rántva, majonézes burgonyasaláta 1190.- Ft</td></tr><tr><td class="title" colspan="2"> <span>Szombat</span></td></tr><tr><td> <br></td><td> <br></td></tr><tr><td class="title" colspan="2"> <span>Vasárnap</span></td></tr><tr><td> ZÁRVA								<br></td><td> <br></td></tr></tbody></table><h3>A menü ára: 980,- Ft</h3><h3>A hétvégi menü ára: 1290,- Ft</h3><h3>Megrendelés: 06-70/6041797, 06-70/6041493</h3></div>`;

	const dailyMenu = restaurant.getMenu(exampleBody, new Date('2017-10-12'));

	t.truthy(dailyMenu);
	t.true(Array.isArray(dailyMenu));
	t.truthy(dailyMenu.length);
});
