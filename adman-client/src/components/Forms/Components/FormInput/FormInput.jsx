import React from 'react';
import {InputForm, InputContainer} from './Style-FormInput';

const FormInput = ({onChange}) => {

    const handleInputChange = (e) =>{
        onChange(e.target.value)
    }
    
    return(
        <InputContainer>
            <InputForm onChange={handleInputChange}/>
        </InputContainer>
    )
};

export default FormInput;