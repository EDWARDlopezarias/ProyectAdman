import styled from 'styled-components';

const NumberContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 300px;
    width: 200px;
    padding: 10px;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
`;

const NumberTitle = styled.p`
    color: rgb(255, 255, 255);
    font-size: x-large;
    margin: 0px;
    position: relative;
    top: -10px;
`;

const NumberValue = styled.p`
    font-size: 100px;
    margin: 0px;
    width: 200px;
    text-align: center;
    filter: drop-shadow(2px 2px 2px rgb(0, 0, 0));
    color:${(props) => props.$Color};
`;

const NumberName = styled.p`
    position: relative;
    top: 10px;
    color: rgb(255, 255, 255);
    font-size: large;
    margin: 0px;
    font-weight: bolder;
`;

export {
    NumberContainer,
    NumberTitle,
    NumberValue,
    NumberName
}