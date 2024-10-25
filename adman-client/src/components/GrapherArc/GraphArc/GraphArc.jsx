import React from 'react';
import {
    ArcContainer,
    ArcTitle,
    SvgArcContainer,
    ArcLabel,
    ArcPorcentaje,
    ArcCantidad,
    ArcSvg
} from './style-GraphArc.jsx';

const GraphArc = ({ size, nombre, porcentaje, title, colorBase, color, cantidad, total }) => {
    const strokeWidthBase = 20;
    const strokeWidth = strokeWidthBase - 4;
    const radius = (size / 2) - (strokeWidthBase / 2);
    const circumference = Math.PI * radius;
    const visibleStroke = (porcentaje / 100) * circumference;

    return (
        <ArcContainer>
            <ArcTitle>{title}</ArcTitle>
            <SvgArcContainer>
                <ArcSvg
                    viewBox={`0 0 ${size} ${size / 2}`}
                    width={size}
                    height={size / 2}
                >
                    <circle
                        r={radius}
                        cx={size / 2}
                        cy={size / 2}
                        fill="transparent"
                        stroke={colorBase}
                        strokeWidth={strokeWidthBase}
                        strokeDasharray={`${circumference} ${circumference}`}
                        style={{ transform: `rotate(-180deg)`, transformOrigin: `${size / 2}px ${size / 2}px` }}
                    />
                    <circle
                        r={radius}
                        cx={size / 2}
                        cy={size / 2}
                        fill="transparent"
                        stroke={color}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeDasharray={`${visibleStroke} ${circumference}`}
                        style={{ transform: `rotate(-180deg)`, transformOrigin: `${size / 2}px ${size / 2}px` }}
                    />
                </ArcSvg>
            </SvgArcContainer>
            <ArcLabel>{nombre}</ArcLabel>
            <ArcPorcentaje>{porcentaje}%</ArcPorcentaje>
            <ArcCantidad>{cantidad}/{total}</ArcCantidad>
        </ArcContainer>
    );
};

export default GraphArc;