import React from 'react';
import {
    UPcontainer,
    UPTitle,
    UPButtonCont,
    UPButton,
} from './Style-Userpage.jsx'
import { useNavigate } from 'react-router-dom';

const UserPage = () => {
    const Navigate = useNavigate();
    const HandleClick = (button) => {
        Navigate(`/Users/Table/${button}`)
    }

    return (
        <UPcontainer>
            <UPTitle>Gestor de Usuarios</UPTitle>
            <UPButtonCont>
                <UPButton onClick={() => HandleClick('Tech')}>Técnicos</UPButton>
                <UPButton onClick={() => HandleClick('Superv')}>Supervisores</UPButton>
            </UPButtonCont>
        </UPcontainer>
    )
}

export default UserPage;