import axios from 'axios';

const API_BASE_URL = 'http://devapp.bonusmoney.pro/mobileapp';
const TOKEN = '123';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        TOKEN: TOKEN,
        'Content-Type': 'application/json',
    },
});

export const getCompanies = async (offset: number, limit: number) => {
    try {
        const response = await api.post('/getAllCompaniesLong', {
            offset,
            limit,
        });
        return response.data;
    } catch (error) {
        console.log(error);
        handleApiError(error);
    }
};

const handleApiError = (error: any) => {
    if (error.response) {
        switch (error.response.status) {
            case 401:
                throw new Error('Ошибка авторизации');
            case 400:
                throw new Error(error.response.data.message);
            case 500:
                throw new Error('Все упало');
            default:
                throw new Error('Произошла ошибка при запросе к серверу');
        }
    }
    throw error;
};
