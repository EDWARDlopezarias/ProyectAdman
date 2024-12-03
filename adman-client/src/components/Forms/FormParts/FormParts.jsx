import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import {
    FormContainer,
    FormMain,
    FormTitle,
    FormSubTittle,
    FormButton,
    FormSection
} from './Style-FormParts';
import FormInput from '../Components/FormInput/FormInput';
import FormSelect from'../Components/FormSelect/FormSelect';

const FormParts = () => {
    const [maquinas, setMaquinas] = useState([]);
    const [, setSelectValue] = useState('');

    useEffect(()=>{
        const urlEnv = process.env.REACT_APP_URL_HOME

        axios.get(`${urlEnv}/api/maquinas`)
            .then(response => setMaquinas(response.data))
            .catch(error => console.error('Error al obtener máquinas:', error));

    },[])

    const handleSelectChange = (value) =>{
        setSelectValue(value)
      }

    return (
        <FormContainer>
            <FormTitle>Creación de parte</FormTitle>
            <FormMain>
                <FormSubTittle>Máquina</FormSubTittle>
                <FormSelect
                    Array={maquinas}
                    onChange={handleSelectChange}
                    column='CODMAQUINA'
                    defaultValue={'Elija Máquina'}
                />
                <FormSubTittle>Parte de máquina</FormSubTittle>
                <FormInput />
                <FormSection>
                    <FormButton>Cargar información</FormButton>
                </FormSection>
            </FormMain>
        </FormContainer>
    )
}

export default FormParts;