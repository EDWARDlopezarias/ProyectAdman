import styled from 'styled-components';

const SelectContainer = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
`;

const SelectTitle = styled.label`
    margin-top:20px;
    color: white;
    text-align: center;
    font-size: 17px;
    letter-spacing:-0.4px;
    padding:0px;
`;

const SelectObject = styled.select`
    font-size: 15px;
	padding: 5px 10px; 
	outline: none;
	background: #A7A7A7;
	color: #000000;
	border: 0px solid #C4D1EB;
	border-radius: 11px;
	transition: .3s ease;
    margin-top:0px;


    &:focus {
        background: #F2F2F2;
        border: 0px solid #5A7EC7;
        border-radius: 11px;
    }

    &::placeholder {
        color: #8F9CB2;
    }

    @media (max-width:850px) {
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