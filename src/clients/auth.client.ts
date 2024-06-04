import Axios from 'axios';
import { Endpoints } from '@/app/enums/endpoints';

const BACKEND_BASE_URL = 'http://localhost:3300';
export const registerByMail = async (registerData: { email: string; username: string }) => {
	try {
		const endpoint = `${BACKEND_BASE_URL}/${Endpoints.REGISTER_BY_EMAIL}`;
		const response = await Axios.post(endpoint, registerData);
		return response?.data;
	} catch (e) {
		console.error(e);
	}
};

export const loginByMail = async (loginData: { email: string }) => {
	try {
		const endpoint = `${BACKEND_BASE_URL}/${Endpoints.LOGIN_BY_EMAIL}`;
		const response = await Axios.post(endpoint, loginData);
		return response?.data;
	} catch (e) {
		console.error(e);
	}
};

export const verifyCode = async (verifyCodeData: { code: string; identifier: string }, endpointPath: Endpoints) => {
	try {
		const endpoint = `${BACKEND_BASE_URL}/${endpointPath}`;
		const response = await Axios.post(endpoint, verifyCodeData, { withCredentials: true });
		return response?.data;
	} catch (e) {
		console.error(e);
	}
};
