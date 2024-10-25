import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditComanda.css';
//import { request } from 'express';

const EditComanda = ({cod, onClose}) => {
    const [comanda,setComanda] = useState(null);
    const [trabajoRealizado, setTrabajoRealizado] = useState('');
    const [FechaInicio, setFechaInicio] = useState('');
    const [FechaCierre, setFechaCierre] = useState('');
    const [Maquina, setMaquina] = useState('');
    const [Tecnico, setTecnico] = useState('');



    useEffect(() => {
        const urlEnv = process.env.REACT_APP_URL_HOME
        // Fetch comanda details by COD
        axios.get(`${urlEnv}/api/comandas/${cod}`)
            .then(response => {
                console.log(response.data)
                setTrabajoRealizado(response.data.TR || '');
                setFechaInicio(response.data.Fecha || ''); 
                setFechaCierre(response.data.FechaCierre || ''); 
                setMaquina(response.data.MAQ || ''); 
                setTecnico(response.data.Tech1 || '');
                setComanda({cod});               
            })
            .catch(error => {
                console.error('Error fetching comanda details:', error);
            });
    }, [cod]);

    const handleSave = () => {
        const urlEnv = process.env.REACT_APP_URL_HOME
        // Update the comanda
        axios.put(`${urlEnv}/api/comandas/${cod}`, {
            ...comanda,
            TR: trabajoRealizado,
            Estado: comanda.Estado === 'EMITIDO' ? 'EN CURSO' : 'FINALIZADO'
        })
        .then(response => {
            console.log('Comanda updated:', response.data);
            alert('Trabajo Cerrado');
        })
        .catch(error => console.error('Error updating comanda:', error));
    };

    //<p className='titulo'><strong>Editar trabajo</strong></p>
    //<p className='sub-titulo'><strong>Numero de comanda:</strong> {cod}</p>
    return (
        <div className="edit-comanda">
            <form className='edit-comanda-form' onSubmit={e => e.preventDefault()}>
                <p><strong>Fecha: </strong>{new Date(FechaInicio).toLocaleString()}</p>
                <p><strong>Fecha de finalización: </strong>{new Date(FechaCierre).toLocaleString()}</p>
                <p><strong>Máquina: </strong>{Maquina}</p>
                <p><strong>Técnico: </strong>{Tecnico}</p>
                <div className='trabajo-realizado'>
                    <label className='trabajo-realizado-titulo'>Trabajo Realizado</label>
                    <textarea className='trabajo-realizado-textbox'
                        value={trabajoRealizado}
                        onChange={(e) => setTrabajoRealizado(e.target.value)}
                    />
                </div>
                <button className='edit-comanda-button' type="button" onClick={handleSave}>Finalizar trabajo</button>
                <button className='edit-comanda-button' type="button" onClick={onClose}>Cerrar</button>
            </form>
        </div>
    );
};

export default EditComanda;