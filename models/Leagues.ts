import { Country } from "./Country";
import { League } from "./League";
import { Season } from "./Season";

export interface Leagues {
	country: Country,
	league: League,
	seasons: Season[],
}

export interface LeaguesResponse {
	leagues: Leagues[],
}