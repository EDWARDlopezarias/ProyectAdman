import React, { useEffect, useState } from "react";
import {GridContainer} from './Style-GridUsers.jsx'
import axios from "axios";
import UserCard from '../../Cards/UserCard/UserCard.jsx'

const urlEnv = process.env.REACT_APP_URL_HOME;

function GridUSers() {
    const [Tecnicos, setTecnicos] = useState([]);    
     

    useEffect(()=>{
        axios.get(`${urlEnv}/api/Tech`)
            .then(response => setTecnicos(response.data))
            .catch(error => console.error('Error al obtener Tecnicos:', error))

    },[])


    return(
        <GridContainer>
            {Tecnicos.map((tecnico) => (
                <UserCard key={tecnico.Id} name={tecnico.Tecnico}/>
            ))}
        </GridContainer>
    )
}

export default GridUSers;