import { useState } from 'react';

import Player from './components/player';

import './App.css';

function App() {
	const [allPlayers, setAllPlayers] = useState([]);

	const savePlayerHandler = (playerStats) => {
		setAllPlayers([...allPlayers, playerStats]);
	};

	return (
		<main className="flex justify-center items-center h-screen">
			<>
				<Player savePlayerHandler={savePlayerHandler} />
			</>
		</main>
	);
}

export default App;
