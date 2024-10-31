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
    ArrowIcon
} from './style-ComandaTable.jsx'; // Supongamos que lo exportas de este archivo

import SelectListTable from './Components/SelectListTable.jsx'


const ComandaTable = () => {
    const [Comandas, setComandas] = useState([]);
    const [filteredComandas, setFilteredComandas] = useState([]);    
    const [SelectValue, setSelectValue] = useState('');
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

    const handleFilterClick = (estate) =>{

        if (estate === 'TODO') {
            setFilteredComandas(Comandas);
        } else{
            axios.get(`${urlEnv}/api/comandas`,{
                params: {estado: estate}
            })
            .then(response => {
                setFilteredComandas(response.data);
            })
            .catch(error => console.error('Error al obtener las comandas:', error));
        }
        
    }

    const handleClick = (cod) => {
        navigate(`/Detail/${cod}`);
      };

    const [searchText, setSearchText] = useState("");      
    const handleSearch = () => {
        console.log("Texto de búsqueda:", searchText);
    };

    const handleSelectChange = (value) =>{
        setSelectValue(value);
    }

    const Encabezados = [
        {
            "Id": 1,
            "Header": "Código",
            "HeaderBD": "COD"
        },
        {
            "Id": 2,
            "Header": "Estado",
            "HeaderBD": "Estado"
        },
        {
            "Id": 3,
            "Header": "Máquina",
            "HeaderBD": "MAQ"
        },
        {
            "Id": 4,
            "Header": "Fecha",
            "HeaderBD": "Fecha"
        },
        {
            "Id": 5,
            "Header": "Criticidad",
            "HeaderBD": "CRITICIDAD"
        },
        {
            "Id": 6,
            "Header": "Sector",
            "HeaderBD": "Sector"
        }
    ]


    return (
        <TableContainer>
                <SearchBarContainer>
                    <SelectListTable 
                        Array={Encabezados}
                        onChange={handleSelectChange}
                        column='Header'
                        defaultValue={Encabezados[0].Header}
                    />
                    <SearchBarInput
                        type="text"
                        placeholder="Buscar..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value.slice(0, 30))}
                    />
                    <SearchBarButton onClick={handleSearch}>
                        <ArrowIcon>→</ArrowIcon>
                    </SearchBarButton>
                </SearchBarContainer>
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
                    {filteredComandas.map((comanda) => (
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
