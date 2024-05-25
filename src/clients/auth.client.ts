import Axios from 'axios'
import {Endpoints} from "@/app/enums/endpoints";

const BACKEND_BASE_URL = 'http://localhost:3200';
export const registerByMail = async (registerData: { email: string, username: string }) => {
    try{
        const endpoint = `${BACKEND_BASE_URL}/${Endpoints.REGISTER_BY_EMAIL}`;
        const response = await Axios.post(endpoint, registerData);
        return response?.data;
    } catch (e) {
        console.error(e);
    }
};

export const verifyRegisterCode = async (verifyCodeData: { code: string, identifier: string }) => {
    try{
        const endpoint = `${BACKEND_BASE_URL}/${Endpoints.REGISTER_VERIFY_CODE}`;
        const response = await Axios.post(endpoint, verifyCodeData);
        return response?.data;
    } catch (e) {
        console.error(e);
    }
};
