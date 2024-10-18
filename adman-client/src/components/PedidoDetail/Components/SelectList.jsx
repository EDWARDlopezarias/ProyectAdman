import React from "react";
import {
    SelectContainer,
    Select,
    Option
} from "./Style-SelectList";

const SelectList = ({Array, onChange, column, defaultValue}) => {

    const handleSelectChange = (e) =>{
        onChange(e.target.value);
    }
    return (
        <SelectContainer>
            <Select onChange={handleSelectChange} >
                <Option value={defaultValue}>{defaultValue}</Option>
                {Array.map((option) => (
                    <Option key={option.Id} value={option[column]}>{option[column]}</Option>
                ))}
            </Select>
        </SelectContainer>
    )

}

export default SelectList;