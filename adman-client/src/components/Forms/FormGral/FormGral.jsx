import React from 'react';
import {
    FormContainer,
    FormMain,
    FormTitle
} from './Style-FormGral';
import FormInput from '../Components/FormInput/FormInput';

const FormGral = () => {

    return (
        <FormContainer>
            <FormMain>
                <FormTitle>Titulo de Formulario</FormTitle>
                <FormInput />
            </FormMain>
        </FormContainer>
    )
}

export default FormGral;