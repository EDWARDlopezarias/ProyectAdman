import React from 'react';
import './SelectForm.css';


const SelectForm = ({title, value, firstvalue, fn, bd, column}) =>{

    return(
        <div className='select-container'>
            <label className='select-title'>{title}</label>
            <select value={value} onChange={fn} required className='options-container'>
                <option value="" className='option-item'>{firstvalue}</option>
                {bd.map((maq) => (
                    <option key={maq.Id} value={maq[column]}className='option-item'>{maq[column]}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectForm;