import styled from "styled-components";

const FormContainer = styled.div`
    `;

const FormTitle = styled.div`
    font-size:70px;
    font-weight:600;
    letter-spacing: -2px;
    color:#ffff;
        
    @media (max-width: 600px) {
        text-align:center;
        font-size:45px;
    }
`;

const FormMain = styled.form`
    flex-direction:column;
    padding:8px 10px;
    width:550px;
    margin:auto;
    border-radius:7px;
    box-shadow:0px 1px 8px 1px #000;

    @media (max-width: 600px) {
        font-size:15px;
        padding:5px 10px;
        margin:1%;
        width:auto;
    }
`;

const FormSubTittle = styled.div`
    font-size:20px;
    font-weight:500;
    letter-spacing: -0.5px;
    color:#ffff;
        
    @media (max-width: 600px) {
        font-size:15px;
    }
`;

const FormButton = styled.button`
    font-size: 15px;
	padding: 5px 10px;
    margin-top:15px;
    margin-bottom:5px; 
	width: auto;
	outline: none;
	background: #A7A7A7;
	color: #000000;
	border: 0px solid #C4D1EB;
	border-radius: 11px;
	transition: .3s ease;
    align-content:center;
    box-shadow:0px 1px 4px 1px;
    
    &:focus {
        background: #F2F2F2;
        border: 0px solid #5A7EC7;
        border-radius: 11px;
    }
    
    &::placeholder {
        color: #8F9CB2;
    }
    
    &:hover {
        box-shadow:0px 1px 10px 1px;
    }
`;

const FormSection = styled.div`
    display:flex;
    justify-content:right;
`;

export {
    FormContainer,
    FormMain,
    FormTitle,
    FormSubTittle,
    FormButton,
    FormSection
}