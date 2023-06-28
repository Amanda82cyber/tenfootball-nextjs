import { Leagues } from "@/models/Leagues";
import { Container, Form, Image } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { useState } from 'react';

interface LeaguesTableProps {
	leagues: Leagues[];
}

const LeaguesTable = ({ leagues }: LeaguesTableProps) => {
	const columns = [
		{
			name: "Logo",
			cell: (row: Leagues) => <Image src={row.league.logo} width="10%" alt={"Img-" + row.league.id} />,
		},
		{
			name: "Nome",
			selector: (row: Leagues) => row.league.name,
			sortable: true,
		},
		{
			name: "Temporada",
			selector: (row: Leagues) => row.seasons[0].year,
			sortable: true,
		},
		{
			name: "País",
			cell: (row: Leagues) => <div><Image src={row.country.flag} width="10%" alt={"Img-country-" + row.league.id} /> {row.country.code}</div>,
		},
	];

	const data: Leagues[] = [];

	leagues.map((league: Leagues) => (
		data.push(league)
	));

	const [records, setRecords] = useState(data);

	function handleFilter(event: React.ChangeEvent<HTMLInputElement>) {
		const newData = data.filter(row => {
			return row.league.name.toLowerCase().includes(event.target.value.toLowerCase()) || row.seasons[0].year == event.target.value || row.country.code?.includes(event.target.value.toUpperCase());
		});

		setRecords(newData);
	}

	function openLeague(event: Leagues) {
		window.location.href = '/league/' + event.league.id;
	}

	return (
		<Container className="mt-3">
			<Form.Control
				placeholder="Pesquisa por nome/temporada da liga ou sigla do país"
				size="sm"
				className="mb-3"
				onChange={handleFilter}
			/>

			<DataTable
				columns={columns}
				data={records}
				pagination
				responsive
				dense
				theme="dark"
				className="data-table"
				onRowClicked={openLeague}
			></DataTable>
		</Container>
	);
}

export default LeaguesTable;