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
    TMBodyData,
    PagesContainer,
    PagesButton,
    PagesNumber
 } from './Style-TableSuperv.jsx';


const TableSuperv = () => {
    const [supervisores, setSupervisores] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 16;
    const urlEnv = process.env.REACT_APP_URL_HOME;

    useEffect(()=>{
        axios.get(`${urlEnv}/api/supervisores`)
            .then( response => {
                setSupervisores(response.data);
            })
            .catch(error => console.error('Error al obtener lista de maáquinas:', error))
    },[urlEnv]);

    // Calcular los registros para la página actual
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = supervisores.slice(indexOfFirstRecord, indexOfLastRecord);
    const totalPages = Math.ceil(supervisores.length / recordsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <TMContainer>
            <TMTitle>Lista de Supervisores</TMTitle>
            {/* Botones de paginación */}
            <PagesContainer>
                <PagesButton onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    Anterior
                </PagesButton>
                <PagesNumber >Página {currentPage} de {totalPages}</PagesNumber>
                <PagesButton onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    Siguiente
                </PagesButton>
            </PagesContainer>
            <TMTable>
                <TMHeader>
                    <TMHeaderRow>
                        <TMHeadData>Id</TMHeadData>
                        <TMHeadData>Supervisor</TMHeadData>
                        <TMHeadData>Sector Asignado</TMHeadData>
                    </TMHeaderRow>
                </TMHeader>
                <TMBody>
                    {currentRecords.map((sup)=>(
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