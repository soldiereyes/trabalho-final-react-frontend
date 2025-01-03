import React, { useEffect, useState } from "react";
import {API_URL, deleteCar, updateCar} from "../../../services/carServce.js";
import DashboardHeader from "../DashboardHeader/DashboardHeader.jsx";
import DashboardTable from "../DashboardTable/DashboardTable.jsx";
import CarForm from "../../CarForm/CarForm.jsx";
import FloatingButton from "../../FloatingButton/FloatingButton.jsx";
import axios from "axios";

const Dashboard = () => {
    const [cars, setCars] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editingCar, setEditingCar] = useState(null);

    useEffect(() => {
        fetchCarros();
    }, []);

    const fetchCarros = async () => {
        try {
            const response = await axios.get(API_URL);
            setCars(response.data);
        } catch (error) {
            console.error("Erro ao buscar carros:", error);
        }
    };

    const handleEdit = (carro) => {
        setEditingCar(carro);
        setShowForm(true);
    };

    const handleUpdate = async (updatedCar) => {
        try {
            const result = await updateCar(updatedCar.id, updatedCar);
            setCars((prev) =>
                prev.map((carro) => (carro.id === result.id ? result : carro))
            );
            alert("Carro atualizado com sucesso!");
            setShowForm(false);
            setEditingCar(null);
        } catch (error) {
            alert("Erro ao atualizar o carro.");
        }
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Tem certeza que deseja excluir este carro?");
        if (confirmDelete) {
            try {
                await deleteCar(id);
                setCars((prev) => prev.filter((carro) => carro.id !== id));
                alert("Carro excluído com sucesso!");
            } catch (error) {
                alert(error.message);
            }
        }
    };

    const handleCreate = async (newCar) => {
        try {
            const response = await axios.post(API_URL, newCar);
            setCars((prev) => [...prev, response.data]);
            alert("Carro cadastrado com sucesso!");
        } catch (error) {
            alert("Erro ao cadastrar o carro.");
        }
    };

    return (
        <div>
            <DashboardHeader />
            <DashboardTable cars={cars} onEdit={handleEdit} onDelete={handleDelete} />
            {showForm && (
                <CarForm
                    initialData={editingCar}
                    onSubmit={(carro) => {
                        if (editingCar) {
                            handleUpdate(carro);
                        } else {
                            handleCreate(carro);
                        }
                    }}
                    onClose={() => {
                        setShowForm(false);
                        setEditingCar(null);
                    }}
                />
            )}
            <FloatingButton onClick={() => {
                setShowForm(true);
                setEditingCar(null);
            }} />
        </div>
    );
};

export default Dashboard;
