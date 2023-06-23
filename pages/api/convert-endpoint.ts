import { ConvertEndpoint } from '@/models/ConvertEndpoint';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const value = req.query.value;
	const from = req.query.from;
	const to = req.query.to;
	const date = req.query.date;

	if (!value) {
		return res.status(400).json({ error: "Por favor, digite um valor para converter!" });
	}

	const response = await fetch(`http://data.fixer.io/api/convert?access_key=${process.env.FIXER_API_KEY}&from=${from}&to=${to}&amount=${value}&date=${date}`);
	const convert: ConvertEndpoint = await response.json();

	res.status(200).json(convert);
}