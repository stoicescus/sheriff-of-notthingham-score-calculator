import { useState } from 'react';

import { getBaseTotal } from '../utils/utils';

const Scoreboard = ({ players, bonuses }) => {
	const [showDetails, setShowDetails] = useState(false);

	if (players.length === 0) return;

	const descendingSortedPlayers = [...players].sort((a, b) => {
		const totalA = getBaseTotal(a) + (bonuses[a.playerName] || 0);
		const totalB = getBaseTotal(b) + (bonuses[b.playerName] || 0);
		return totalB - totalA;
	});

	const topScore = getBaseTotal(descendingSortedPlayers[0]) + (bonuses[descendingSortedPlayers[0].playerName] || 0);

	const renderPlayersStats = () => {
		return descendingSortedPlayers.map((player, index) => {
			const baseTotal = getBaseTotal(player);
			const bonus = bonuses[player.playerName] || 0;
			const finalScore = baseTotal + bonus;
			const isWinner = finalScore === topScore;

			return (
				<tr key={player.playerName} className="divide-x divide-white text-center">
					<td className="px-4 py-2 font-semibold bg-black text-white">
						{player.playerName} {isWinner ? '👑' : ''}
					</td>
					{showDetails && (
						<>
							<td className="text-center bg-green-600 text-white">{player.apples.nr}</td>
							<td className="text-center bg-green-600 text-white">{player.cheese.nr}</td>
							<td className="text-center bg-green-600 text-white">{player.bread.nr}</td>
							<td className="text-center bg-green-600 text-white">{player.chickens.nr}</td>
							<td className="text-center bg-red-700 text-white">{player.pepper.nr}</td>
							<td className="text-center bg-red-700 text-white">{player.mead.nr}</td>
							<td className="text-center bg-red-700 text-white">{player.silk.nr}</td>
							<td className="text-center bg-red-700 text-white">{player.crossbows.nr}</td>
							<td className="text-center bg-yellow-500 text-white">{player.gold.nr}</td>
							<td className="text-center bg-green-700 text-white">{baseTotal}</td>
							<td className="text-center bg-green-700 text-white">{bonus}</td>
						</>
					)}
					<td className="text-center bg-green-800 text-white font-bold">{finalScore}</td>
				</tr>
			);
		});
	};

	const handleDetails = () => setShowDetails(!showDetails);

	return (
		<div className="scoreboard">
			<table className="table-auto min-w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
				<thead className="bg-black text-white text-sm uppercase tracking-wider">
					<tr className="divide-x divide-y divide-white text-center">
						<th className="px-4 py-2 text-left">Player</th>
						{showDetails && (
							<>
								<th className="px-4 py-2">Apples</th>
								<th className="px-4 py-2">Cheese</th>
								<th className="px-4 py-2">Bread</th>
								<th className="px-4 py-2">Chickens</th>
								<th className="px-4 py-2">Pepper</th>
								<th className="px-4 py-2">Mead</th>
								<th className="px-4 py-2">Silk</th>
								<th className="px-4 py-2">Crossbows</th>
								<th className="px-4 py-2">Gold</th>
								<th className="px-4 py-2">Base Total</th>
								<th className="px-4 py-2">Bonus</th>
							</>
						)}
						<th className="px-4 py-2 border-b border-white">Total</th>
					</tr>
				</thead>
				<tbody className="divide-y divide-gray-200">{renderPlayersStats()}</tbody>
			</table>
			<div className="text-right">
				{players.length > 0 && (
					<button
						className="bg-blue-500 hover:bg-blue-400 cursor-pointer transition-colors duration-300 ease-in-out text-white px-4 py-2 mt-2 text-right rounded"
						onClick={handleDetails}
					>
						{showDetails ? 'Hide Details' : 'Show details'}
					</button>
				)}
			</div>
		</div>
	);
};

export default Scoreboard;
