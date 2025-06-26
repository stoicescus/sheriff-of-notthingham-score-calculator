import usePlayer from '../hooks/usePlayer';

const Player = ({ savePlayerHandler }) => {
	const { playerStats, handleInputChange, resetForm } = usePlayer();

	const handleSubmit = (e) => {
		e.preventDefault();
		savePlayerHandler(playerStats);
		resetForm();
	};

	return (
		<section className="w-fit border-2 border-gray-300 rounded-md p-5">
			<form onSubmit={handleSubmit}>
				<PlayerStatsList stats={playerStats} onChange={handleInputChange} />
				<div className="flex justify-between">
					<div>
						Total: <span className="font-bold">{playerStats.total}</span>
					</div>
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-400 cursor-pointer transition-colors duration-300 ease-in-out text-white px-4 py-2 rounded"
					>
						Save Player
					</button>
				</div>
			</form>
		</section>
	);
};

const PlayerItem = ({ imgUrl, name, value, onChange }) => {
	return (
		<div className="flex pb-2">
			<img src={imgUrl ?? 'images/player.png'} width="50" className="mr-2" alt={name} />
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
		.map(([key, item]) => {
			const isName = key === 'playerName';
			const value = isName ? item : item.nr;
			const imgUrl = isName ? null : item.imageUrl;

			return <PlayerItem key={key} imgUrl={imgUrl} name={key} value={value} onChange={onChange} />;
		});
};

export default Player;
