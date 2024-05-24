import {post} from 'axios'
import {TrainerInterface} from "@/interfaces/trainer.interface";
import {Endpoints} from "@/app/enums/endpoints";

export const createTrainer = async (trainer: TrainerInterface) => {
    const response = await post(Endpoints.TRAINERS, trainer);
    return response?.data;
};
