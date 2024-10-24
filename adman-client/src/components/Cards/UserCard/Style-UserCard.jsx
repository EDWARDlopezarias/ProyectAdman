import styled from 'styled-components';

const CardContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    width:250px;
    height:300px;
    padding:10px;
    box-sizing:border-box;
    border-radius:10px;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color:#0c0a0ab9;
    margin:5px;
    color:#ffff;

    @media (max-width:650px){
      padding:10px;
      margin:0px;
      border-radius:0px;
      width:auto;
      border-bottom:4px solid;
    }
`;

const CardTitle = styled.div`
    font-size:large;
    text-align:center;
    font-weight:600;
    background-color:#0000008d;
    border-radius:10px;
    padding-top:3px;
`;

const CardSubTitle = styled.div`
    font-size:medium;
    text-align:center;
    font-weight:600;
`;

const LabelContainer = styled.div`
    text-align:center;
`;

const LabelTitle = styled.div`
    font-size:medium;
    font-weight:600;
`;

const Label = styled.div`
    font-size:small;
`;

const TableContainer = styled.div`
  max-height: 200px;
  width: 100%;
`;

// Tabla
const CardTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

// Encabezado de la tabla
const TableHeader = styled.thead`
  position: sticky; /* Hace que el encabezado se quede fijo */
  top: 0; /* Fijar en la parte superior */
  z-index: 1;
`;

// Fila de encabezado
const TableHeadrow = styled.tr`
  display: table;
  width: 100%;
  table-layout: fixed; /* Fija el ancho de las columnas */
  `;

// Celda de encabezado
const TableHeadCell = styled.th`
  border-bottom: 3px solid #fff;
  padding: 8px;
  font-size: small;
  text-align: center;
  `;

// Cuerpo de la tabla
const TableBody = styled.tbody`
  display: block;
  max-height: 80px;
  overflow-y: auto;
  width: 100%;
  border-radius:5px;
  scrollbar-width: thin;
  scrollbar-color: #adadad #4d4d4d; /* Color del thumb y el fondo */
  `;

// Fila del cuerpo de la tabla
const TableBodyRow = styled.tr`
  display: table;
  width: 100%;
  table-layout: fixed;
  `;

// Celdas del cuerpo de la tabla
const TableBodyCell = styled.td`
  background-color: #00000065;
  padding: 8px;
  font-size:small;
  text-align: center;
  border-bottom: 1px solid #ccc;
`;

export {
    CardContainer,
    CardTitle,
    CardSubTitle,
    LabelContainer,
    Label,
    TableContainer,
    CardTable,
    TableHeader,
    TableHeadrow,
    TableHeadCell,
    TableBody,
    TableBodyRow,
    TableBodyCell,
    LabelTitle
}