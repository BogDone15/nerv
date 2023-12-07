import axios from 'axios';
import { BASE_URL } from './config.service';
import authService from './auth.service';

const authorizedRequest = () => {
	return axios.create({
		headers: {
			token: authService.getAuthToken(),
		},
	});
};

const postProductsRequest = async product => {
	try {
		const response = await authorizedRequest().post(
			BASE_URL + '/api/products',
			product
		);

		return response.data;
	} catch (error) {
		return { error: error.message };
	}
};

const getProductsRequest = async () => {
	try {
		const response = await axios.get(BASE_URL + '/api/products');

		return response.data;
	} catch (error) {
		return { error: error.message };
	}
};

const putProductRequest = async (id, data) => {
	try {
		const response = await authorizedRequest().put(
			BASE_URL + '/api/products/' + id,
			data
		);

		return response.data;
	} catch (error) {
		return { error: error.message };
	}
};

const deleteProductsRequest = async id => {
	try {
		const response = await authorizedRequest().delete(
			BASE_URL + `/api/products/${id}`
		);

		return response.data;
	} catch (error) {
		return { error: error.message };
	}
};

const postTermsRequest = async terms => {
	try {
		const response = await authorizedRequest().post(
			BASE_URL + '/api/terms',
			terms
		);

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

const postSocialsRequest = async socials => {
	try {
		const response = await authorizedRequest().post(
			BASE_URL + '/api/social',
			socials
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

const postMainInfoRequest = async data => {
	try {
		const response = await authorizedRequest().post(
			BASE_URL + '/api/main_page',
			data
		);

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

const postFileUploadRequest = async formData => {
	try {
		const response = await authorizedRequest().post(
			BASE_URL + '/api/upload',
			formData,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			}
		);

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

const postCategoriesRequest = async hero => {
	try {
		const response = await authorizedRequest().post(
			BASE_URL + '/api/category',
			hero
		);

		return response.data;
	} catch (error) {
		return { error: error.message };
	}
};

const deleteCategoryRequest = async id => {
	try {
		const response = await authorizedRequest().delete(
			BASE_URL + '/api/category/' + id
		);

		return response.data;
	} catch (error) {
		return { error: error.message };
	}
};

const putCategoryRequest = async (id, data) => {
	try {
		const response = await authorizedRequest().put(
			BASE_URL + '/api/category/' + id,
			data
		);

		return response.data;
	} catch (error) {
		return { error: error.message };
	}
};

const getOrdersRequest = async () => {
	try {
		const response = await authorizedRequest().get(BASE_URL + '/api/orders');

		return response.data;
	} catch (error) {
		return { error: error.message };
	}
};

const getOrderItemRequest = async orderId => {
	try {
		const response = await authorizedRequest().get(
			BASE_URL + '/api/orders/' + orderId
		);

		return response.data;
	} catch (error) {
		return { error: error.message };
	}
};

const deleteOrdersRequest = async id => {
	try {
		const response = await authorizedRequest().delete(
			BASE_URL + `/api/orders/${id}`
		);

		return response.data;
	} catch (error) {
		return { error: error.message };
	}
};

const apiCallsService = {
	deleteProductsRequest,
	getProductsRequest,
	putProductRequest,
	postProductsRequest,
	postTermsRequest,
	getTermsRequest,
	postSocialsRequest,
	getSocialsRequest,
	postMainInfoRequest,
	getMainInfoRequest,
	postFileUploadRequest,
	getCategoriesRequest,
	postCategoriesRequest,
	deleteCategoryRequest,
	putCategoryRequest,
	getOrdersRequest,
	getOrderItemRequest,
	deleteOrdersRequest,
};

export default apiCallsService;
