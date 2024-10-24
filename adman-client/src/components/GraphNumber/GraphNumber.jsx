import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    NumberContainer,
    NumberTitle,
    NumberValue,
    NumberName
} from './Style-GraphNumber.jsx'

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
        <NumberContainer>
            <NumberTitle>{title}</NumberTitle>
            <NumberValue $Color={color} > {count} </NumberValue>
            <NumberName >{nombre}</NumberName>
        </NumberContainer>
    );
}

export default GraphNumber;