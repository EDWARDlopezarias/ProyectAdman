import React from "react";
import {
    SelectContainer,
    Select,
    Option
} from "./Style-SelectListTable";

const SelectList = ({Array, onChange, column, finder}) => {

    const handleSelectChange = (e) =>{
        const ValueFind = Array.find(option => option[column] === e.target.value)[finder];
        onChange(ValueFind);
    }
    
    return (
        <SelectContainer>
            <Select onChange={handleSelectChange} >
                {Array.map((option) => (
                    <Option key={option.Id} value={option[column]}>{option[column]}</Option>
                ))}
            </Select>
        </SelectContainer>
    )

}

export default SelectList;