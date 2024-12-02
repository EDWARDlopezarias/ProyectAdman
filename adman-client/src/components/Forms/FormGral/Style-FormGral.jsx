import styled from "styled-components";

const FormContainer = styled.div`
`;
const FormMain = styled.form`
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

export {
    FormContainer,
    FormMain,
    FormTitle
}