import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './GraphNumber.css';

const GraphNumber = ({title, nombre, color, columnbd, valuebd}) =>{

    const [count, setCount] = useState(0);
    
    useEffect(() => {
        const urlEnv = process.env.REACT_APP_URL_HOME;
        
        const fetchCountByEstado = async () => {
            try {
                const response = await axios.get(`${urlEnv}/api/comandas/count/dataxcolumn`, {
                    params: { columnbd, valuebd }
                });
                setCount(response.data.countByEstado);  // Actualizar el estado con el conteo
            } catch (error) {
                console.error(`Error al obtener el conteo de comandas en estado ${valuebd}`, error);
            }
        };
    
        fetchCountByEstado();
    }, [valuebd, columnbd]);  // Escuchar cambios en el estado para hacer nuevas consultas

    return(
        <div className='number-container'>
            <p className='number-title'>{title}</p>
            <p className='number-value' style={{color: color}} > {count} </p>
            <p className='number-nombre'>{nombre}</p>
        </div>
    );
}

export default GraphNumber;