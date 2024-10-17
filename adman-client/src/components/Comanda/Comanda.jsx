import React, { useState } from 'react';
import './Comanda.css';
import EditComanda from '../EditComanda/EditComanda';

const Comanda = ({maquina, fecha, supervisor, motivo, estado, trabajoRealizado, tech1, cod, criticidad, sector}) => {

    const [isEditing, setIsEditing] = useState(false);

    const classEstado = {
        'EMITIDO': 'emitido',
        'EN CURSO': 'en-curso',
        'FINALIZADO': 'finalizado',
        'EN ESPERA': 'en-espera',
        'CERRADA': 'cerrada'
    };
    
    // Función para abrir el componente EditComanda
    const handleDoubleClick = () => {
        setIsEditing(true);  // Al hacer doble clic, se abre el componente de edición
    };

    // Función para cerrar el componente EditComanda
    const handleCloseEdit = () => {
        setIsEditing(false);  // Cierra el componente de edición
    };

    //<div className='comanda-banner'>
    //<p className={`estado-${classEstado[estado] || ''}`}><strong>Estado:</strong> {estado}</p>

    return (
        <div className={`comanda-container ${isEditing ? 'expanded' : ''}`}>
            <div className={`comanda-banner-${criticidad || ''}`}>
                <div className="comanda-banner-inner">
                    <p className='comanda-number'><strong>COD:</strong> {cod}</p>
                    <div className='banner-main'>
                        <div className="banner-left">
                            <div className="estado">
                                {/* Detectar el doble clic en la palabra "Estado" */}
                                <p onClick={handleDoubleClick} className={`estado-${classEstado[estado] || ''}`}>
                                    <strong>Estado:</strong> {estado}
                                </p>
                                <p><strong>Criticidad:</strong> {criticidad}</p>
                                <p><strong>Sector:</strong> {sector}</p>
                            </div>
                        </div>
                        <div className="banner-center">
                            <p><strong>Máquina:</strong> {maquina}</p>
                            <p><strong>Supervisor:</strong> {supervisor}</p>
                            <p><strong>Técnico:</strong> {tech1}</p>
                        </div>
                        <div className="banner-right">
                            <p><strong>Fecha:</strong> {new Date(fecha).toLocaleString()}</p>
                            <p><strong>Motivo:</strong> {motivo}</p>
                        </div>
                    </div>
                    <p className='comanda-trabajo-realizado'><strong>Trabajo Realizado:</strong> {trabajoRealizado}</p>
                </div>
            </div>
            {/* Renderizar EditComanda condicionalmente */}
            {isEditing && (
                <EditComanda className='content-editcomanda' 
                    cod={cod} 
                    onClose={handleCloseEdit}  // Función para cerrar el editor
                />
            )}
        </div>
    );
};

export default Comanda;
