import {post} from 'axios'
import {TrainerInterface} from "@/interfaces/trainer.interface";
import {Endpoints} from "@/app/enums/endpoints";

// create trainer
export const createTrainer = async (trainer: TrainerInterface) => {
    const response = await post({endpoint: Endpoints.TRAINERS, body: trainer});
    return response?.data;
};
