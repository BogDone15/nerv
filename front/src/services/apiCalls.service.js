import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_BACKEND_URL;

const getProductsRequest = async () => {
	try {
		const response = await axios.get(BASE_URL + '/api/products');

		return response.data;
	} catch (error) {
		return { error: error.message };
	}
};

const getCategoriesRequest = async () => {
	try {
		const response = await axios.get(BASE_URL + '/api/category');

		return response.data;
	} catch (error) {
		return { error: error.message };
	}
};

const saveShoppingCart = async cartData => {
	try {
		const response = await axios.post(
			BASE_URL + '/api/shopping_cart',
			cartData
		);

		return response.data;
	} catch (error) {
		return { error: error.message };
	}
};

const captureOrder = async (orderId, paypalData) => {
	try {
		const response = await axios.post(
			BASE_URL + `/api/shopping_cart/capture/${orderId}`,
			paypalData
		);

		return response.data;
	} catch (error) {
		return { error: error.message };
	}
};

const getSocialsRequest = async () => {
	try {
		const response = await axios.get(BASE_URL + '/api/social');

		return response.data;
	} catch (error) {
		return { error: error.message };
	}
};

const getTermsRequest = async () => {
	try {
		const response = await axios.get(BASE_URL + '/api/terms');

		return response.data;
	} catch (error) {
		return { error: error.message };
	}
};

const getMainInfoRequest = async () => {
	try {
		const response = await axios.get(BASE_URL + '/api/main_page');

		return response.data;
	} catch (error) {
		return { error: error.message };
	}
};

const subscribeRequest = async email => {
	try {
		const response = await axios.post(BASE_URL + '/api/subscribe', email);

		return response.data;
	} catch (error) {
		return { error: error.message };
	}
};

const apiCallsService = {
	getProductsRequest,
	getCategoriesRequest,
	saveShoppingCart,
	getSocialsRequest,
	getTermsRequest,
	getMainInfoRequest,
	subscribeRequest,
	captureOrder
};

export default apiCallsService;
