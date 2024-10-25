import React from 'react';
import './GraphDonutType1.css';

const GraphDonutType1 = ({ size, nombre, total, porcentaje, title, colorBase, color }) => {
    const strokeWidthBase = 10;
    const strokeWidth = strokeWidthBase - 2;
    const radius = (size / 2) - (strokeWidthBase / 2);  // Ajuste del radio
    const circumference = 2 * Math.PI * radius;  // Calcular la circunferencia del círculo

    // Calcular la parte visible según el porcentaje
    const visibleStroke = (porcentaje / total) * circumference;
    const remainingStroke = circumference - visibleStroke;

    return (
        <div className="donut-container" >
            <p className="donut-tittle">{title}</p>
            <div className='svg-donut-container'>
                <svg 
                    viewBox={`0 0 ${size} ${size}`}
                    className="donut-svg"
                >
                    {/* Círculo de fondo */}
                    <circle
                        r={radius}
                        cx={size / 2}
                        cy={size / 2}
                        fill="transparent"
                        stroke={colorBase}
                        strokeWidth={strokeWidthBase}
                        strokeDasharray={`${circumference} ${circumference}`}
                        className="donut-circle-base"
                    />
                    {/* Círculo del progreso */}
                    <circle
                        r={radius}
                        cx={size / 2}
                        cy={size / 2}
                        fill="transparent"
                        stroke={color}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeDasharray={`${visibleStroke} ${remainingStroke}`}
                        className="donut-circle"
                        style={{ transform: `rotate(-90deg)`, transformOrigin: '50% 50%' }}  // Girar para comenzar en la parte superior
                    />
                </svg>
            </div>
            <p className="donut-label">{nombre}</p>
            <p className="donut-porcentaje">{porcentaje}%</p>
        </div>
    );
};

export default GraphDonutType1;
