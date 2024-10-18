import styled from 'styled-components';

const colorFont = '#f3f3f3'

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: #14141478;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.308);

  @media (max-width: 650px) {
    width:95%;
    border-radius:0px;
    padding:10px;
  }
`;

const Title = styled.h1`
    text-align: center;
    color:${colorFont};
    margin-bottom: 20px;
    font-size:xx-large;
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
  font-size:medium;
  gap:5px;
`;

const Label = styled.span`
  font-weight: bold;
  color: ${colorFont};
`;

const Value = styled.span`
  color: ${colorFont};
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #0000007d;
  padding: 10px;
  text-align: center;
  border-bottom: 2px solid #ddd;
  font-size:medium;
  color:${colorFont};

  @media (max-width: 850px) {
    font-size:medium;
    font-weight:300;
    padding:2px;
  }
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #2e2c2cbc;
  font-weight:300;
  font-size:medium;
  text-align:center;
  color:${colorFont};

  @media (max-width: 650px) {
    font-size:medium;
    padding:2px;
  }
`;

const SectionTitle = styled.h2`
    margin-top: 30px;
    color: ${colorFont};
    font-size:large;
    box-shadow:inset 0px 0px 10px -5px #000000;
	background-color:#2e466e;
	border-radius:20px;
	border:1px solid #1f2f47;
	display:inline-block;
	font-family:Arial;
	font-weight:bold;
	padding:8px 20px;
	text-decoration:none;
`;

const Texto = styled.div`
    font-size:medium;
    border: 0px solid rgba(100, 100, 100, 1);
    border-radius: 5px;
    background-color: rgba(66, 60, 60, 0.192);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    padding:10px;
    min-height:40px;
    color: ${colorFont};
`;

const SubTitleText = styled.h3`
    font-size:large;
    margin-top: 30px;
    color: ${colorFont};
    font-size:large;
    box-shadow:inset 0px 0px 10px -5px #000000;
	background-color:#2e466e;
	border-radius:20px;
	border:1px solid #1f2f47;
	display:inline-block;
	font-family:Arial;
	font-weight:bold;
	padding:8px 20px;
	text-decoration:none;
`;

const InputText = styled.textarea`
    font-size:medium;
    border: 0px solid rgba(100, 100, 100, 1);
    border-radius: 5px;
    background-color: rgba(66, 60, 60, 0.192);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    padding:15px;
    width:100%;
    resize:none;
    font-family:"Anek Devanagari", sans-serif;
    color: ${colorFont};
    box-sizing:border-box;
`;
const ButtonForm = styled.button`
  box-shadow: 0px 0px 15px 1px #1c1b18;
	background-color:#2e466e;
  border:0px;
	border-radius:20px;
	cursor:pointer;
	color:${colorFont};
	font-size:14px;
	padding:9px 30px;
  transition: box-shadow 200ms ease-out;

  &:hover{
    box-shadow: 0px 0px 15px 4px #1c1b18;
  }

  &:active{
    position:relative;
	  top:0.5px;
  }

  &:disabled{
    background-color:#414b58;
    box-shadow: 0px 0px 4px 1px inset #1c1b18;
    color:#1c1b18;
    cursor:no-drop;

    &:active{
      position:relative;
      top:0px;
    }
  }
`;

const ButtonFormContainer = styled.div`
  display:flex;
  justify-content:space-around;
  padding:10px 0px;
`;


export {
    Container,
    Title,
    Row,
    Label,
    Value,
    Table,
    Th,
    Td,
    SectionTitle,
    SubTitleText,
    Texto,
    InputText,
    ButtonForm,
    ButtonFormContainer
};
