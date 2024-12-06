import React from 'react';
import {
    SelectContainer,
    SelectTitle,
    SelectObject,
    SelectOption
} from './Style-SelectForm.jsx';


const SelectForm = ({title, value, firstvalue, fn, bd, column}) =>{

    return(
        <SelectContainer>
            <SelectTitle>{title}</SelectTitle>
            <SelectObject value={value} onChange={fn}>
                <SelectOption value="">{firstvalue}</SelectOption>
                {bd.map((maq) => (
                    <SelectOption key={maq.Id} value={maq[column]}>{maq[column]}</SelectOption>
                ))}
            </SelectObject>
        </SelectContainer>
    )
}

export default SelectForm;