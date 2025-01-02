import React from "react";
import "./DashboardTable.css";

const DashboardTable = ({ carros, onEdit, onDelete }) => {
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
            {carros.map((carro) => (
                <tr key={carro.id}>
                    <td>{carro.modelo}</td>
                    <td>{carro.ano}</td>
                    <td>{carro.cor}</td>
                    <td>{carro.cavalosDePotencia}</td>
                    <td>{carro.fabricante}</td>
                    <td>{carro.pais}</td>
                    <td>
                        <button
                            className="table-button edit-button"
                            onClick={() => onEdit(carro)}
                        >
                            Editar
                        </button>
                        <button
                            className="table-button delete-button"
                            onClick={() => onDelete(carro.id)}
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
