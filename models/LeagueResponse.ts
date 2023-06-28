export interface Country {
	name: string,
	code: string,
	flag: string,
}

export interface League {
	id: number,
	logo: string,
	name: string,
	type: string,
}

export interface Season {
	current: boolean,
	end: string,
	start: string,
	year: string,
}

export interface Leagues {
	country: Country,
	league: League,
	seasons: Season[],
}