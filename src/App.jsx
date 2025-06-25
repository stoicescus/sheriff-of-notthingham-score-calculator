import { useState } from 'react';

import Player from './components/player';
import AllPlayers from './components/all_players';

import './App.css';

function App() {
	const [allPlayers, setAllPlayers] = useState([]);

	const savePlayerHandler = (playerStats) => {
		// check if the new player exists
		const existingPlayerNames = allPlayers.map((player) => player.playerName);

		if (existingPlayerNames.includes(playerStats.playerName)) {
			alert('Player was already calculated.');
			return;
		}

		setAllPlayers([...allPlayers, playerStats]);
	};

	return (
		<main className="flex justify-center items-center h-screen">
			<div className="flex flex-col md:flex-row">
				<div className="w-full md:w-auto mb-4 md:mb-0">
					<Player savePlayerHandler={savePlayerHandler} />
				</div>
				<div className="w-full md:w-auto">
					<AllPlayers allPlayers={allPlayers} />
				</div>
			</div>
		</main>
	);
}

export default App;
