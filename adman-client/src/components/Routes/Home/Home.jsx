// src/components/Routes/Home/Home.js

import React, { useEffect, useState } from 'react';
//import React from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
//import Comanda from '../../Comanda/Comanda';
import './Home.css';

function Home() {
    const [, setComandas] = useState([]);
    const [filteredComandas, setFilteredComandas] = useState([]);
    
    const location = useLocation();
    
    useEffect(() => {
        const urlEnv = process.env.REACT_APP_URL_HOME
        const query = new URLSearchParams(location.search);
        const filter = query.get('filter');
        axios.get(`${urlEnv}/api/comandas`)
            .then(response => {
                setComandas(response.data);
                applyFilter(response.data, filter);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [location.search]);

    const applyFilter = (data, filter) => {
        if (filter === 'last100') {
            const last100Comandas = [...data].slice(-99).reverse();
            setFilteredComandas(last100Comandas);
        } else if (filter === 'emitido') {
            const filtered = data.filter(comanda => comanda.Estado === 'EMITIDO');
            setFilteredComandas(filtered);
        } else if (filter === 'enCurso') {
            const filtered = data.filter(comanda => comanda.Estado === 'EN CURSO');
            setFilteredComandas(filtered);
        } else {
            setFilteredComandas(data);
        }
    };

    return (
        <div className="home-container">
            {filteredComandas.map(comanda => (
                <Comanda 
                    key={comanda.id}
                    maquina={comanda.MAQ}
                    fecha={comanda.Fecha}
                    supervisor={comanda.Supervisor}
                    motivo={comanda.Motivo}
                    estado={comanda.Estado}
                    trabajoRealizado={comanda.TR}
                    tech1={comanda.Tech1}
                    cod={comanda.COD}
                    sector={comanda.Sector}
                    criticidad={comanda.Criticidad}
                />
            ))}
        </div>
    );
}

export default Home;