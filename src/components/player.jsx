import usePlayer from '../hooks/usePlayer';

const Player = ({ savePlayerHandler }) => {
	const { playerStats, handleInputChange } = usePlayer();

	return (
		<section className="w-fit border-2 border-gray-300 rounded-md p-5">
			<PlayerStatsList stats={playerStats} onChange={handleInputChange} />
			<div className="flex justify-between">
				<div>
					Total: <span className="font-bold">{playerStats.total}</span>
				</div>
				<button
					className="bg-blue-500 hover:bg-blue-400 cursor-pointer transition-colors duration-300 ease-in-out text-white px-4 py-2 rounded"
					onClick={() => savePlayerHandler(playerStats)}
				>
					Save Player
				</button>
			</div>
		</section>
	);
};

const PlayerItem = ({ imgUrl, name, value, onChange }) => {
	return (
		<div className="flex pb-2">
			<img src={imgUrl ?? 'images/player.png'} width="50" height="50" className="mr-2" alt={name} />
			<input
				type={name === 'playerName' ? 'text' : 'number'}
				name={name}
				className="border border-gray-300 rounded-md p-2"
				placeholder={name === 'playerName' ? '' : '0'}
				aria-label={
					name === 'playerName' ? 'Player name' : `Enter the number of ${name} cards in your merchant area.`
				}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

const PlayerStatsList = ({ stats, onChange }) => {
	return Object.entries(stats)
		.filter(([key]) => key !== 'total')
		.map(([key, item]) => (
			<PlayerItem key={key} imgUrl={item.imageUrl} name={key} value={item.nr} onChange={onChange} />
		));
};

export default Player;
