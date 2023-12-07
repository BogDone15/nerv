import axios from 'axios';
import { BASE_URL } from './config.service';

const LOCAL_STORAGE_AUTH_TOKEN_KEY = 'adminAuthToken';

const getAuthToken = () => {
	return localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN_KEY);
};

const login = async (username, password) => {
	try {
		const response = await axios.post(BASE_URL + '/api/admin/login', {
			username,
			password,
		});

		response.data.token &&
			localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN_KEY, response.data.token);
	} catch (error) {
		return {
			error: error.message,
		};
	}
};

const authService = {
	getAuthToken,
	login,
};

export default authService;
