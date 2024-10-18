import React, { useEffect } from "react";
import './Supervisor.css';
import SelectList from "../../PedidoDetail/Components/SelectList";
//import SupervisoresArray from "../../../BD-test/Arrays.js";
import { useState } from "react";
import axios from 'axios'


const urlEnv = process.env.REACT_APP_URL_HOME;


function Supervisor(){
    const [SelectValue, setSelectValue] = useState('');
    const [Tecnicos, setTecnicos] = useState([]);
    
     
    const handleSelectChange = (value) =>{
        setSelectValue(value)
        console.log(SelectValue)
    }

    useEffect(()=>{
        axios.get(`${urlEnv}/api/Tech`)
            .then(response => setTecnicos(response.data))
            .catch(error => console.error('Error al obtener Tecnicos:', error))

    },[])
    return(
        <div className="contenedor-supervisor">
            <SelectList Array={Tecnicos} onChange={handleSelectChange} column='Tecnicos'/>
        </div>
    )
}

export default Supervisor;