import { useState } from 'react';

import { getBaseTotal } from '../utils/utils';

const initialState = {
	playerName: '',
	apples: { type: 'legal', nr: 0, cardValue: 2, imageUrl: 'images/legal/apple.png' },
	cheese: { type: 'legal', nr: 0, cardValue: 3, imageUrl: 'images/legal/cheese.png' },
	bread: { type: 'legal', nr: 0, cardValue: 3, imageUrl: 'images/legal/bread.png' },
	chickens: { type: 'legal', nr: 0, cardValue: 4, imageUrl: 'images/legal/chicken.png' },
	pepper: { type: 'contraband', nr: 0, cardValue: 6, imageUrl: 'images/contraband/pepper.png' },
	mead: { type: 'contraband', nr: 0, cardValue: 7, imageUrl: 'images/contraband/mead.png' },
	silk: { type: 'contraband', nr: 0, cardValue: 8, imageUrl: 'images/contraband/silk.png' },
	crossbows: { type: 'contraband', nr: 0, cardValue: 9, imageUrl: 'images/contraband/crossbow.png' },
	gold: { nr: 0, imageUrl: 'images/coins.png' },
	total: 0,
};

const usePlayer = () => {
	const [playerStats, setPlayerStats] = useState(initialState);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		const newValue = name === 'playerName' ? value : Number(value) || 0;

		setPlayerStats((prevStats) => {
			const updatedStats = {
				...prevStats,
				[name]: name === 'playerName' ? newValue : { ...prevStats[name], nr: newValue },
			};

			const baseTotal = getBaseTotal(updatedStats);

			return {
				...updatedStats,
				total: baseTotal,
			};
		});
	};

	const resetForm = () => setPlayerStats(initialState);

	return { playerStats, handleInputChange, resetForm };
};

export default usePlayer;
