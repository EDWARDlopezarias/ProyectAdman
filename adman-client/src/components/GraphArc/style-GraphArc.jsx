import styled from 'styled-components';

const ArcContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 200px;
    height: 300px;
    padding: 10px;
    border-radius: 7px;
    background-color: rgba(0, 0, 0, 0.425);
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.151);
    transition: box-shadow 124ms ease-in-out;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(15px);
    color: rgba(250, 247, 247, 0.88);
`;

const ArcTitle = styled.p`
    font-size: x-large;
    margin: 0px;
    padding-bottom: 15px;
    padding-top: 0px;
    color: #ffffff;
`;

const SvgArcContainer = styled.div`
    height: 200px;
`;

const ArcLabel = styled.p`
    text-align: left;
    font-size: large;
    color: #ffffff;
    position: relative;
    top: 15%;
    font-weight: 400;
`;

const ArcPorcentaje = styled.p`
    position: relative;
    top: -50%;
    font-size: xx-large;
    color: #ffffff;
`;

const ArcCantidad = styled.p`
    text-align: center;
    font-size: x-large;
    color: #ffffff;
    position: relative;
    top: -40%;
    font-weight: 500;
`;

const ArcSvg = styled.svg`
    filter: drop-shadow(2px 2px 2px black);
`;

export {
    ArcContainer,
    ArcTitle,
    SvgArcContainer,
    ArcLabel,
    ArcPorcentaje,
    ArcCantidad,
    ArcSvg
};
