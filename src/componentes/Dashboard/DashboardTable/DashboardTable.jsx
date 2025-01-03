import React from "react";
import "./DashboardTable.css";

const DashboardTable = ({ cars, onEdit, onDelete }) => {
    return (
        <table className="dashboard-table">
            <thead>
            <tr>
                <th>Modelo</th>
                <th>Ano</th>
                <th>Cor</th>
                <th>Cavalos de Potência</th>
                <th>Fabricante</th>
                <th>País</th>
                <th>Ações</th>
            </tr>
            </thead>
            <tbody>
            {cars.map((cars) => (
                <tr key={cars.id}>
                    <td>{cars.modelo}</td>
                    <td>{cars.ano}</td>
                    <td>{cars.cor}</td>
                    <td>{cars.cavalosDePotencia}</td>
                    <td>{cars.fabricante}</td>
                    <td>{cars.pais}</td>
                    <td>
                        <button
                            className="table-button edit-button"
                            onClick={() => onEdit(cars)}
                        >
                            Editar
                        </button>
                        <button
                            className="table-button delete-button"
                            onClick={() => onDelete(cars.id)}
                        >
                            Excluir
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default DashboardTable;
