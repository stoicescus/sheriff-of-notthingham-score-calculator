import { getBaseTotal } from '../utils/utils';

const Scoreboard = ({ players, bonuses, showDetails }) => {
	if (players.length === 0) return;

	const descendingSortedPlayers = [...players].sort((a, b) => {
		const totalA = getBaseTotal(a) + (bonuses[a.playerName] || 0);
		const totalB = getBaseTotal(b) + (bonuses[b.playerName] || 0);
		return totalB - totalA;
	});

	const topScore = getBaseTotal(descendingSortedPlayers[0]) + (bonuses[descendingSortedPlayers[0].playerName] || 0);

	const renderPlayersStats = () => {
		return descendingSortedPlayers.map((player) => {
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

	return (
		<div className="scoreboard overflow-x-auto w-full">
			<table className="table-auto min-w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
				<thead className="bg-black text-white text-sm uppercase tracking-wider">
					<tr className="divide-x divide-y divide-white text-center">
						<th className="px-4 py-2">
							<div className="flex justify-center items-center">
								<img src="images/player.png" width="30" />
							</div>
						</th>
						{showDetails && (
							<>
								<th className="px-1 md:px-4 py-2">
									<div className="flex justify-center items-center">
										<img src="images/legal/apple.png" width="30" alt="Apple icon" />
									</div>
								</th>
								<th className="px-1 md:px-4 py-2">
									<div className="flex justify-center items-center">
										<img src="images/legal/cheese.png" width="30" alt="Cheese icon" />
									</div>
								</th>
								<th className="px-1 md:px-4 py-2">
									<div className="flex justify-center items-center">
										<img src="images/legal/bread.png" width="30" alt="Bread icon" />
									</div>
								</th>
								<th className="px-1 md:px-4 py-2">
									<div className="flex justify-center items-center">
										<img src="images/legal/chicken.png" width="30" alt="Chicken icon" />
									</div>
								</th>
								<th className="px-1 md:px-4 py-2">
									<div className="flex justify-center items-center">
										<img src="images/contraband/pepper.png" width="30" alt="Pepper icon" />
									</div>
								</th>
								<th className="px-1 md:px-4 py-2">
									<div className="flex justify-center items-center">
										<img src="images/contraband/mead.png" width="30" alt="Mead icon" />
									</div>
								</th>
								<th className="px-1 md:px-4 py-2">
									<div className="flex justify-center items-center">
										<img src="images/contraband/silk.png" width="30" alt="Silk icon" />
									</div>
								</th>
								<th className="px-1 md:px-4 py-2">
									<div className="flex justify-center items-center">
										<img src="images/contraband/crossbow.png" width="30" alt="Crossbow icon" />
									</div>
								</th>
								<th className="px-1 md:px-4 py-2">
									<div className="flex justify-center items-center">
										<img src="images/coins.png" width="30" alt="Gold icon" />
									</div>
								</th>
								<th className="px-1 md:px-4 py-2">
									<div className="flex justify-center items-center">Base Total</div>
								</th>
								<th className="px-1 md:px-4 py-2">
									<div className="flex justify-center items-center">Bonus</div>
								</th>
							</>
						)}
						<th className="px-1 md:px-4 py-2 border-b border-white">
							<div className="flex justify-center items-center">Total</div>
						</th>
					</tr>
				</thead>
				<tbody className="divide-y divide-gray-200">{renderPlayersStats()}</tbody>
			</table>
		</div>
	);
};

export default Scoreboard;
