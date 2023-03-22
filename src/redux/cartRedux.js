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
			const newProduct = action.payload;
			const existingProduct = state.products.find(
				product => product.id === newProduct.id
			);
			if (
				!existingProduct ||
				JSON.stringify(existingProduct) !== JSON.stringify(newProduct)
			) {
				state.products.push(newProduct);
				state.quantity += 1;
				state.total += newProduct.price * newProduct.quantity;
			}
			// state.products.push(newProduct);
			// state.quantity += 1;
			// state.total += newProduct.price * newProduct.quantity;
		},
		deleteProduct: (state, action) => {
			state.quantity -= 1;
			state.products = state.products.filter(
				item => item.id !== action.payload.id
			);
			state.total -= action.payload.price * action.payload.quantity;
		},
	},
});

export const { addProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
