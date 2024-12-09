import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    InfoContainer,
    PagesContainer,
    PagesButton,
    PagesNumber,
    InfoText
 } from './Style-TableMachines.jsx';
import { FinderContainer, FindWork } from '../../ComandaTable/style-ComandaTable.jsx';


const TableMachines = () => {
    const [Maquinas, setMaquinas] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 16;
    const urlEnv = process.env.REACT_APP_URL_HOME;
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`${urlEnv}/api/maquinas`)
            .then( response => {
                setMaquinas(response.data);
            })
            .catch(error => console.error('Error al obtener lista de maáquinas:', error))
    },[urlEnv]);

    // Calcular los registros para la página actual
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = Maquinas.slice(indexOfFirstRecord, indexOfLastRecord);
    const totalPages = Math.ceil(Maquinas.length / recordsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const handleClick = (cod) => {
        navigate(`/Detail/Machine/${cod}`);
      };

    return (
        <TMContainer>
            <TMTitle>Lista de Máquinas</TMTitle>
            <InfoContainer>
                <InfoText>Registros Totales: {Maquinas.length}</InfoText>
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
            </InfoContainer>
            <TMTable>
                <TMHeader>
                    <TMHeaderRow>
                        <TMHeadData>Id</TMHeadData>
                        <TMHeadData>Codigo de máquina</TMHeadData>
                        <TMHeadData>Máquina</TMHeadData>
                        <TMHeadData>Sector</TMHeadData>
                    </TMHeaderRow>
                </TMHeader>
                <TMBody>
                    {currentRecords.map((maq)=>(
                        <TMBodyRow key={maq.Id}>
                            <TMBodyData>
                                <FinderContainer>
                                    <FindWork onClick={() => handleClick(maq.CODMAQUINA)}>
                                        <svg viewBox="0 0 24 24">
                                            <path d="M10,2A8,8,0,1,0,18,10,8,8,0,0,0,10,2Zm0,14A6,6,0,1,1,16,10,6,6,0,0,1,10,16Z"></path>
                                            <path d="M21.71,20.29,18,16.59a9.91,9.91,0,0,1-1.41,1.41l3.71,3.71a1,1,0,0,0,1.41-1.41Z"></path>
                                        </svg>
                                    </FindWork>
                                    {maq.Id}
                                </FinderContainer>
                            </TMBodyData>
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