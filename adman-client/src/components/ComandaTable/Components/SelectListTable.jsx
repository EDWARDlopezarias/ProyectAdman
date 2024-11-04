import React from "react";
import {
    SelectContainer,
    Select,
    Option
} from "./Style-SelectListTable";

const SelectList = ({Array, onChange, column, finder, secondFinder}) => {

    const handleSelectChange = (e) =>{
        const ValueFind = Array.find(option => option[column] === e.target.value)[finder];
        const ValueType = Array.find(option => option[column] === e.target.value)[secondFinder];
        onChange(ValueFind, ValueType);
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