import test from 'ava';
import restaurant from '../../restaurants/puspa';

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
	const exampleBody = `<body leftmargin="0" topmargin="0" rightmargin="0" marginwidth="0" marginheight="0" background="pics/bck2.jpg" style="background-position: center top; background-repeat: no-repeat;"><table align="center" cellspacing="0" cellpadding="0" width="800"> <tbody> <tr><td><div align="CENTER"><map name="map1"><area href="index.php" alt="Az étteremről" title="Az étteremről" shape="RECT" coords="200,255,361,281"><area href="etlap.php" alt="Étlap" title="Étlap" shape="RECT" coords="383,255,451,281"><area href="kontakt.html" alt="Elérhetőség" title="Étlap" shape="RECT" coords="471,255,585,281"></map><img src="pics/ures.gif" border="0" usemap="#map1"><br></div></td></tr><tr><td><table><tbody><tr><td width="60"></td><td valign="top" width="323"><img src="pics/kep01.jpg" border="0"></td><td valign="top" width="487"><div align="justify">A Puspa konyhája lakto-vegetáriánus étterem! A vegetáriánus szó a latin vegetus szóból származik, melynek jelentése: egészséges, friss élettel teli. A homo vegetus kifejezés a testben és lélekben erős embert jelöl. Szóval a vegetus szó egy testileg és erkölcsileg kiegyensúlyozott életmódra utal, vagyis nem többre, mint zöldségekben és gyümölcsökben bővelkedő étrendben. Éttermünkben tejtermékeket is használunk a főzés során. Ez a lakto-vegetáriánus életmód. A vegetáriánus életmód fontos lépés egy jobb, békésebb társadalom felé, hiszen a vegetáriánus olyan ember, aki megértette, hogy ahhoz hogy jól lakjon nem szükséges állatokat megölni. Ez a konyhatudományunknak az alapja. A fűszerekkel nem csupán az ételek ízét emeljük ki, hanem harmóniát teremtünk szervezetünkbe. Hiszen a fűszerek tudatos használatával az ételeink megfelelő emésztését és felszívódását biztosítjuk. Fontos szempontunk ezen kívül a külső és a belső tisztaság és a tudatosság, valamint a családias nyugodt légkör megteremtése.<br><br></div><center></center></td><td width="60"></td></tr></tbody></table></td></tr><tr><td><center><table width="700" border="1"><tbody><tr> <td width="140" valign="top"><b>Hétfő</b></td><td width="140" valign="top"><b>Kedd</b></td><td width="140" valign="top"><b>Szerda</b></td><td width="140" valign="top"><b>Csütörtök</b></td><td width="140" valign="top"><b>Péntek</b></td></tr><tr><td colspan="5" style="text-align:center;">Aktuális hét</td></tr><tr><td valign="top">10.7-11<br>Dhal leves<br>Hari-priya subji<br>Köles</td><td valign="top">Zöldség leves<br>Párolt subji<br>Mati</td><td valign="top">Sárgarépa krémleves<br>A.Puspa szelet<br>B.vegán:pakorák<br>Jázmin rizs<br>Szilva chatni</td><td valign="top">Paradicsom leves<br>Rakott kelkáposzta<br>Saláta</td><td valign="top">Bableves<br>A.túrógombóc<br>B.Puspa szelet<br>Jázmin rizs<br>Vegyes gyümölcs chatni</td></tr><tr><td colspan="5" style="text-align:center;">Következő hét</td></tr><tr><td valign="top">Menü ára:1500Huf<br><br><br></td><td valign="top">GLUTÉN ÉS LAKTÓZMENTES SABJIT IS KÉSZÍTÜNK!!!</td><td valign="top">Á la carte: <br>Párolt sült zöldségek wokban készítve, házisajt kockákkal:1450 Ft, rizs és chatni körettel:1650 Ft</td><td valign="top"></td><td valign="top"></td></tr></tbody></table>Ételeink lakto-vegetáriánusak. A menüváltoztatás jogát fenntartjuk! Webdizájn: Rokimanjaro Design</center></td></tr></tbody></table></body>`;

	const dailyMenu = restaurant.getMenu(exampleBody, new Date('2019-10-09'));

	t.truthy(dailyMenu);
	t.true(Array.isArray(dailyMenu));
	t.truthy(dailyMenu.length);
});
