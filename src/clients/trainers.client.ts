import Axios from 'axios'
import {TrainerInterface} from "@/interfaces/trainer.interface";
import {Endpoints} from "@/app/enums/endpoints";
import {getCookie} from "@/utils/cookies/cookies";

export const createTrainer = async (trainer: TrainerInterface) => {
    const response = await Axios.post(Endpoints.TRAINERS, trainer, {headers: {Authorization: `Bearer ${await getCookie('accessToken')}`}});
    return response?.data;
};

export const getTrainers = async () => {
    const response = await Axios.get(Endpoints.TRAINERS, {headers:{Authorization: `Bearer ${await getCookie('accessToken')}`}});
    return response?.data;
}
