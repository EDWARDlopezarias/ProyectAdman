// src/components/Banner.js
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Banner.css';

function Banner() {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const handleFilter = (filter) => {
        navigate(`/?filter=${filter}`);
    };

    return (
        <header 
            className="banner" 
            style={{ height: isHovered ? '28%' : '8%' }} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="banner-content">
                {/* <h1 className='logo'>KATH.IA</h1> */}
                <Link className='logo' to="/Dashboard" >ADman</Link>
                <nav>
                    <div 
                        className="menu-home"
                        onMouseEnter={() => setIsHovered(true)}
                    >
                        <label>Home</label>
                        <div className="submenu-home">
                            <label></label>
                            <Link to="/" >Lista de trabajos</Link>
                            <label onClick={() => handleFilter('last100')}>Mostrar ultimos 100 trabajos</label>
                            <label>-</label>
                            <label>-</label>
                            <label>-</label>
                        </div>
                    </div>
                    <div
                        className="menu-supervisor"
                        onMouseEnter={() => setIsHovered(true)}
                    >
                        <label>Supervisor</label>
                        <div className="submenu-supervisor">
                            <label></label>
                            <Link to="/new-comanda">Nuevo Trabajo</Link>
                            <label onClick={() => handleFilter('emitido')}>Mostrar trabajos pedidos</label>
                            <label onClick={() => handleFilter('enCurso')}>Mostrar trabajos en ejecución</label>
                            <label>Aprobar trabajos</label>
                            <Link to='/supervisor'>Tester de componentes</Link>
                        </div>
                    </div>
                    <div
                        className="menu-user"
                        onMouseEnter={() => setIsHovered(true)}
                    >
                        <label>Usuario</label>
                        <div className="submenu-user">
                            <label></label>
                            <Link to="/Edit-comanda">Iniciar/finalizar trabajos</Link>                            
                            <label>Mi historial</label>
                            <label>Mis pendientes</label>
                            <label>Trabajos en espera</label>
                            <Link to="/users">Estadisticas</Link>
                        </div>
                    </div>
                    <div
                        className="menu-admin"
                        onMouseEnter={() => setIsHovered(true)}
                    >
                        <label>Administrador</label>
                        <div className="submenu-admin">
                            <label></label>
                            <label>Editor avanzado de trabajos</label>
                            <label>Gestor de usuarios</label>
                            <label>Gestor de máquinas</label>
                            <label>Gestor de supervisores</label>
                            <Link to="/admin">Extras</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Banner;
