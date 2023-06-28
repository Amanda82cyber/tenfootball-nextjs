import { Team } from "./StandingsResponse";

export interface League {
	id: number,
	name: string,
	logo: string,
	country: string,
	flag: string,
	season: number,
}

export interface Statistic {
	team: Team,
	league: League,
	cards: {
		yellow: number,
		red: number,
	},
	dribbles: {
		success: number,
	}
	fouls: { // faltas
		committed: number,
		drawn: number,
	},
	games: {
		appearences: number, // qtd jogos
		captain: boolean,
		position: string,
	}
	goals: {
		total: number,
		saves: number, // goleiro
	}
	passes: {
		total: number,
	}
}

export interface Player {
	id: number,
	age: number,
	name: string,
	injured: boolean, // lesionado
	photo: string,
	nationality: string,
}

export interface PlayerStatistics {
	player: Player,
	statistics: Statistic[],
}