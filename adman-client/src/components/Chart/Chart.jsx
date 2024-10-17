import React from 'react';
import './Chart.css';

const Chart = ({ 
    por1, porName1, 
    por2, porName2, 
    por3, porName3, 
    por4, porName4, 
    size // Tamaño ajustable por defecto
}) => {
    const total = por1 + por2 + por3 + por4;

    // Calcular los porcentajes de cada sector
    const percentagesArray = [
        { value: por1, color: '#4CAF50' }, // Verde
        { value: por2, color: '#2196F3' }, // Azul
        { value: por3, color: '#FFC107' }, // Amarillo
        { value: por4, color: '#F44336' }, // Rojo
    ];

    // Calcular el porcentaje de cada sector
    const percentages = percentagesArray.map(percent => (percent.value / total) * 100);
    console.log(percentages);
    // Calcular el radio basado en el tamaño para escalar correctamente
    const radius = 15.91549431 * (size / 100)/2; // Escala del radio

    // Convertir porcentajes en segmentos del gráfico circular
    let cumulativePercentage = 0;

    const renderSectors = percentages.map((percentage, index) => {
        const startOffset = cumulativePercentage;
        cumulativePercentage += percentage;

        return (
            <circle
                key={index}
                r={radius}
                cx='50%'
                cy='50%'
                fill="transparent"
                stroke={percentagesArray[index].color}
                strokeWidth="10"
                strokeDasharray={`${percentage} ${100 - percentage}`}
                strokeDashoffset={-startOffset}
            />
        );
    });

    return (
        <div className="chart-container">
            <svg 
                viewBox="0 0 100 100" 
                width={size} 
                height={size} 
                className="chart-percent"
                pathLength='100'
            >
                {renderSectors}
            </svg>
            <ul className="chart-labels">
                <li><span style={{ backgroundColor: '#4CAF50' }}></span>{porName1} {por1}</li>
                <li><span style={{ backgroundColor: '#2196F3' }}></span>{porName2} {por2}</li>
                <li><span style={{ backgroundColor: '#FFC107' }}></span> {porName3} {por3}</li>
                <li><span style={{ backgroundColor: '#F44336' }}></span> {porName4} {por4}</li>
            </ul>
        </div>
    );
};

export default Chart;
