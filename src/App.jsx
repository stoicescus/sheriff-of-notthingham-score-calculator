import { useState } from 'react';

import Player from './components/player';
import AllPlayers from './components/all_players';
import bg from './assets/sheriff_of_nottingham.png';

import './App.css';

function App() {
	const [allPlayers, setAllPlayers] = useState([]);

	const savePlayerHandler = (playerStats) => {
		// check if the player has a name set in
		if (!playerStats.playerName) {
			alert('Please enter a player name.');
			return;
		}

		// check if the new player exists
		const existingPlayerNames = allPlayers.map((player) => player.playerName);

		if (existingPlayerNames.includes(playerStats.playerName)) {
			alert('Player was already calculated.');
			return;
		}

		setAllPlayers([...allPlayers, playerStats]);
	};

	return (
		<main className="relative h-screen flex justify-center items-center">
			<div
				className="absolute inset-0 bg-black opacity-40 z-0"
				style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
			></div>
			<div className="relative z-10">
				<div className="flex flex-col md:flex-row bg-white rounded-md">
					<div className="w-full md:w-auto mb-4 md:mb-0">
						<Player savePlayerHandler={savePlayerHandler} />
					</div>
					<div className="w-full md:w-auto">
						<AllPlayers allPlayers={allPlayers} />
					</div>
				</div>
			</div>
		</main>
	);
}

export default App;
