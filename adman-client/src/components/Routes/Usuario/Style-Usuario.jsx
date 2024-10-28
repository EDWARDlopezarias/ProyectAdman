import styled from 'styled-components';

const UserContentainer = styled.div`
    padding-top: 110px;
    min-height: 100vh; /* Asegura que el contenedor ocupe al menos el 100% de la altura de la pantalla */
    background-size: cover; /* Hace que la imagen de fondo cubra toda la pantalla */
    background-position: top left; /* Fija el fondo en la esquina superior izquierda */
    background-attachment: fixed; /* Evita que el fondo se deslice al hacer scroll */
    color: white; /* Asegura que el texto sea visible sobre el fondo */
    display: flex;
    justify-content: center;
    color: white; /* Asegura que el texto sea visible sobre el fondo */
    font-size: 2.5em;
`;

export {UserContentainer};