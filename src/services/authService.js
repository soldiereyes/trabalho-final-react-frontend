import axios from "axios";

const API_URL = "http://localhost:8080/api/usuarios";

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        return response.data.authenticate;
    } catch (error) {
        if (error.response && error.response.status === 403) {
            throw new Error("Usuário ou senha inválidos");
        }
        throw new Error("Erro ao tentar autenticar");
    }
};


export const getMyProfile = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/my-profile`, {
            headers: {
                Authorization: token,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error("Erro ao buscar o perfil do usuário");
    }
};
