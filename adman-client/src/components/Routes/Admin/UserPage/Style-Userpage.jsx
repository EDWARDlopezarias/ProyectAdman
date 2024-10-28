import styled from 'styled-components';

const UPcontainer = styled.div`
`;

const UPTitle = styled.div`
    font-size:70px;
    font-weight:600;
    letter-spacing: -2px;
    color:#ffff;
    
    @media (max-width: 600px) {
        text-align:center;
        font-size:45px;
    }
`;

const UPButtonCont = styled.div`
    display:flex;
    justify-content:center;
    gap:20px;
`;

const UPButton = styled.button`
    border: 0px solid rgba(100, 100, 100, 1);
    border-radius: 32px;
    background-color: rgba(135, 131, 131, 0.5);
    box-shadow: inset 0px 0px 5px 0px #000;
    transition: box-shadow 202ms ease-out;
    width:150px;
    height:50px;
    color:#fff;
    font-size:17px;
    letter-spacing:2px;

    &:hover {
        box-shadow: inset 0px 0px 10px 1px #000;
    }
`;



export{
    UPcontainer,
    UPTitle,
    UPButtonCont,
    UPButton,
}