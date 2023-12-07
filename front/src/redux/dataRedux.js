import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
	name: 'data',
	initialState: [],
	reducers: {
		addData: (state, action) => {
			return action.payload;
		},
	},
});

export const { addData } = productsSlice.actions;
export default productsSlice.reducer;
