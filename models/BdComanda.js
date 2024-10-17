// models/BdComandas.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

//Modelo de comandas
const Comanda = sequelize.define('Comanda', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Tech1: DataTypes.STRING,
    FechaCierre: DataTypes.DATE,
    Criticidad: DataTypes.STRING,
    Fecha_aprobacion: DataTypes.DATE,
    MAQ: DataTypes.STRING,
    Supervisor: DataTypes.STRING,
    COD: DataTypes.DECIMAL,
    Fecha: DataTypes.DATE,
    Aprobado: DataTypes.STRING,
    Tipo_de_mantenimiento: DataTypes.STRING,
    Motivo: DataTypes.STRING,
    TR: DataTypes.STRING,
    Fecha_de_alta: DataTypes.DATE,
    Estado: DataTypes.STRING,
    Sector: DataTypes.STRING,
    Hinicio: DataTypes.DATE,
    Hfin: DataTypes.DATE,
    Nsup: DataTypes.STRING,
    SH1: DataTypes.BOOLEAN,
    SH2: DataTypes.BOOLEAN,
    SH3: DataTypes.BOOLEAN,
    SH4: DataTypes.BOOLEAN,
    SH5: DataTypes.BOOLEAN,
    SH6: DataTypes.BOOLEAN,
    SH7: DataTypes.BOOLEAN
}, {
    tableName: 'BD_COMANDAS',
    timestamps: false,
});

module.exports = Comanda;