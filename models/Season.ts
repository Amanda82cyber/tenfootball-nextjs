export interface Season {
	current: boolean,
	end: string,
	start: string,
	year: string,
}

export interface Seasons {
	seasons: Season[],
}