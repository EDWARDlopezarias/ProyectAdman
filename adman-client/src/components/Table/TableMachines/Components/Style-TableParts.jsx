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

const TMButton = styled.button`
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
    TMButton
};