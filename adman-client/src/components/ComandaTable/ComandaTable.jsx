import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// Importa styled-components
import {
    TableContainer,
    CustomTable,
    TableCell,
    TableRowHeader,
    TableRowBody,
    TableData,
    CeldaEstado,
    CeldaUrgencia,
    TableHeaders,
    FindWork,
    FinderContainer,
    TableRowfilters,
    Tablefilter,
    SearchBarButton,
    SearchBarContainer,
    SearchBarInput,
    ArrowIcon,
    InfoContainer,
    PagesContainer,
    PagesButton,
    PagesNumber,
    InfoText
} from './style-ComandaTable.jsx'; // Supongamos que lo exportas de este archivo

import SelectListTable from './Components/SelectListTable.jsx'


const ComandaTable = () => {
    const [Comandas, setComandas] = useState([]);
    const [filteredComandas, setFilteredComandas] = useState([]);    
    const [SelectValue, setSelectValue] = useState('COD');
    const [searchText, setSearchText] = useState('');
    const [TypeValue, setTypeValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 20;
    const urlEnv = process.env.REACT_APP_URL_HOME;
    const navigate = useNavigate();
    
    useEffect(() => {
        // Obtener las comandas desde la API
        axios.get(`${urlEnv}/api/comandas`)
            .then(response => {
                setComandas(response.data);
                setFilteredComandas(response.data);
            })
            .catch(error => console.error('Error al obtener las comandas:', error));
    }, [urlEnv]);
    
    const Encabezados = [
        {
            "Id": 1,
            "Header": "Código",
            "HeaderBD": "COD",
            "Type":"number"
        },
        {
            "Id": 2,
            "Header": "Estado",
            "HeaderBD": "Estado",
            "Type":"string"
        },
        {
            "Id": 3,
            "Header": "Máquina",
            "HeaderBD": "MAQ",
            "Type":"string"
        },
        {
            "Id": 4,
            "Header": "Fecha",
            "HeaderBD": "Fecha",
            "Type":"date"
        },
        {
            "Id": 5,
            "Header": "Criticidad",
            "HeaderBD": "Criticidad",
            "Type":"string"
        },
        {
            "Id": 6,
            "Header": "Sector",
            "HeaderBD": "Sector",
            "Type":"string"
        },
        {
            "Id": 7,
            "Header": "Motivo",
            "HeaderBD": "Motivo",
            "Type":"string"
        },
        {
            "Id": 8,
            "Header": "T. Realizado",
            "HeaderBD": "TR",
            "Type":"string"
        }
    ]

    // Calcular los registros para la página actual
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = filteredComandas.slice(indexOfFirstRecord, indexOfLastRecord);
    const totalPages = Math.ceil(filteredComandas.length / recordsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const handleFilterClick = (estate) =>{

        if (estate === 'TODO') {
            setFilteredComandas(Comandas);
            setCurrentPage(1)
        } else{
            axios.get(`${urlEnv}/api/comandas`,{
                params: {estado: estate}
            })
            .then(response => {
                setFilteredComandas(response.data);
                setCurrentPage(1)
            })
            .catch(error => console.error('Error al obtener las comandas:', error));
        }
        
    }

    const handleClick = (cod) => {
        navigate(`/Detail/${cod}`);
      };

    const handleSearch = () => {
        axios.get(`${urlEnv}/api/comandas/find/dataxcolumn`,{
            params:{
                columnbd: SelectValue,
                valuebd: searchText,
                typeValue: TypeValue
            }
        })
        .then(response => {
            setFilteredComandas(response.data);
        })
        .catch(error => {
            error.data === undefined ? 
            (
                setFilteredComandas([])
            ) :
            (
                console.error('Error al obtener lista de pedidos filtrados', error.data)
            )
            
        })

    };

    const handleSelectChange = (value, typeValue) =>{
        setSelectValue(value);
        setTypeValue(typeValue);
    }


    return (
        <TableContainer>
                {/* Buscador */}
                <SearchBarContainer>
                    <SelectListTable 
                        Array={Encabezados}
                        onChange={handleSelectChange}
                        column='Header'
                        finder='HeaderBD'
                        secondFinder='Type'
                    />
                    <SearchBarInput
                        type={TypeValue}
                        placeholder="Buscar..."
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value.slice(0, 30));
                        }}
                        onKeyDown={(e) => {
                            if (e.key ==='Enter') {
                                handleSearch();
                            }
                        }}
                    />
                    <SearchBarButton onClick={handleSearch}>
                        <ArrowIcon>→</ArrowIcon>
                    </SearchBarButton>
                </SearchBarContainer>
                {/* Botones de filtros */}
                <TableRowfilters>
                    <Tablefilter>
                    </Tablefilter>
                    <Tablefilter>
                        <CeldaEstado onClick={() => handleFilterClick('TODO')} $estado='EMITIDO'>Todo</CeldaEstado>
                    </Tablefilter>
                    <Tablefilter>
                        <CeldaEstado onClick={() => handleFilterClick('EMITIDO')} $estado='EMITIDO'>Emitido</CeldaEstado>
                    </Tablefilter>
                    <Tablefilter>
                        <CeldaEstado onClick={() => handleFilterClick('EN ESPERA')} $estado='EN ESPERA'>En espera</CeldaEstado>
                    </Tablefilter>
                    <Tablefilter>
                        <CeldaEstado onClick={() => handleFilterClick('FINALIZADO')} $estado='FINALIZADO'>Finalizado</CeldaEstado>
                    </Tablefilter>
                    <Tablefilter>
                        <CeldaEstado onClick={() => handleFilterClick('EN CURSO')} $estado='EN CURSO'>En curso</CeldaEstado>
                    </Tablefilter>
                </TableRowfilters>
                <InfoContainer>
                    <InfoText>Registros Totales: {filteredComandas.length}</InfoText>
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
            <CustomTable>
                <TableHeaders>
                    <TableRowHeader>
                        <TableCell>Código</TableCell>
                        <TableCell>Estado</TableCell>
                        <TableCell>Máquina</TableCell>
                        <TableCell>Fecha</TableCell>
                        <TableCell>Criticidad</TableCell>
                        <TableCell>Sector</TableCell>
                    </TableRowHeader>
                </TableHeaders>
                <tbody>
                    {currentRecords.map((comanda) => (
                        <TableRowBody key={comanda.id}>
                            <TableData >
                                <FinderContainer>
                                    <FindWork onClick={() => handleClick(comanda.COD)}>
                                    <svg viewBox="0 0 24 24">
                                        <path d="M10,2A8,8,0,1,0,18,10,8,8,0,0,0,10,2Zm0,14A6,6,0,1,1,16,10,6,6,0,0,1,10,16Z"></path>
                                        <path d="M21.71,20.29,18,16.59a9.91,9.91,0,0,1-1.41,1.41l3.71,3.71a1,1,0,0,0,1.41-1.41Z"></path>
                                    </svg>
                                    </FindWork>
                                    {comanda.COD}
                                </FinderContainer>
                            </TableData>
                            <TableData >
                                <CeldaEstado $estado={comanda.Estado}>{comanda.Estado}</CeldaEstado>
                            </TableData>
                            <TableData >{comanda.MAQ}</TableData>
                            <TableData>{new Date(comanda.Fecha).toLocaleDateString()}</TableData>
                            <TableData>
                                <CeldaUrgencia $urgencia={comanda.Criticidad}>{comanda.Criticidad}</CeldaUrgencia>                                
                            </TableData>
                            <TableData>{comanda.Sector}</TableData>
                        </TableRowBody>
                    ))}
                </tbody>
            </CustomTable>
        </TableContainer>
    );
};

export default ComandaTable;
