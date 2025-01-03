import React, {useState, useEffect} from "react";
import "./CarForm.css";

const CarForm = ({initialData = null, onSubmit, onClose}) => {
    const [carro, setCarro] = useState({
        id: null,
        modelo: "",
        ano: "",
        cor: "",
        cavalosDePotencia: "",
        fabricante: "",
        pais: "",
    });

    useEffect(() => {
        if (initialData) {
            setCarro(initialData);
        }
    }, [initialData]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setCarro((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSubmit = {...carro};
        if (!initialData) {
            delete dataToSubmit.id;
        }
        onSubmit(dataToSubmit);
        onClose();
    }

    return (
        <div className="form-overlay">
            <form className="car-form" onSubmit={handleSubmit}>
                <h2>{initialData ? "Editar Carro" : "Cadastrar Novo Carro"}</h2>
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
