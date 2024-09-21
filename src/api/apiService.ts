import axiosInstance from './axiosConfig.ts';

// CREATE (POST): Создание нового ресурса
export const axiosPost= async <T>(url: string, data: T): Promise<any> => {
    try {
        const response = await axiosInstance.post(url, data);
        return response.data;
    } catch (error) {
        console.error('Ошибка при создании ресурса:', error);
        throw error;
    }
};

// READ (GET): Получение всех ресурсов
export const axiosGet = async <T>(url: string): Promise<any> => {
    try {
        const response = await axiosInstance.get(url);
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении ресурсов:', error);
        throw error;
    }
};

// UPDATE (PUT): Обновление ресурса по ID
export const axiosPut = async <T>(url: string, data: T): Promise<any> => {
    try {
        const response = await axiosInstance.put(url, data);
        return response.data;
    } catch (error) {
        console.error('Ошибка при обновлении ресурса:', error);
        throw error;
    }
};

// DELETE (DELETE): Удаление ресурса по ID
export const axiosDelete = async <T>(url: string): Promise<any> => {
    try {
        const response = await axiosInstance.delete(url);
        return response.data;
    } catch (error) {
        console.error(`Ошибка при удалении ресурса`, error);
        throw error;
    }
};
