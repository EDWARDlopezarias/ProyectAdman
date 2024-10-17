// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewComandaForm from './components/NewComandaForm/NewComandaForm';
import Banner from './components/Banner/Banner'; // Importa el componente Banner
import Admin from './components/Routes/Admin/Admin';
import Supervisor from './components/Routes/Supervisor/Supervisor';
import Users from './components/Routes/Usuario/Usuario';
import EditComanda from './components/EditComanda/EditComanda';
import Dashboard from './components/Routes/Dashboard/Dashboard';
import ListaPedidos from './components/Routes/ListaPedidos/ListaPedidos';
import LoadWindow from './components/LoadWindow/LoadWindow';
import PedidoDetail from './components/PedidoDetail/PedidoDetail'
import './App.css'

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
                        <Route path="/Admin" element={<Admin />} />
                        <Route path="/Supervisor" element={<Supervisor />} />
                        <Route path="/Users" element={<Users />} />
                        <Route path="/Edit-comanda" element={<EditComanda />} />
                        <Route path="/BdManager" element={<LoadWindow />} />
                        <Route path="/Detail/:cod" element={<PedidoDetail />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
