import styled from 'styled-components';

const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2%;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    color: white;
    padding-bottom:5px;
    z-index: 1000;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);

    @media (max-width: 650px) {
        height:2%;
    }
`;

const FooterText = styled.label`
    font-size:small;
    font-weight:100;
    padding:0px 5px;
`;

const FooterTextContainer = styled.div`
    display:flex;
    justify-content:space-between;
`;

export {
    FooterContainer,
    FooterText,
    FooterTextContainer
};