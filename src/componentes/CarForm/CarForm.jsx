import React, { useState } from "react";
import "./CarForm.css";

const CarForm = ({ onSubmit, onClose }) => {
    const [carro, setCarro] = useState({
        modelo: "",
        ano: "",
        cor: "",
        cavalosDePotencia: "",
        fabricante: "",
        pais: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCarro((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(carro);
        setCarro({
            modelo: "",
            ano: "",
            cor: "",
            cavalosDePotencia: "",
            fabricante: "",
            pais: "",
        });
        onClose();
    };

    return (
        <div className="form-overlay">
            <form className="car-form" onSubmit={handleSubmit}>
                <h2>Cadastrar Novo Carro</h2>
                <input
                    type="text"
                    name="modelo"
                    placeholder="Modelo"
                    value={carro.modelo}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="ano"
                    placeholder="Ano"
                    value={carro.ano}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="cor"
                    placeholder="Cor"
                    value={carro.cor}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="cavalosDePotencia"
                    placeholder="Cavalos de Potência"
                    value={carro.cavalosDePotencia}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="fabricante"
                    placeholder="Fabricante"
                    value={carro.fabricante}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="pais"
                    placeholder="País"
                    value={carro.pais}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Salvar</button>
                <button type="button" onClick={onClose}>
                    Cancelar
                </button>
            </form>
        </div>
    );
};

export default CarForm;
