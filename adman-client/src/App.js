// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewComandaForm from './components/NewComandaForm/NewComandaForm';
import Banner from './components/Banner/Banner'; // Importa el componente Banner
import Admin from './components/Routes/Admin/Admin';
import Supervisor from './components/Routes/Supervisor/Supervisor';
import Users from './components/Routes/Usuario/Usuario';
import Dashboard from './components/Routes/Dashboard/Dashboard';
import ListaPedidos from './components/Routes/ListaPedidos/ListaPedidos';
import LoadWindow from './components/LoadWindow/LoadWindow';
import PedidoDetail from './components/PedidoDetail/PedidoDetail'
import './App.css'
import TableMachines from './components/Table/TableMachines/TableMachines';
import GridUSers from './components/Grid/GridUsers/GridUsers';
import TableTech from './components/Table/TableTech/TableTech'
import UserPage from './components/Routes/Admin/UserPage/UserPage'
import TableSuperv from './components/Table/TableSuperv/TableSuperv'

function App() {
    return (
        <Router>
            <div className="App">
                <Banner />
                <div className="content">
                    <Routes>
                        <Route path="/Dashboard" element={<Dashboard />} />
                        <Route path="/" element={<ListaPedidos />} />
                        <Route path="/new-comanda" element={<NewComandaForm />} />
                        <Route path="/Users/Pending" element={<GridUSers />} />
                        <Route path="/Users" element={<Admin />} />
                        <Route path="/Supervisor" element={<Supervisor />} />
                        <Route path="/Users" element={<Users />} />
                        <Route path="/BdManager" element={<LoadWindow />} />
                        <Route path="/Detail/:cod" element={<PedidoDetail />} />
                        <Route path="/Machines" element={<TableMachines />} />
                        <Route path='/Users/Table/Tech' element={<TableTech />}/>
                        <Route path='/Users/Table/Superv' element={<TableSuperv />}/>
                        <Route path='/Admin/UserPage' element={<UserPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
