export interface Team {
	id: number,
	name: string,
	logo: string,
}

export interface generalData {
	played: number,
	win: number,
	draw: number, // empate
	lose: number,
	goals: {
		for: number,
		against: number, // gols sofridos
	}
}

export interface Standing {
	rank: number,
	team: Team,
	points: number,
	goalsDiff: number, // Saldo de gols
	all: generalData,
}

export interface LeagueStandings {
	id: number,
	name: string,
	country: string,
	logo: string,
	flag: string,
	season: number,
	standings: [Standing[]],
}

export interface StandingsResponse {
	league: LeagueStandings,
}
