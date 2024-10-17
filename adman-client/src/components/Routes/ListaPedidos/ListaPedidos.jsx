import React from "react";
import ComandaTable from "../../ComandaTable/ComandaTable";
import { TitleListapedidos } from "./Style-ListaPedidos.jsx";


const ListaPedidos = () => {

    return (
        <div>
            <TitleListapedidos>Lista de pedidos</TitleListapedidos>
            <ComandaTable />
        </div>
    )
};

export default ListaPedidos;