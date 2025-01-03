import axios from "axios";

export const API_URL = "http://localhost:8080/api/carros";

export const deleteCar = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        if (error.response && error.response.status === 404) {
            throw new Error("Carro não encontrado");
        }
        throw new Error("Erro ao tentar excluir o carro");
    }
};

export const updateCar = async (id, updatedCar) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, updatedCar);
        return response.data;
    } catch (error) {
        throw new Error("Erro ao atualizar o carro");
    }
};

