import axios, { AxiosError } from 'axios';

const API_BASE_URL = 'http://devapp.bonusmoney.pro/mobileapp';
const TOKEN = '123';

interface ApiError {
    message: string;
}

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        TOKEN: TOKEN,
        'Content-Type': 'application/json',
    },
});

export const getCompanies = async (offset: number, limit: number) => {
    try {
        const response = await api.post('/getAllCompanies', {
            offset,
            limit,
        });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw handleApiError(error);
        } else {
            throw error;
        }
    }
};

const handleApiError = (error: AxiosError): ApiError => {
    if (error.response) {
        switch (error.response.status) {
            case 401:
                throw new Error('Ошибка авторизации');
            case 400:
                throw new Error(
                    (error.response.data as { message: string }).message
                );
            case 500:
                throw new Error('Все упало');
            default:
                throw new Error('Произошла ошибка при запросе к серверу');
        }
    }
    return new Error('Произошла неизвестная ошибка');
};
