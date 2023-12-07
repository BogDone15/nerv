import { createSlice } from '@reduxjs/toolkit';

const termsSlice = createSlice({
	name: 'terms',
	initialState: [],
	reducers: {
		addTerms: (state, action) => {
			return action.payload;
		},
	},
});

export const { addTerms } = termsSlice.actions;
export default termsSlice.reducer;
