import React, { useState, useEffect } from 'react';
import {
    CardContainer,
    CardTitle,
    CardSubTitle,
    LabelContainer,
    Label,
    TableContainer,
    CardTable,
    TableHeader,
    TableHeadrow,
    TableHeadCell,
    TableBody,
    TableBodyRow,
    TableBodyCell,
    LabelTitle
} from './Style-UserCard.jsx';
import axios from 'axios';

const UserCard = ({name}) => {
    const [CountRequest, setCountRequest] = useState([]);
    const [Tecnicos, setTecnicos] = useState([])
    const [Trabajo, setTrabajo] = useState([])
    const [TablaState, setTablaState] = useState(true);
    const [WorkState, setWorkState] = useState(true);
    
    useEffect (()=>{
        const urlEnv = process.env.REACT_APP_URL_HOME;
        const userCard = name
        const estadoCard = 'EMITIDO'

        const fetchCountxuser = async () => {
            try {
                const response = await axios.get(`${urlEnv}/api/comandas/pedidoxsuser`, {
                    params: {
                        user: userCard,
                        estado: estadoCard
                    }
                });
                // Si la respuesta es un array vacío o no hay trabajos
                if (response.data.length === 0) {
                    setTablaState(false);
                    //setCountRequest("Técnico al día, sin trabajos pendientes");
                } else {
                    setCountRequest(response.data);
                }
                
            } catch (error) {
                console.log('error.log de countxuser', error.data)
                console.error('Error al obtener lista de trabajos de: ',name, error)
            }
        };                
        
        fetchCountxuser();
        axios.get(`${urlEnv}/api/Tech`)
          .then(response => setTecnicos(response.data))
          .catch(error => console.error('Error al obtener Tecnicos:',name, error))
        
          axios.get(`${urlEnv}/api/comandas/ultimotrabajo/${name}`)
          .then(response => {
                
                if (response.data === '') {
                    setWorkState(false);
                } else {
                    setTrabajo(response.data);
                }
            })
          .catch(error => console.error('Error al obtener ultima comanda de:',name, error))


    },[name],Tecnicos, Trabajo)
    const Person = Tecnicos.find(tecnico => tecnico.Tecnico === name);
    const SectorPerson = Person ? Person.Sector_1 : null;

    return(
        <CardContainer>
            <CardTitle>{name}</CardTitle>
            <LabelContainer>
                <LabelTitle>Sector Asignado</LabelTitle>
                <Label>{SectorPerson}</Label>
                <LabelTitle>Trabajo en curso</LabelTitle>
                { WorkState ? (
                    <Label>{Trabajo.COD}</Label>
                ) : (
                    <Label>Sin trabajo en curso</Label>
                )}
            </LabelContainer>
            <CardSubTitle>Lista de trabajos pendientes</CardSubTitle>
            <TableContainer>
                <CardTable>
                    <TableHeader>
                        <TableHeadrow>
                            <TableHeadCell>Código</TableHeadCell>
                            <TableHeadCell>Máquina</TableHeadCell>
                            <TableHeadCell>Fecha</TableHeadCell>
                        </TableHeadrow>
                    </TableHeader>
                        <TableBody>
                            {TablaState ? ( 
                                
                                CountRequest.map((pedido) => (
                                <TableBodyRow key={pedido.id}>
                                    <TableBodyCell>{pedido.COD}</TableBodyCell>
                                    <TableBodyCell>{pedido.MAQ}</TableBodyCell>
                                    <TableBodyCell>{new Date(pedido.Fecha).toLocaleDateString()}</TableBodyCell>
                                </TableBodyRow>
                            ))) : (
                                <TableBodyRow>
                                    <TableBodyCell>N/A</TableBodyCell>
                                    <TableBodyCell>N/A</TableBodyCell>
                                    <TableBodyCell>N/A</TableBodyCell>
                                </TableBodyRow>
                            )
                            }
                        </TableBody>
                </CardTable>
            </TableContainer>
        </CardContainer>
    )
}

export default UserCard;