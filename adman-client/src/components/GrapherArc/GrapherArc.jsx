import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GraphArc from '../GraphArc/GraphArc';

// Código para saber cantidad entre fechas y filtros
const CountByFechasAndFilters = (fechaInicio, fechaFin, columnbd, valuebd) => {
    const [countfiltered, setCountfiltered] = useState(0);

    useEffect(() => {
        const urlEnv = process.env.REACT_APP_URL_HOME;
        // Función para hacer la consulta al servidor con el rango de fechas
        const fetchCountByFechasAndFilters = async () => {
            try {
                // Convertir a formato ISO
                const formattedFechaInicio = new Date(fechaInicio).toISOString();
                const formattedFechaFin = new Date(fechaFin).toISOString();
                const response = await axios.get(`${urlEnv}/api/comandas/countxfechas`, {
                    params: {
                        fechaInicio: formattedFechaInicio,
                        fechaFin: formattedFechaFin,
                        columnbd,
                        valuebd
                    }  // Enviar las fechas como parámetros de consulta
                });
                setCountfiltered(response.data.countByFechasAndFilters);  // Actualizar el estado con el conteo
            } catch (error) {
                console.error('Error al obtener el conteo de comandas por fechas y filtro', error);
            }
        };

        fetchCountByFechasAndFilters();
    }, [fechaInicio, fechaFin, columnbd, valuebd]);  // Escuchar cambios en las fechas para hacer nuevas consultas

    return countfiltered;
};

// Código para hacer saber cantidad solo entre fechas
const CountByFechas = (fechaInicio, fechaFin) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const urlEnv = process.env.REACT_APP_URL_HOME;

        // Función para hacer la consulta al servidor con el rango de fechas
        const fetchCountByFechas = async () => {
            try {
                // Convertir a formato ISO
                const formattedFechaInicio = new Date(fechaInicio).toISOString();
                const formattedFechaFin = new Date(fechaFin).toISOString();
                const response = await axios.get(`${urlEnv}/api/comandas/count-por-fechas`, {
                    params: { fechaInicio: formattedFechaInicio, fechaFin: formattedFechaFin }
                });

                setCount(response.data.countByFechas);  // Actualizar el estado con el conteo
            } catch (error) {
                console.error('Error al obtener el conteo de comandas por fechas', error);
            }
        };

        fetchCountByFechas();
    }, [fechaInicio, fechaFin]);  // Escuchar cambios en las fechas para hacer nuevas consultas

    return count;
};

// Código para hacer saber cantidad solo entre fechas y un filtro
const GrapherArc = ({ fechaInicio, fechaFin, columnbd, valuebd, title, nombre, color }) => {
    const total = CountByFechas(fechaInicio, fechaFin);
    const filtrado = CountByFechasAndFilters(fechaInicio, fechaFin, columnbd, valuebd);
    const porcentaje = total > 0 ? Math.floor((filtrado / total) * 100) : 0; // Evitar división por cero

    return (
        <GraphArc
            size='200'
            nombre={nombre}
            porcentaje={porcentaje}
            title={title}
            colorBase='#3d3c3c'
            color={color}
            cantidad={filtrado}
            total={total}
        />
    );
};

export default GrapherArc;
