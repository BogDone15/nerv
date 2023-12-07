import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
	name: 'category',
	initialState: [],
	reducers: {
		addCategory: (state, action) => {
			return action.payload;
		},
	},
});

export const { addCategory } = categorySlice.actions;
export default categorySlice.reducer;
