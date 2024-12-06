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