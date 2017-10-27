# daily-menu [![Build Status](https://travis-ci.org/wolfika/daily-menu.svg?branch=master)](https://travis-ci.org/wolfika/daily-menu)

> Scraper utility tool to fetch daily menus around the [Yco](https://y-collective.com/) office.

![daily-menu screencast](/assets/screencast.gif)


## Prerequisites

* Node.js >=7
* npm


## Install

```
$ npm install daily-menu
```


## Usage

```js
const dailyMenu = require('daily-menu');

dailyMenu()
	.then(results => {
	   console.log(results); //=> array (or string) of daily restaurant offers
	});
```


## API

### dailyMenu()

Returns a `Promise`, which resolves to the scraped restaurant offers. The result object looks something like this:

```json
[
  {
    "name": "Foo Bar",
    "date": "2017-10-11T20:34:42.086Z",
    "items": [
      "Paradicsomleves",
      "Burgonyafőzelék, feltét",
      "Fűszeres csirkemell, salátaágyon",
      "Pirított sertésmáj, tört burgonya"
    ]
  }
]
```

`items` is either a string or an array, depending on whether the restaurant provider was capable of parsing the HTML markup retrieved by the scraped.


## CLI

```
$ npm install --global daily-menu
```

```
$ daily-menu
```

Typing this command will result in displaying the current restaurant offers in a table.

## List of supported restaurants

This utility is currently capable of retrieving offers from these restaurants:

* [István Pince Borozó & Étterem](https://www.facebook.com/istvanpince/)
* [Fiáker Étterem](http://www.fiakeretterem.hu/)
* [Mátyás Király Vendéglö](http://www.matyasvendeglo.hu/)
* [Piazza del Grano](http://www.grano.hu/)
* [Bohémia Sörkonyha](http://www.bohemiasorkonyha.hu/)

## License

MIT © [Máté Farkas](http://wolfika.eu)
