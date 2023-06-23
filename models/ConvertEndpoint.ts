export interface ConvertEndpoint {
	query: {
		from: string,
		to: string,
		amount: number,
	},
	info: {
		rate: number,
	},
	date: string,
	result: number,
}