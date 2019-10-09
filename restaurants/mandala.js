module.exports = {
	name: 'Mandala Étterem',
	url: 'https://www.facebook.com/mandalaetterem/',
	getMenu: (body, date = new Date()) => {
		const hetimenu = [
			'NINCS MENÜ',
			'Őszi karalábéleves petrezselyemzölddel\nSütőtökös burgonya ragu zöldségfasírttal',
			'Tejszínes burgonyakrémleves póréhagymával\nTöltött tortilla körtés vöröskáposztával ',
			'Kelbimbós gulyásleves\nÍnyenc zöldséges töltött „csiga” krémes sárgaborsóval',
			'Lúgosító zöldségleves\nBolognai spagetti reszelt sajttal/ vegán parmezánnal'
		];

		return hetimenu[date.getDay() - 1];
	}
};
