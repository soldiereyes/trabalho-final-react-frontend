import React from "react";
import "./DashboardTable.css";

const DashboardTable = () => {
    return (
        <table className="dashboard-table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Ações</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Exemplo</td>
                <td>
                    <button className="table-button">Editar</button>
                    <button className="table-button">Excluir</button>
                </td>
            </tr>
            </tbody>
        </table>
    );
};

export default DashboardTable;
