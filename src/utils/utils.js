export const getBaseTotal = (state) => {
	return Object.values(state).reduce((sum, item) => {
		return sum + (item.type ? Number(item.nr) * Number(item.cardValue) || 0 : item.nr || 0);
	}, 0);
};
