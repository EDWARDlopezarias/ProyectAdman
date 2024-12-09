import styled from 'styled-components';

const TMContainer = styled.div`
`;
const TMTable = styled.table`
    width:100%;
    border:1px transparent solid;
    border-collapse:collapse;
`;
const TMTitle = styled.div`
    font-size:70px;
    font-weight:600;
    letter-spacing: -2px;
    color:#ffff;
    
    @media (max-width: 600px) {
        text-align:center;
        font-size:45px;
    }
`;
const TMSubTitle = styled.div`
    font-size:xx-large;
`;
const TMHeader = styled.thead`
`;
const TMHeaderRow = styled.tr`
`;
const TMHeadData = styled.th`
    border-bottom:solid 2px #fff;
    font-size:large;
    text-align:center;
    background-color:#00a8c54c;
`;
const TMBody = styled.tbody`
`;
const TMBodyRow = styled.tr`
    background-color:#ffffff20;

    &:hover {
        background-color:#ffffff40;
    }
`;
const TMBodyData = styled.td`
    font-size:medium;
    text-align:center;
    color:#000;
    font-weight:500;

`;

const InfoContainer = styled.div`
    font-size:15px;
    display:flex;
    justify-content:space-between;
    margin:5px 0px;

    @media (max-width: 600px) {
        justify-Content:center;
        margin:15px 0px;
    }
`;

const PagesContainer = styled.div`
    margin:5px 0px;

    @media (max-width: 600px) {
        margin:15px 0px;
    }
`;

const InfoText = styled.div`
    font-weight:500;
    margin:5px 0px;
    background-color: #1e48645c;
    border: none;
    align-items: center;
    border-radius:10px;
    transition: background-color 0.2s ease-out;
    box-shadow:inset 0px 0px 2px 2px #00000061;
    color:#ffffffd5;
    padding:5px;
    height:20px;
`;

const PagesButton = styled.button`
    background-color: #1e48645c;
    border: none;
    align-items: center;
    cursor: pointer;
    border-radius:10px;
    transition: background-color 0.2s ease-out;
    box-shadow:inset 0px 0px 2px 2px #00000061;
    color:#ffffffd5;
    padding:5px;
    width:90px;

    &:disabled {
        background-color:#6c70745c;
        color:#b4b1b1d3;
    }
`;

const PagesNumber = styled.span`
    margin:0 30px;
    color:#fff;
    font-weight:500;
`;

export {
    TMContainer,
    TMTable,
    TMTitle,
    TMSubTitle,
    TMHeader,    
    TMHeaderRow,
    TMHeadData,
    TMBody,
    TMBodyRow,
    TMBodyData,
    InfoContainer,
    PagesContainer,
    PagesButton,
    PagesNumber,
    InfoText
};