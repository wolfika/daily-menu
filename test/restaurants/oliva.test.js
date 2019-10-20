import test from 'ava';
import restaurant from '../../restaurants/oliva';

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
	const exampleBody = `<div data-testid="post_message" class="_5pbx userContent _3576" data-ft="{&quot;tn&quot;:&quot;K&quot;}" id="js_9c"><div id="id_5d9e136d7eb5d8b83926904" class="text_exposed_root text_exposed"><p>Mai menü:<br> - Zöldségkrémleves levesgyönggyel <br> - Rántott csirkemell, burgonyapürével, csemege uborkával</p><p> B menü:<span class="text_exposed_hide">...</span><span class="text_exposed_show"><br> - Zöldbabfőzelék fasírttal </span></p><div class="text_exposed_show"><p> <span class="_5mfr"><span class="_6qdm" style="height: 16px; width: 16px; font-size: 16px; background-image: url(&quot;https://static.xx.fbcdn.net/images/emoji.php/v9/tfe/1.5/16/203c.png&quot;)">‼️</span></span><span class="_5mfr"><span class="_6qdm" style="height: 16px; width: 16px; font-size: 16px; background-image: url(&quot;https://static.xx.fbcdn.net/images/emoji.php/v9/tfe/1.5/16/203c.png&quot;)">‼️</span></span><span class="_5mfr"><span class="_6qdm" style="height: 16px; width: 16px; font-size: 16px; background-image: url(&quot;https://static.xx.fbcdn.net/images/emoji.php/v9/tfe/1.5/16/203c.png&quot;)">‼️</span></span><span class="_5mfr"><span class="_6qdm" style="height: 16px; width: 16px; font-size: 16px; background-image: url(&quot;https://static.xx.fbcdn.net/images/emoji.php/v9/tfe/1.5/16/203c.png&quot;)">‼️</span></span><br> Ne feledd! Napi menünket kérheted házhozszállítással is a Netpincéren keresztül <span class="_5mfr"><span class="_6qdm" style="height: 16px; width: 16px; font-size: 16px; background-image: url(&quot;https://static.xx.fbcdn.net/images/emoji.php/v9/tfe/1.5/16/203c.png&quot;)">‼️</span></span><span class="_5mfr"><span class="_6qdm" style="height: 16px; width: 16px; font-size: 16px; background-image: url(&quot;https://static.xx.fbcdn.net/images/emoji.php/v9/tfe/1.5/16/203c.png&quot;)">‼️</span></span><span class="_5mfr"><span class="_6qdm" style="height: 16px; width: 16px; font-size: 16px; background-image: url(&quot;https://static.xx.fbcdn.net/images/emoji.php/v9/t10/1.5/16/1f917.png&quot;)">🤗</span></span><span class="_5mfr"><span class="_6qdm" style="height: 16px; width: 16px; font-size: 16px; background-image: url(&quot;https://static.xx.fbcdn.net/images/emoji.php/v9/te8/1.5/16/1f348.png&quot;)">🍈</span></span></p></div><span class="text_exposed_hide"> <span class="text_exposed_link"><a class="see_more_link" onclick="var func = function(e) { e.preventDefault(); }; var parent = Parent.byClass(this, &quot;text_exposed_root&quot;); if (parent &amp;&amp; parent.getAttribute(&quot;id&quot;) == &quot;id_5d9e136d7eb5d8b83926904&quot;) { CSS.addClass(parent, &quot;text_exposed&quot;); Arbiter.inform(&quot;reflow&quot;); }; func(event); " href="/olivaetterempecs/posts/2661484673911338" data-ft="{&quot;tn&quot;:&quot;e&quot;}"><span class="see_more_link_inner">See More</span></a></span></span></div></div>`;

	const dailyMenu = restaurant.getMenu(exampleBody, new Date('2019-10-09'));

	t.truthy(dailyMenu);
	t.true(Array.isArray(dailyMenu));
	t.truthy(dailyMenu.length);
});
