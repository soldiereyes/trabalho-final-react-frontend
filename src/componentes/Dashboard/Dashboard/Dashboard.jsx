import React, {useEffect, useState} from "react";
import axios from "axios";
import DashboardHeader from "../DashboardHeader/DashboardHeader.jsx";
import DashboardTable from "../DashboardTable/DashboardTable.jsx";
import FloatingButton from "../../FloatingButton/FloatingButton.jsx";
import {deleteCar} from "../../../services/carServce.js";
import CarForm from "../../CarForm/CarForm.jsx";

const Dashboard = () => {
    const [carros, setCarros] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetchCarros();
    }, []);

    const fetchCarros = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/carros");
            setCarros(response.data);
        } catch (error) {
            console.error("Erro ao buscar carros:", error);
        }
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Tem certeza que deseja excluir este carro?");
        if (confirmDelete) {
            try {
                await deleteCar(id);
                setCarros((prev) => prev.filter((carro) => carro.id !== id));
                alert("Carro excluído com sucesso!");
            } catch (error) {
                alert(error.message);
            }
        }
    };

    const handleEdit = (carro) => {
        alert(`Editar carro: ${carro.modelo}`);
    };

    return (
        <div>
            <DashboardHeader/>
            <DashboardTable carros={carros} onEdit={handleEdit} onDelete={handleDelete}/>
            <FloatingButton onClick={() => setShowForm(true)}/>
            {showForm && (
                <CarForm
                    onSubmit={(novoCarro) => {
                        axios.post("http://localhost:8080/api/carros", novoCarro).then((response) => {
                            setCarros((prev) => [...prev, response.data]);
                        });
                    }}
                    onClose={() => setShowForm(false)}
                />
            )}
        </div>
    );
};

export default Dashboard;
