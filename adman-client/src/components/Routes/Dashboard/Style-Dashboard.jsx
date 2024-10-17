import styled from "styled-components"

const DashboardTitle = styled.h1`
    font-size:70px;
    font-weight:600;
    letter-spacing: -2px;
    color:#ffff;
    margin:0px;
    padding:0px;
    
    @media (max-width: 600px) {
        text-align:center;
        font-size:45px;
    }
`;
const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
const DashboardTitleDiv = styled.h2`
    color: white;
    font-size: xx-large;
    text-align: center;
`;
const DashboardSubContainer =styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 5px;
    border-bottom: 2px solid black;
    padding-bottom: 40px;
`;

export {
    DashboardTitle,
    DashboardContainer,
    DashboardTitleDiv,
    DashboardSubContainer
};
