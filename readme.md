# daily-menu [![Build Status](https://travis-ci.org/wolfika/daily-menu.svg?branch=master)](https://travis-ci.org/wolfika/daily-menu)

> Scraper utility tool to fetch daily menus around the [Yco](https://y-collective.com/) office.


## Install

```
$ npm install daily-menu
```


## Usage

```js
const dailyMenu = require('daily-menu');

dailyMenu()
	.then(results => {
	   console.log(results); //=> array of daily restaurant offers 
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

## CLI

```
$ npm install --global daily-menu
```

```
$ daily-menu
```

Typing this command, display the current restaurant offers in a table.

## List of supported restaurants

This utility is currently capable of retrieving offers from these restaurants:

* [István Pince Borozó & Étterem](https://www.facebook.com/istvanpince/)
* [Fiáker Étterem](http://www.fiakeretterem.hu/)


## License

MIT © [Máté Farkas](http://wolfika.eu)
