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
    font-weight: 500;
    border-bottom: 2px solid #ddd;
    color:#fcfcfc;

    @media (max-width: 600px) {
        font-size: 16px; /* Reduce el tamaño de la fuente a 16px */
    }

    `;

// Filas
const TableRowHeader = styled.tr`
    background-color:#1e4864a9;
`;

// Filas
const TableRowBody = styled.tr`
    background-color:#1e48645c;

    &:hover {
        background-color:#022641dc;
    }

    `;

// Celdas (td)
const TableData = styled.td`
    font-size: 14px;
    padding: 10px;
    text-align: center;
    font-weight:500;
    background-color:#d4d4d45a;


    @media (max-width: 600px) {
        padding: 6px;
    }
`;

// Estilos de las celdas basados en estado
const CeldaEstado = styled.div`
display:inline-block;
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
`;

//Estilo de celda basado en Urgencia
const CeldaUrgencia = styled.div`
    display: inline-block; /* Centrar el div en el td */
    color: ${({ $urgencia }) => ($urgencia === 'URGENTE' ? '#000000dd' : '')};
    background-color: ${({ $urgencia }) => ($urgencia === 'URGENTE' ? '#eb8484' : '')};
    text-align: center;
    width: 80px;
    border-radius: 10px;

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
    FinderContainer
};