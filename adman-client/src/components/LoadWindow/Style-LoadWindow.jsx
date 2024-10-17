import styled, { keyframes } from 'styled-components';

const MainContainer = styled.div`
display:flex;
justify-content:center;
padding-top:80px;
`;


const LoadContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  width:500px;
  height:400px;
  align-items:center;
  border: 0px solid rgba(100, 100, 100, 1);
  border-radius: 7px;
  background-color: rgba(237, 235, 235, 0.12);
  color: rgba(250, 247, 247, 0.88);
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.3);
  transition: box-shadow 124ms ease-in-out;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  `;

const TitleContainer = styled.h1`
  font-size:40px;
`;

const InputContainer = styled.input`
  color:#000000;
  padding:10px;
  border: 0px solid rgba(100, 100, 100, 1);
  border-radius: 7px;
  background-color: rgba(237, 235, 235, 0.12);
  color: rgba(250, 247, 247, 0.88);
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.3);
  transition: box-shadow 124ms ease-in-out;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  `;

const ButtonContainer = styled.button`
  border: 0px solid rgba(100, 100, 100, 1);
  border-radius: 7px;
  background-color: rgba(237, 235, 235, 0.12);
  color: rgba(250, 247, 247, 0.88);
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.3);
  transition: box-shadow 124ms ease-in-out;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  width:100px;
  transition: box-shadow 300ms ease-out;

  &:hover {
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
  }
  `;
const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin-top: 20px;
`;
  
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
  
const Spinner = styled.div`
  border: 6px solid rgba(0, 0, 0, 0.1);
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

export {
  LoadContainer,
  TitleContainer,
  InputContainer,
  ButtonContainer,
  SpinnerContainer,
  Spinner,
  MainContainer
};