import axios from "axios";

const API_URL = "http://localhost:8080/api/carros"; // Substitua pela URL correta

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
