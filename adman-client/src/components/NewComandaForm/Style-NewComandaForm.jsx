import styled from 'styled-components'

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 80px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    width: 100%;
    padding: 20px;
    box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.89);
    border-radius: 8px;
    background-color: rgba(36, 37, 41, 0.425);
    backdrop-filter: blur(9px);
    -webkit-backdrop-filter: blur(9px);

    @media (max-width: 600px) {
    .form {
        border-radius: 0px;
    }
}
`;

const CodPedido = styled.h2`
    margin-bottom: 20px;
    background-color: rgba(97, 97, 97, 0.247);
    border-radius: 30px;
    padding-top: 5px;
    text-align: center;
    box-shadow: inset 2px 2px 3px black;
    color:#fff;
    letter-spacing:1px;
    font-size:large;

    @media (max-width: 600px) {
    
    .codigoComanda {
        border-radius: 10px;
        margin-left: 0;
        margin-right: 0;
        text-align: center;
    }
}
`;

const SelectContainer = styled.div`
    
`;

const Section = styled.div`
    height: 150px;
    display: flex;
    flex-direction: column;
    background-color: rgb(80, 80, 80);
    border-radius: 10px;
    box-shadow: inset 0px 0px 3px black;
    margin-top: 10px;
`;

const SectionTitle = styled.label`
    color: white;
    padding-left: 10px;
    font-size: small;
    padding-top: 5px;    
`;

const TextArea = styled.textarea`
    resize: none;
    border-radius: 10px;
    padding: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: small;
    border:none;

    &:focus {
        outline:none;
    }
`;
const ButtonForm = styled.button`
    font-size: 15px;
	padding: 5px 10px;
    margin-top:15px;
    margin-bottom:5px;
    width:150px;
	outline: none;
	background: #A7A7A7;
	color: #000000;
	border: 0px solid #C4D1EB;
	border-radius: 11px;
	transition: .3s ease;
    align-self:flex-end;
    box-shadow:0px 0px 0px 0px;
    
    &:focus {
        background: #F2F2F2;
        border: 0px solid #5A7EC7;
        border-radius: 11px;
    }
    
    &::placeholder {
        color: #8F9CB2;
    }
    
    &:hover {
        box-shadow:0px 0px 4px 0px;
    }
`;

export {
    FormContainer,
    Form,
    CodPedido,
    SelectContainer,
    Section,
    SectionTitle,
    TextArea,
    ButtonForm
}