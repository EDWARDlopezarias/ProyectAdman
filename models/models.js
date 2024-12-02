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

// Modelo de técnicos

const Tecnicos = sequelize.define('Tecnico', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Tecnico: DataTypes.STRING,
    Sector_1: DataTypes.STRING
}, {
    tableName: 'BD_TECNICOS',
    timestamps: false
})

// Modelo partes de máquina en Mantenimiento
const Part = sequelize.define('Part', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    CODMAQUINA: DataTypes.STRING,
    COD_PART: DataTypes.STRING
}, {
    tableName: 'BD_PARTS',
    timestamps: false
});

// Modelo Tareas de Mantenimiento
const Task = sequelize.define('Task', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    MAQ_PART: DataTypes.STRING,
    COD_TASK: DataTypes.STRING,
    DESC: DataTypes.STRING
}, {
    tableName: 'BD_TASK',
    timestamps: false
});

module.exports = {
    Supervisor,
    Maquina,
    Tipo,
    Tecnicos,
    Part,
    Task
};