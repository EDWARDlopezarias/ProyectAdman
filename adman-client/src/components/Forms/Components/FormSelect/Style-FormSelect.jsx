import styled from 'styled-components';

const FormSelectContainer = styled.div`
`;

const Select = styled.select`

    font-size: 15px;
	padding: 5px 10px; 
	width: auto;
	outline: none;
	background: #A7A7A7;
	color: #000000;
	border: 0px solid #C4D1EB;
	border-radius: 11px;
	transition: .3s ease;

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

const Option = styled.option`
`;

export {
    FormSelectContainer,
    Select,
    Option
};