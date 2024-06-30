import Axios from 'axios';
import { TrainerInterface } from '@/interfaces/trainer.interface';
import { Endpoints } from '@/app/enums/endpoints';
import { getCookie } from '@/utils/cookies/cookies';
import { BACKEND_BASE_URL } from '@/utils/config/config';

export const createTrainer = async (trainer: TrainerInterface) => {
	const response = await Axios.post(`${BACKEND_BASE_URL}/${Endpoints.TRAINERS}`, trainer, {
		withCredentials: true,
		headers: { Authorization: `Bearer ${await getCookie('accessToken')}` },
	});
	return response?.data;
};

export const getTrainers = async () => {
	try {
		const response = await Axios.get(`${BACKEND_BASE_URL}/${Endpoints.TRAINERS}`, {
			withCredentials: true,
			headers: { Authorization: `Bearer ${await getCookie('accessToken')}` },
		});
		return response?.data;
	} catch (e) {
		console.error(e);
	}
};

export const getTrainerImages = async (trainerId: number, categories: number[], page: number, pageNumber: number, isRandomRequired: boolean) => {
	try {
		const response = await Axios.get(`${BACKEND_BASE_URL}/${Endpoints.TRAINERS}/${trainerId}/images`, {
			withCredentials: true,
			params: { categories, page, pageNumber, isRandomRequired },
			headers: { Authorization: `Bearer ${await getCookie('accessToken')}` },
		});
		return response?.data;
	} catch (e) {
		console.error(e);
	}
};

export const trainModel = async (trainerId: number) => {
	try {
		const response = await Axios.post(
			`${BACKEND_BASE_URL}/${Endpoints.TRAINERS}/${trainerId}/train`,
			{},
			{
				withCredentials: true,
				headers: { Authorization: `Bearer ${await getCookie('accessToken')}` },
			}
		);
		return response?.data;
	} catch (e) {
		console.error(e);
	}
};
