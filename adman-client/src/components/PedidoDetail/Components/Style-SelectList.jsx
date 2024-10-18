import styled from "styled-components"

const SelectContainer = styled.div`
    display:flex;
    justify-content:center;
`;

const Select = styled.select`
    background-color:#344975;
    padding:5px;
    height:25px;
    font-size:10px;
    border-radius:12px;
    border:none;
    box-shadow:inset 0px 0px 2px 2px #00000061;
    color:#e2e1e1;
    transition:ease-out 0.1s ;
    
    &:hover{
        box-shadow:inset 0px 0px 4px 4px #00000061;
    }
    
    &:focus {
        border:none;
        outline:none;
    }

    @media (max-width:850px) {
        width:82px;
    }
`;

const Option = styled.option`
    background-color:#fff;
    font-size:medium;
    color:#000;
`;

export {
    SelectContainer,
    Select,
    Option
}
