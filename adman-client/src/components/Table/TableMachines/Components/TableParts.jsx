import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';
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
    TMBodyData,
    TMButton
 } from './Style-TableParts';


const TableParts = () => {
    const [parts, setParts] = useState([]);
    const urlEnv = process.env.REACT_APP_URL_HOME;
    const {cod} = useParams()
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`${urlEnv}/api/Part/${cod}`)
            .then( response => {
                setParts(response.data);
            })
            .catch(error => console.error('Error al obtener lista de partes:', error))
    },[urlEnv, cod]);

    const HadleOnClick = () => {
        navigate('/Machine/Table');
    };

    return (
        <TMContainer>
            <TMTitle>Lista de Máquinas</TMTitle>
            <TMTable>
                <TMHeader>
                    <TMHeaderRow>
                        <TMHeadData>ID</TMHeadData>
                        <TMHeadData>Parte de máquina</TMHeadData>
                    </TMHeaderRow>
                </TMHeader>
                <TMBody>
                    {parts.map((part)=>(
                        <TMBodyRow key={part.Id}>
                            <TMBodyData>                                
                                    {part.Id}
                            </TMBodyData>
                            <TMBodyData>{part.COD_PART}</TMBodyData>
                        </TMBodyRow>
                    ))}
                </TMBody>
            </TMTable>
            <TMButton type='button' onClick={HadleOnClick}>Crear Parte</TMButton>
        </TMContainer>
    );

};

export default TableParts;