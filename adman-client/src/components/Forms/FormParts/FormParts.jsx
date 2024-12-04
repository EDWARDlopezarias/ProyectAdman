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
import { useNavigate } from 'react-router-dom';

const FormParts = () => {
    const [maquinas, setMaquinas] = useState([]);
    const [selectValue, setSelectValue] = useState('');
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        const urlEnv = process.env.REACT_APP_URL_HOME

        axios.get(`${urlEnv}/api/maquinas`)
            .then(response => setMaquinas(response.data))
            .catch(error => console.error('Error al obtener máquinas:', error));

    },[])

    const handleSelectChange = (value) =>{
        setSelectValue(value)
    }

    const handleClickButton = async () => {
        const urlEnv = process.env.REACT_APP_URL_HOME

        try {
            const newPart = {
                CODMAQUINA: selectValue,
                COD_PART:inputValue
            };
            await axios.post(`${urlEnv}/api/Part`, newPart);
            alert('Parte creada exitosamente')

            setInputValue('');
            setSelectValue('')
            navigate('/Machines');

        } catch (error) {
            console.error('Error creando parte', error);
            console.log(error)
            alert('Error al crear parte');
        }

        alert(`Parte: ${inputValue} de máquina ${selectValue}`)

    };

    const handleInputChange = (value) => {
        setInputValue(value)
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
                <FormInput onChange={handleInputChange} />
                <FormSection>
                    <FormButton type='button' onClick={handleClickButton}>Cargar información</FormButton>
                </FormSection>
            </FormMain>
        </FormContainer>
    )
}

export default FormParts;