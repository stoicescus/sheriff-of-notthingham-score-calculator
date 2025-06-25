import Scoreboard from './scoreboard';

const AllPlayers = ({ allPlayers }) => {
	const getBonusesWithTies = (players) => {
		const bonuses = {
			apples: { king: 20, queen: 10 },
			cheese: { king: 15, queen: 10 },
			bread: { king: 15, queen: 10 },
			chickens: { king: 10, queen: 5 },
		};

		const bonusScores = {};

		Object.keys(bonuses).forEach((good) => {
			const sorted = [...players].filter((p) => p[good].nr > 0).sort((a, b) => b[good].nr - a[good].nr);

			if (sorted.length === 0) return;

			const kingCount = sorted[0][good].nr;
			const kings = sorted.filter((p) => p[good].nr === kingCount);

			if (kings.length > 1) {
				// Tie for King: combine King + Queen bonus, divide equally
				const totalBonus = bonuses[good].king + bonuses[good].queen;
				const splitBonus = Math.floor(totalBonus / kings.length);

				kings.forEach((p) => {
					bonusScores[p.playerName] = (bonusScores[p.playerName] || 0) + splitBonus;
				});
			} else {
				// One true King
				const king = sorted[0];
				bonusScores[king.playerName] = (bonusScores[king.playerName] || 0) + bonuses[good].king;

				// Check for Queen tie among second place
				const queenCount = sorted.find((p) => p[good].nr < kingCount)?.[good].nr ?? 0;

				if (queenCount > 0) {
					const queens = sorted.filter((p) => p[good].nr === queenCount);
					const queenSplit = Math.floor(bonuses[good].queen / queens.length);

					queens.forEach((p) => {
						bonusScores[p.playerName] = (bonusScores[p.playerName] || 0) + queenSplit;
					});
				}
			}
		});

		return bonusScores;
	};

	const bonuses = getBonusesWithTies(allPlayers);

	return (
		<aside className="w-fit border-2 border-gray-300 rounded-md p-5">
			<div className="text-lg text-center underline mb-4 font-bold ">Game Scoreboard</div>
			<Scoreboard players={allPlayers} bonuses={bonuses} />
		</aside>
	);
};

export default AllPlayers;
