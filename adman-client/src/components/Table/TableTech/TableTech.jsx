import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { 
    TMContainer,
    TMTable,
    TMTitle,
    //TMSubTitle,
    TMHeader,
    TMHeaderRow,
    TMHeadData,
    TMBody,
    TMBodyRow,
    TMBodyData
 } from './Style-TableTech.jsx';


const TableTech = () => {
    const [Maquinas, setMaquinas] = useState([]);
    const urlEnv = process.env.REACT_APP_URL_HOME;

    useEffect(()=>{
        axios.get(`${urlEnv}/api/Tech`)
            .then( response => {
                setMaquinas(response.data);
            })
            .catch(error => console.error('Error al obtener lista de maáquinas:', error))
    },[urlEnv]);

    return (
        <TMContainer>
            <TMTitle>Lista de Técnicos</TMTitle>
            <TMTable>
                <TMHeader>
                    <TMHeaderRow>
                        <TMHeadData>Id</TMHeadData>
                        <TMHeadData>Técnico</TMHeadData>
                        <TMHeadData>Sector Asignado</TMHeadData>
                    </TMHeaderRow>
                </TMHeader>
                <TMBody>
                    {Maquinas.map((maq)=>(
                        <TMBodyRow key={maq.Id}>
                            <TMBodyData>{maq.Id}</TMBodyData>
                            <TMBodyData>{maq.Tecnico}</TMBodyData>
                            <TMBodyData>{maq.Sector_1}</TMBodyData>
                        </TMBodyRow>
                    ))}
                </TMBody>
            </TMTable>
        </TMContainer>
    );

};

export default TableTech;