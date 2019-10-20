import test from 'ava';
import restaurant from '../../restaurants/trafik';

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
	const exampleBody = `<div class="container"> <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 paddingTop "> <h2>2019-10-07 Hétfő</h2> <h5>Tejszínes limettás csirkeraguleves<br><br>Csőben sült brokkoli rukkola ágyon<br>Fűszeres csirkemell sajtmártásban jázmin rizzsel<br>Sertéspörkölt galuskával és házi káposztasalátával<br><br>Kakaós csiga<br></h5> </div><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 paddingTop "> <h2>2019-10-08 Kedd</h2> <h5>Zöldborsókrémleves<br><br>Egészben sült tarja hagymás paradicsomos mártásban krumplipürével<br>Joghurtos csirkecombfilé zöldséges bulgurral<br>Zöldbabfőzelék grillkolbásszal<br><br>Brownie málnahabbal<br></h5> </div><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 paddingTop currentDay"> <h2>2019-10-09 Szerda</h2> <h5>Kolbászos lencseleves<br><br>Mediterrán csirkemell rösztivel és salátával<br>Rakott carbonara parmezánnal<br>Rántott karfiol rizzsel és tartárral<br><br>Mézes - barackos pohárkrém<br></h5> </div><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 paddingTop "> <h2>2019-10-10 Csütörtök</h2> <h5>Francia hagymaleves<br><br>Cézársaláta krutonnal és parmezánnal<br>Citromos tilápia édesburgonyapürével<br>Juhtúrós csülkös sztrapacska<br><br>Almás pite vanília sodóval<br></h5> </div><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 paddingTop "> <h2>2019-10-11 Péntek</h2> <h5>Marhagulyás<br><br>Spenótos koktélparadicsomos lasagne<br>Sült csirkecomb jázminrizzsel és salátával<br>Zöld fűszeres sertésoldalas héjában sült krumplival és coleslaw-val<br><br>Epres - túrós rétes<br></h5> </div></div>`;

	const dailyMenu = restaurant.getMenu(exampleBody, new Date('2019-10-09'));

	t.truthy(dailyMenu);
	t.true(Array.isArray(dailyMenu));
	t.truthy(dailyMenu.length);
});
