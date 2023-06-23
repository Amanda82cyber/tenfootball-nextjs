import { ConvertEndpoint } from "@/models/ConvertEndpoint";
import { Symbol } from "@/models/Symbols";
import { useState, ChangeEvent } from "react";
import { Form } from "react-bootstrap";

interface FormConversionProps {
	symbols: Symbol[],
}

const FormConversion = ({ symbols }: FormConversionProps) => {
	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const formattedDay = day < 10 ? '0' + day : day;
	const formattedMonth = month < 10 ? '0' + month : month;
	const formattedDate = date.getFullYear() + '-' + formattedMonth + '-' + formattedDay;

	// Conversão
	const [ConversionResults, setConversionResults] = useState<ConvertEndpoint | null>(null);
	const [ConversionResultsLoading, setConversionResultsLoading] = useState(false);
	const [ConversionResultsLoadingIsError, setConversionResultsLoadingIsError] = useState(false);

	async function convertEachDigit(e: ChangeEvent) {
		const value = e.target.value;
		const selectFrom = document.querySelector('select[name="from"]');
		const optionFrom = selectFrom?.options[selectFrom?.selectedIndex].value;
		const selectTo = document.querySelector('select[name="to"]');
		const optionTo = selectTo?.options[selectTo?.selectedIndex].value;
		const date = document.querySelector('[name="date"]')?.value;

		if (value) {
			try {
				setConversionResults(null);
				setConversionResultsLoadingIsError(false);
				setConversionResultsLoading(true);
				const response = await fetch(`/api/convert-endpoint?value=${value}&from=${optionFrom}&to=${optionTo}&date=${date}`);
				const convert: ConvertEndpoint = await response.json();
				setConversionResults(convert);
			} catch (error) {
				console.error(error);
				setConversionResultsLoadingIsError(true);
			}
		}
	}

	return (
		<Form className="row gy-3">
			<Form.Group className="col-12 col-md-6" controlId="convertionForm.from">
				<Form.Label className="mb-0 required">De</Form.Label>
				<Form.Select name="from" required defaultValue="BRL">
					{symbols.map(symbol => (
						// eslint-disable-next-line react/jsx-key
						<option value={symbol.symbol} key={symbol.symbol}>
							{symbol.symbol} - {symbol.country}
						</option>
					))}
				</Form.Select>
			</Form.Group>

			<Form.Group className="col-12 col-md-6" controlId="convertionForm.to">
				<Form.Label className="mb-0 required">Para</Form.Label>
				<Form.Select name="to" required defaultValue="USD">
					{symbols.map(symbol => (
						// eslint-disable-next-line react/jsx-key
						<option value={symbol.symbol} key={symbol.symbol}>
							{symbol.symbol} - {symbol.country}
						</option>
					))}
				</Form.Select>
			</Form.Group>

			<Form.Group className="col-12 col-md-6" controlId="convertionForm.valueFrom">
				<Form.Label className="mb-0 required">Valor Para Converter</Form.Label>
				<Form.Control type="number" min="0" step="0.01" name="valueFrom" onChange={convertEachDigit} />
			</Form.Group>

			<Form.Group className="col-12 col-md-6" controlId="convertionForm.valueTo">
				<Form.Label className="mb-0">Valor Convertido</Form.Label>
				<Form.Control type="number" min="0" step="0.01" name="valueTo" disabled value={ConversionResults?.result} />
			</Form.Group>

			<Form.Group className="col-12 col-md-6" controlId="convertionForm.date">
				<Form.Label className="mb-0 required">Data</Form.Label>
				<Form.Control type="date" name="date" defaultValue={formattedDate} />
			</Form.Group>
		</Form>
	);
}

export default FormConversion;