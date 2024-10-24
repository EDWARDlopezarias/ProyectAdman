import styled from 'styled-components';
import { Link } from 'react-router-dom';


// Styled Components
const BannerWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: ${props => props.$isHovered ? '30%' : '8%'};
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    color: white;
    padding: 10px 40px;
    z-index: 1000;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    transition: height 0.2s ease;

    @media (max-width: 650px) {
        padding: 0;
    }
`;

const BannerContent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 10px;

    @media (max-width: 650px) {
        flex-direction: column;
        padding: 0;
    }
`;

const StyledNav = styled.nav`
    display: flex;
    align-items: center;
`;

const Logo = styled(Link)`
    font-size: larger;
    border: solid white 2px;
    padding: 5px;
    border-radius: 13px;
    color: black;
    text-decoration: none;
    font-weight: bold;
    box-shadow: inset 0px 0px 3px black;
    background-color: aliceblue;
    margin-bottom: 5px;
    letter-spacing:-2px;

    @media (max-width: 650px) {
        margin-top: 5px;
    }
`;
const SubMenu = styled.div`
    display: ${props => props.$isActive ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: ${props => props.$left};
    font-weight: 400;
    width:max-content;

    a, label {
        text-decoration:none;
        padding:8px;
        color:white;
        font-size:small;
    }

    a:hover, label:hover {
        cursor:pointer;
    }

    @media (max-width: 650px) {        

        a, label {
        text-decoration:none;
        padding:8px;
        color:white;
        font-size:medium;
        }
    }
`;

const MenuItem = styled.div`
    position: relative;
    margin: 0 20px;
`;


export {
    BannerContent,
    BannerWrapper,
    StyledNav,
    Logo,
    MenuItem,
    SubMenu
}