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
 } from './Style-TableSuperv.jsx';


const TableSuperv = () => {
    const [Maquinas, setMaquinas] = useState([]);
    const urlEnv = process.env.REACT_APP_URL_HOME;

    useEffect(()=>{
        axios.get(`${urlEnv}/api/supervisores`)
            .then( response => {
                setMaquinas(response.data);
            })
            .catch(error => console.error('Error al obtener lista de maáquinas:', error))
    },[urlEnv]);

    return (
        <TMContainer>
            <TMTitle>Lista de Supervisores</TMTitle>
            <TMTable>
                <TMHeader>
                    <TMHeaderRow>
                        <TMHeadData>Id</TMHeadData>
                        <TMHeadData>Supervisor</TMHeadData>
                        <TMHeadData>Sector Asignado</TMHeadData>
                    </TMHeaderRow>
                </TMHeader>
                <TMBody>
                    {Maquinas.map((sup)=>(
                        <TMBodyRow key={sup.Id}>
                            <TMBodyData>{sup.Id}</TMBodyData>
                            <TMBodyData>{sup.NyAsup}</TMBodyData>
                            <TMBodyData>{sup.SECsup}</TMBodyData>
                        </TMBodyRow>
                    ))}
                </TMBody>
            </TMTable>
        </TMContainer>
    );

};

export default TableSuperv;