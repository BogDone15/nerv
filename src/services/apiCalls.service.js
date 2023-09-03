import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

const getProductsRequest = async () => {
	try {
		const response = await axios.get(
			BASE_URL + '/user/auth/military-ranks-list'
		);

		return response.data;
	} catch (error) {
		return { error: error.message };
	}
};

const apiCallsService = {
	getProductsRequest,
};

export default apiCallsService;
