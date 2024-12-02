import styled from "styled-components";

const InputForm = styled.input`
    font-size: 18px;
	padding: 5px 10px;
	width: 100%;
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
`;

const InputContainer = styled.div`
    display: flex;
	align-items: center;
	position: relative;
	max-width: 100%;
`;

export{InputForm, InputContainer};