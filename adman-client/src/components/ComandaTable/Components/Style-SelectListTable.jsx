import styled from "styled-components"

const SelectContainer = styled.div`
    display:flex;
    justify-content:center;
`;

const Select = styled.select`
    background-color:#1e48645c;
    border:none;
    padding-left:10px;
    border-radius:10px 0px 0px 10px;
    box-shadow:inset 0px 0px 2px 2px #00000061;
    color:#e2e1e1;
    transition:ease-out 0.1s ;
    font-size:17px;
    width:110px;
    height:35px;
    
    &:hover{
        box-shadow:inset 0px 0px 4px 4px #00000061;
    }
    
    &:focus {
        border:none;
        outline:none;
    }

    @media (max-width:850px) {
        font-size:14px;
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
