import { Standing } from "@/models/StandingsResponse";
import { useState } from "react";
import { Container, Form, Image } from "react-bootstrap";
import DataTable from "react-data-table-component";

interface LeagueStandingsTableProps {
	standings: Standing[],
	leagueId: number,
	season: number,
}

const LeagueStandingsTable = ({ standings, leagueId, season }: LeagueStandingsTableProps) => {
	const columns = [
		{
			name: "Rank",
			selector: (row: Standing) => row.rank,
			sortable: true,
			width: "10%",
		},
		{
			name: "Time",
			cell: (row: Standing) => <div><Image src={row.team.logo} width="9%" alt={"Img-" + row.team.id} /> {row.team.name}</div>,
		},
		{
			name: "Pontos",
			selector: (row: Standing) => row.points,
			sortable: true,
			width: "10%",
		},
		{
			name: "Vitórias",
			selector: (row: Standing) => row.all.win,
			width: "10%",
		},
		{
			name: "Empates",
			selector: (row: Standing) => row.all.draw,
			width: "10%",
		},
		{
			name: "Derrotas",
			selector: (row: Standing) => row.all.lose,
			width: "10%",
			sortable: true,
		},
		{
			name: "Saldo de Gols",
			selector: (row: Standing) => row.goalsDiff,
			width: "10%",
		},
		{
			name: "Gols Marcados",
			selector: (row: Standing) => row.all.goals.for,
			width: "10%",
		},
		{
			name: "Gols Sofridos",
			selector: (row: Standing) => row.all.goals.against,
			width: "10%",
		},
	];

	const data: Standing[] = [];

	standings.map((standing: Standing) => (
		data.push(standing)
	));

	const [records, setRecords] = useState(data);

	function handleFilter(event: React.ChangeEvent<HTMLInputElement>) {
		const newData = data.filter(row => {
			return row.team.name.toLowerCase().includes(event.target.value.toLowerCase());
		});

		setRecords(newData);
	}

	function openTeam(event: Standing) {
		window.location.href = `/team/${event.team.id}?leagueId=${leagueId}&season=${season}`;
	}

	return (
		<Container className="mt-3">
			<Form.Control
				placeholder="Pesquise um time"
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
				onRowClicked={openTeam}
			></DataTable>
		</Container>
	);
}

export default LeagueStandingsTable;