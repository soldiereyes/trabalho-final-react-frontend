import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardHeader from "../DashboardHeader/DashboardHeader.jsx";
import DashboardTable from "../DashboardTable/DashboardTable.jsx";

const Dashboard = () => {
    const [carros, setCarros] = useState([]);

    useEffect(() => {
        fetchCarros();
    }, []);

    const fetchCarros = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/carros"); // Substitua pela URL do backend
            setCarros(response.data);
        } catch (error) {
            console.error("Erro ao buscar carros:", error);
        }
    };

    const handleEdit = (carro) => {
        alert(`Editar carro: ${carro.modelo}`);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/carros/${id}`);
            setCarros((prev) => prev.filter((carro) => carro.id !== id));
        } catch (error) {
            console.error("Erro ao excluir carro:", error);
        }
    };

    return (
        <div>
            <DashboardHeader />
            <DashboardTable carros={carros} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default Dashboard;
