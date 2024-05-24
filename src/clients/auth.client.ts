import Axios from 'axios'
import {Endpoints} from "@/app/enums/endpoints";

const BACKEND_BASE_URL = 'http://localhost:3200';
export const registerByMail = async (trainer: { email: string, username: string }) => {
    try{
        const endpoint = `${BACKEND_BASE_URL}/${Endpoints.REGISTER_BY_EMAIL}`;
        const response = await Axios.post(endpoint, trainer);
        return response?.data;
    } catch (e) {
        console.error(e);
    }
};
