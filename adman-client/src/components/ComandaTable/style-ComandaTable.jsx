import styled from 'styled-components';

// Contenedor de la tabla
const TableContainer = styled.div`
    width: 100%; /* Ancho completo del contenedor */
`;

// Tabla personalizada
const CustomTable = styled.table`
    width: 100%;
    border-collapse: collapse; /* Para quitar el espaciado entre celdas */
    border: 1px solid transparent; /* Sin borde en la tabla */
`;

// Encabezados y celdas
const TableCell = styled.th`
    padding: 10px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    border-bottom: 2px solid #ffffff;
    color:#fcfcfc;

    @media (max-width: 600px) {
        font-size: 16px; /* Reduce el tamaño de la fuente a 16px */
    }

    `;

// Filas
const TableRowHeader = styled.tr`
    background-color:#1e48645e;
`;

// Filas
const TableRowBody = styled.tr`
    background-color:#1e48645c;

    &:hover {
        background-color:#0226416f;
    }

    `;

// Celdas (td)
const TableData = styled.td`
    font-size: 14px;
    padding: 10px;
    text-align: center;
    font-weight:500;
    background-color:#d4d4d42f;
    color:#000000;


    @media (max-width: 600px) {
        padding: 6px;
    }
`;

// Estilos de las celdas basados en estado
const CeldaEstado = styled.div`
display:inline-block;
border:1px solid #07070775;
    color: ${({ $estado }) => {
        switch ($estado) {
            case 'EMITIDO':
                return '';
            case 'FINALIZADO':
            case 'CERRADA':
                return 'rgb(199, 226, 207)';
            case 'EN CURSO':
                return 'rgb(231, 231, 231)';
            case 'EN ESPERA':
                return 'rgb(255, 255, 255)';
            default:
                return 'black';
        }
    }};
    background-color: ${({ $estado }) => {
        switch ($estado) {
            case 'EMITIDO':
                return '';
            case 'FINALIZADO':
            case 'CERRADA':
                return 'rgb(28, 87, 20)';
            case 'EN CURSO':
                return 'rgb(165, 110, 28)';
            case 'EN ESPERA':
                return 'rgb(0, 0, 0)';
            default:
                return 'transparent';
        }
    }};
    text-align: center;
    width: 80px;
    border-radius: 10px;

    @media (max-width: 600px) {        
        width:60px;
        font-size:11px;
    }
`;

//Estilo de celda basado en Urgencia
const CeldaUrgencia = styled.div`
    display: inline-block; /* Centrar el div en el td */
    color: ${({ $urgencia }) => ($urgencia === 'URGENTE' ? '#000000dd' : '')};
    background-color: ${({ $urgencia }) => ($urgencia === 'URGENTE' ? '#eb8484' : '')};
    text-align: center;
    width: 80px;
    border-radius: 10px;

    @media (max-width: 600px) {        
        width:60px;
        font-size:11px;
    }

`;

const TableHeaders = styled.thead`
    border-radius: 31px 31px 10px 10px;
`;

const FindWork = styled.div`

    cursor: pointer;  // Añadir cursor de pointer para indicar que es clicable
    width: 20px;  // Ancho del contenedor
    height: 20px; // Alto del contenedor

    svg {
        fill: #000;  // Color de la lupa
        width: 100%;  // Ajustar el SVG al tamaño del contenedor
        height: 100%; // Ajustar el SVG al tamaño del contenedor
    }
`;

const FinderContainer = styled.div`
    display:flex;
    gap:10px;
    align-items:center;
    justify-content:center;
`;

const TableRowfilters = styled.div`
    display:flex;
    justify-content:right;

    @media (max-width: 600px) {        
        justify-content:center;
    }
`;

const Tablefilter = styled.div`
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    color:#fcfcfc;
    cursor:pointer;
    padding:5px;

    @media (max-width: 600px) {
        ${CeldaEstado} {
            width:70px;
            height:20px;
            padding-top:1px;
        }
        font-size: 14px;
    }
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 450px;
  border: none;
  border-radius: 4px;
  font-size:medium;

  @media (max-width: 600px) {
    margin:auto;
  }
`;

// Campo de entrada para escribir el término de búsqueda
const SearchBarInput = styled.input`
  flex: 1;
  background-color: #1e48645c;  
  box-shadow:inset 0px 0px 2px 2px #00000061;
  padding: 10px;
  border: none;
  outline: none;
  font-size: 16px;
  height:15px;
  color:#fff;
  font-weight:500;
  font-style:italic;
  
  &::placeholder {
    color:#ffffff44;
  }
`;

// Botón de búsqueda
const SearchBarButton = styled.button`
  background-color: #1e48645c;
  border: none;
  align-items: center;
  cursor: pointer;
  border-radius:0px 10px 10px 0px;
  transition: background-color 0.2s ease-out;
  box-shadow:inset 0px 0px 2px 2px #00000061;
  height:35px;


  &:hover {
    background-color: #0056b3;
  }
`;

// Icono de flecha
const ArrowIcon = styled.span`
  font-size: 20px;
  padding:none;
  margin:none;
  color: white;

`;

const PagesContainer = styled.div`
    display:flex;
    justify-Content:center;
    margin-Top:20px;
`;

const PagesButton = styled.button`
    background-color: #1e48645c;
    border: none;
    align-items: center;
    cursor: pointer;
    border-radius:10px;
    transition: background-color 0.2s ease-out;
    box-shadow:inset 0px 0px 2px 2px #00000061;
    height:28px;
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
    TableContainer,
    CustomTable,
    TableCell,
    TableData,
    CeldaEstado,
    CeldaUrgencia,
    TableHeaders,
    TableRowHeader,
    TableRowBody,
    FindWork,
    FinderContainer,
    TableRowfilters,
    Tablefilter,
    SearchBarButton,
    SearchBarContainer,
    SearchBarInput,
    ArrowIcon,
    PagesContainer,
    PagesButton,
    PagesNumber
};