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
 } from "./Style-TableMAchines";


const TableMachines = () => {
    const [Maquinas, setMaquinas] = useState([]);
    const urlEnv = process.env.REACT_APP_URL_HOME;

    useEffect(()=>{
        axios.get(`${urlEnv}/api/maquinas`)
            .then( response => {
                setMaquinas(response.data);
            })
            .catch(error => console.error('Error al obtener lista de maáquinas:', error))
    },[urlEnv]);

    return (
        <TMContainer>
            <TMTitle>Lista de Máquinas</TMTitle>
            <TMTable>
                <TMHeader>
                    <TMHeaderRow>
                    <TMHeadData>L</TMHeadData>
                        <TMHeadData>Id</TMHeadData>
                        <TMHeadData>Codigo de máquina</TMHeadData>
                        <TMHeadData>Máquina</TMHeadData>
                        <TMHeadData>Sector</TMHeadData>
                    </TMHeaderRow>
                </TMHeader>
                <TMBody>
                    {Maquinas.map((maq)=>(
                        <TMBodyRow key={maq.Id}>
                            <TMBodyData>L</TMBodyData>
                            <TMBodyData>{maq.Id}</TMBodyData>
                            <TMBodyData>{maq.CODMAQUINA}</TMBodyData>
                            <TMBodyData>{maq.MAQUINA}</TMBodyData>
                            <TMBodyData>{maq.Sector}</TMBodyData>
                        </TMBodyRow>
                    ))}
                </TMBody>
            </TMTable>
        </TMContainer>
    );

};

export default TableMachines;