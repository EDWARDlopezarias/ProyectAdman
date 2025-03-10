import React from 'react';
import GrapherArc from '../../GrapherArc/GrapherArc';
import GraphNumber from '../../GraphNumber/GraphNumber';
import {
    DashboardContainer,
    DashboardSubContainer,
    DashboardTitle,
    DashboardTitleDiv
} from './Style-Dashboard.jsx';



function Dashboard(){
    const hoy = new Date();
    const ahora = new Date();
    const lunesActual = new Date();
    const primerDiaMes = new Date(hoy.getFullYear(), hoy.getMonth(), 1);  // Primer día del mes
    lunesActual.setDate(lunesActual.getDate() - (lunesActual.getDay() === 0 ? 6 : lunesActual.getDay() - 1));
    lunesActual.setHours(1, 0, 0, 0);
    primerDiaMes.setHours(1, 0, 0, 0);
    hoy.setHours(1, 0, 0, 0);

        return(
        <DashboardContainer>
            <DashboardTitle>Dashboard</DashboardTitle>
            <DashboardTitleDiv>Totalizador</DashboardTitleDiv>
            <DashboardSubContainer>
                <GraphNumber
                    nombre='Pedidos'
                    title='Total en curso'
                    color='#a1a0e9'
                    columnbd='Estado'
                    valuebd='EN CURSO'
                />
                <GraphNumber
                    nombre='Pedidos'
                    title='Total pedido'
                    color='#a1a0e9'
                    columnbd='Estado'
                    valuebd='EMITIDO'
                />
                <GraphNumber
                    nombre='Pedidos'
                    title='Total en pausa'
                    color='#a1a0e9'
                    columnbd='Estado'
                    valuebd='EN ESPERA'
                />
            </DashboardSubContainer>
            <DashboardTitleDiv>Información Diaria</DashboardTitleDiv>
            <DashboardSubContainer>
                <GrapherArc
                    fechaInicio={hoy}
                    fechaFin={ahora}
                    columnbd='Sector'
                    valuebd='EXTRUSIÓN'
                    title='Total Diario'
                    nombre='Pedidos por extrusión'
                    color='#374dce'
                />
                <GrapherArc
                    fechaInicio={hoy}
                    fechaFin={ahora}
                    columnbd='Sector'
                    valuebd='CONF-FONDO'
                    title='Total Diario'
                    nombre='Pedidos por Fondo'
                    color='#374dce'
                />
                <GrapherArc
                    fechaInicio={hoy}
                    fechaFin={ahora}
                    columnbd='Sector'
                    valuebd='CONF-ARRANQUE'
                    title='Total Diario'
                    nombre='Pedidos por Arranque'
                    color='#374dce'
                />
                <GrapherArc
                    fechaInicio={hoy}
                    fechaFin={ahora}
                    columnbd='Sector'
                    valuebd='CONF-CAMISETA'
                    title='Total Diario'
                    nombre='Pedidos por Camiseta'
                    color='#374dce'
                />
                <GrapherArc
                    fechaInicio={hoy}
                    fechaFin={ahora}
                    columnbd='Sector'
                    valuebd='OTROS'
                    title='Total Diario'
                    nombre='Otros pedidos'
                    color='#374dce'
                />
            </DashboardSubContainer>
            <DashboardTitleDiv>Información semanal</DashboardTitleDiv>
            <DashboardSubContainer>
                <GrapherArc
                    fechaInicio={lunesActual}
                    fechaFin={ahora}
                    columnbd='Sector'
                    valuebd='EXTRUSIÓN'
                    title='Total Semanal'
                    nombre='Pedidos por extrusión'
                    color='#4fb66e'
                />
                <GrapherArc
                    fechaInicio={lunesActual}
                    fechaFin={ahora}
                    columnbd='Sector'
                    valuebd='CONF-FONDO'
                    title='Total Semanal'
                    nombre='Pedidos por Fondo'
                    color='#4fb66e'
                />
                <GrapherArc
                    fechaInicio={lunesActual}
                    fechaFin={ahora}
                    columnbd='Sector'
                    valuebd='CONF-ARRANQUE'
                    title='Total Semanal'
                    nombre='Pedidos por Arranque'
                    color='#4fb66e'
                />
                <GrapherArc
                    fechaInicio={lunesActual}
                    fechaFin={ahora}
                    columnbd='Sector'
                    valuebd='CONF-CAMISETA'
                    title='Total Semanal'
                    nombre='Pedidos por Camiseta'
                    color='#4fb66e'
                />
                <GrapherArc
                    fechaInicio={lunesActual}
                    fechaFin={ahora}
                    columnbd='Sector'
                    valuebd='OTROS'
                    title='Total Semanal'
                    nombre='Otros pedidos'
                    color='#4fb66e'
                />
            </DashboardSubContainer>
            <DashboardTitleDiv>Información Mensual</DashboardTitleDiv>
            <DashboardSubContainer>                
                <GrapherArc
                    fechaInicio={primerDiaMes}
                    fechaFin={ahora}
                    columnbd='Sector'
                    valuebd='EXTRUSIÓN'
                    title='Total Mensual'
                    nombre='Pedidos por extrusión'
                    color='#9231ee'
                />
                <GrapherArc
                    fechaInicio={primerDiaMes}
                    fechaFin={ahora}
                    columnbd='Sector'
                    valuebd='CONF-FONDO'
                    title='Total Mensual'
                    nombre='Pedidos por Fondo'
                    color='#9231ee'
                />
                <GrapherArc
                    fechaInicio={primerDiaMes}
                    fechaFin={ahora}
                    columnbd='Sector'
                    valuebd='CONF-ARRANQUE'
                    title='Total Mensual'
                    nombre='Pedidos por Arranque'
                    color='#9231ee'
                />
                <GrapherArc
                    fechaInicio={primerDiaMes}
                    fechaFin={ahora}
                    columnbd='Sector'
                    valuebd='CONF-CAMISETA'
                    title='Total Mensual'
                    nombre='Pedidos por Camiseta'
                    color='#9231ee'
                />
                <GrapherArc
                    fechaInicio={primerDiaMes}
                    fechaFin={ahora}
                    columnbd='Sector'
                    valuebd='OTROS'
                    title='Total Mensual'
                    nombre='Otros pedidos'
                    color='#9231ee'
                />

            </DashboardSubContainer>
        </DashboardContainer>
    )
}

export default Dashboard;