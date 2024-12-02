// src/components/Banner.js
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    BannerWrapper,
    BannerContent,
    Logo,
    StyledNav,
    MenuItem,
    SubMenu
} from './Style-Banner.jsx'

function Banner() {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(false);

    const handleFilter = (filter) => {
        navigate(`/?filter=${filter}`);
        setActiveSubMenu(null); // Ocultar cualquier submenú abierto
    };

    const handleMenuClick = () => {
        setIsHovered(false);
        setActiveSubMenu(null); // Ocultar cualquier submenú abierto
    };

    return (
        <BannerWrapper $isHovered={isHovered} onMouseLeave={() => {
            setIsHovered(false)
        }}>
            <BannerContent>
                <Logo to="/Dashboard">ADman</Logo>
                <StyledNav>
                    <MenuItem
                        onMouseEnter={() => {
                            setIsHovered(true)
                            setActiveSubMenu('Home')
                        }}
                        onMouseLeave={() => {
                            setIsHovered(false)
                            setActiveSubMenu(null)
                        }}
                    >
                        <label>Home</label>
                        <SubMenu $isActive={activeSubMenu === 'Home'} $left="0%">
                            <label></label>
                            <Link to="/" onClick={() => handleMenuClick()} >Lista de trabajos</Link>
                            <label onClick={() => handleFilter('last100')}>Mostrar últimos 100 trabajos</label>
                        </SubMenu>
                    </MenuItem>
                    <MenuItem
                        onMouseEnter={() => {
                            setIsHovered(true)
                            setActiveSubMenu('Supervisor')
                        }}
                        onMouseLeave={() => {
                            setIsHovered(false)
                            setActiveSubMenu(null)
                        }}
                    >
                        <label>Supervisor</label>
                        <SubMenu $isActive={activeSubMenu === 'Supervisor'} $left="0%">
                            <label></label>
                            <Link to="/new-comanda" onClick={() => handleMenuClick()}>Nuevo Trabajo</Link>
                            <Link to="/supervisor"  onClick={() => handleMenuClick()}>Tester de componentes</Link>
                        </SubMenu>
                    </MenuItem>
                    <MenuItem 
                        onMouseEnter={() => {
                            setIsHovered(true)
                            setActiveSubMenu('Usuario')
                        }}
                        onMouseLeave={() => {
                            setIsHovered(false)
                            setActiveSubMenu(null)
                        }}
                    >
                        <label>Usuario</label>
                        <SubMenu $isActive={activeSubMenu === 'Usuario'} $left="0%">
                            <label></label>
                            <Link to={'/Users/Pending'} onClick={() => handleMenuClick()}>Trabajos Pendientes</Link>
                        </SubMenu>
                    </MenuItem>
                    <MenuItem
                        onMouseEnter={() => {
                            setIsHovered(true)
                            setActiveSubMenu('Administrador')
                        }}
                        onMouseLeave={() => {
                            setIsHovered(false)
                            setActiveSubMenu(null)
                        }}
                    >
                        <label>Administrador</label>
                        <SubMenu $isActive={activeSubMenu === 'Administrador'} $left="0%">
                            <label></label>
                            <Link to='/Admin/UserPage'  onClick={() => handleMenuClick()}>Gestor de usuarios</Link>
                            <Link to='/Machines' onClick={() => handleMenuClick()}>Gestor de máquinas</Link>
                            <Link to="/BdManager"  onClick={() => handleMenuClick()}>Gestor de Base de datos</Link>
                        </SubMenu>
                    </MenuItem>
                </StyledNav>
            </BannerContent>
        </BannerWrapper>
    );
}

export default Banner;
