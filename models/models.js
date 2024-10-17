// models/models.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');

// Modelo Supervisor
const Supervisor = sequelize.define('Supervisor', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NyAsup: DataTypes.TEXT,
    SECsup: DataTypes.TEXT
}, {
    tableName: 'BD_SUPERVISOR',
    timestamps: false,
});

// Modelo Maquina
const Maquina = sequelize.define('Maquina', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    CODMAQUINA: DataTypes.STRING,
    MAQUINA: DataTypes.STRING,
    Sector: DataTypes.STRING
}, {
    tableName: 'BD_MAQUINA',
    timestamps: false
});

// Modelo Tipo de Mantenimiento
const Tipo = sequelize.define('Tipo', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    TIPO: DataTypes.STRING
}, {
    tableName: 'BD_TIPOS',
    timestamps: false
});

module.exports = {Supervisor, Maquina, Tipo};