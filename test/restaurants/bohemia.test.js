import test from 'ava';
import restaurant from '../../restaurants/bohemia';

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
	const exampleBody = `<div data-testid="post_message" class="_5pbx userContent _3576" data-ft="{&quot;tn&quot;:&quot;K&quot;}" id="js_8f"><div id="id_5d9e0f996f7880c78934626" class="text_exposed_root text_exposed"><p>Heti ajánlatunk: <span class="_5mfr"><span class="_6qdm" style="height: 16px; width: 16px; font-size: 16px; background-image: url(&quot;https://static.xx.fbcdn.net/images/emoji.php/v9/tce/1.5/16/1f481_200d_2642.png&quot;)">💁‍♂️</span></span><br> (szerdától - péntekig, 12.00-16.00-ig)</p><p> - Thai sütőtök krémleves </p><span class="text_exposed_hide">...</span><div class="text_exposed_show"><p> - Csokoládé leves mentás epervelővel, tejszínhabbal </p><p> - Paprikás chips bundában rántott sertéskaraj karamellizált hagymás - sajtos tejföllel, cajun fűszeres burgonyával</p></div><span class="text_exposed_hide"> <span class="text_exposed_link"><a class="see_more_link" onclick="var func = function(e) { e.preventDefault(); }; var parent = Parent.byClass(this, &quot;text_exposed_root&quot;); if (parent &amp;&amp; parent.getAttribute(&quot;id&quot;) == &quot;id_5d9e0f996f7880c78934626&quot;) { CSS.addClass(parent, &quot;text_exposed&quot;); Arbiter.inform(&quot;reflow&quot;); }; func(event); " href="/bohemia.sorkonyha/posts/1174943369363600" data-ft="{&quot;tn&quot;:&quot;e&quot;}"><span class="see_more_link_inner">See More</span></a></span></span></div></div>`;

	const dailyMenu = restaurant.getMenu(exampleBody, new Date('2019-10-09'));

	t.truthy(dailyMenu);
	t.true(Array.isArray(dailyMenu));
	t.truthy(dailyMenu.length);
});
