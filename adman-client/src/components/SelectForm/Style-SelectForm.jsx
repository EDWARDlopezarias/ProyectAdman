import styled from 'styled-components';

const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;
    width: 180px;
    background-color: rgb(110, 110, 110);
    border-radius: 20px;
    box-shadow: inset 0px 0px 1px black;
`;

const SelectTitle = styled.label`
    color: white;
    text-align: center;
    font-size: small;
    text-align: center;
`;

const SelectObject = styled.select`
    background-color: rgb(90, 90, 90);
    height: 40px;
    border-radius: 20px;
    text-align: center;
    font-style: italic;
    font-size: medium;
    border:none;

    &:focus {
        border:2px solid #4e4e4e;
        outline:none;
    }
`;

const SelectOption = styled.option`
    font-weight: bold;
    font-size: small;

    &:checked {
        background-color: rgb(80, 80, 80);
    }
`;


export {
    SelectContainer,
    SelectTitle,
    SelectObject,
    SelectOption
};