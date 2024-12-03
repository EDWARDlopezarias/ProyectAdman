import React from 'react';
import {
    FormSelectContainer,
    Select,
    Option
} from './Style-FormSelect';

const FormSelect = ({Array, onChange, column, defaultValue}) => {

    const handleSelectChange = (e) =>{
        onChange(e.target.value);
    }

    return (
        <FormSelectContainer>
            <Select onChange={handleSelectChange} >
                <Option value={defaultValue}>{defaultValue}</Option>
                {Array.map((option) => (
                    <Option key={option.Id} value={option[column]}>{option[column]}</Option>
                ))}
            </Select>
        </FormSelectContainer>
    );
};

export default FormSelect;