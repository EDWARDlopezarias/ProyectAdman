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
    background-color: rgb(97, 97, 97);
    border-radius: 30px;
    padding-top: 5px;
    text-align: center;
    box-shadow: inset 2px 2px 3px black;

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
    display: grid;
    grid-template-columns: repeat(2,1fr);
    padding-left: 50px;
    gap: 20px;
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
`;
const ButtonForm = styled.button`
    align-self: flex-end;
    padding: 10px 20px;
    background-color: #bcdafa;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 10px;
    border-radius: 20px;

    &:hover {
        background-color: rgb(117, 203, 230);
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