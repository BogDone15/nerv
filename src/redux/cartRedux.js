import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		products: [],
		quantity: 0,
		total: 0,
	},

	reducers: {
		addProduct: (state, action) => {
			const newItem = action.payload;
			const existingItem = state.products.find(
				item => item.id === newItem.id && item.specificId === newItem.specificId
			);
			if (!existingItem) {
				state.products.push(newItem);
				state.quantity += 1;
				state.total += newItem.price * newItem.quantity;
			}
		},
		deleteProduct: (state, action) => {
			state.quantity -= 1;
			state.products = state.products.filter(
				item => item.specificId !== action.payload.specificId
			);
			state.total -= action.payload.price * action.payload.quantity;
		},
		incrementQuantity: (state, action) => {
			const existingProduct = state.products.find(
				product => product.specificId === action.payload.specificId
			);

			existingProduct.quantity += 1;
			state.total += existingProduct.price;
		},
		decrementQuantity: (state, action) => {
			const existingProduct = state.products.find(
				product => product.specificId === action.payload.specificId
			);
			existingProduct.quantity -= 1;
			state.total -= existingProduct.price;
		},
	},
});

export const {
	addProduct,
	deleteProduct,
	incrementQuantity,
	decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
