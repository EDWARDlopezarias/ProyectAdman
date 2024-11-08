// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//const { Op } = require('sequelize'); // Importar operadores de Sequelize
const sequelize = require('./db.js'); // Importar la instancia de Sequelize configuradaconst { Supervisor, Maquina, Tipo} = require('./models/models.js'); // Modelos Sequelize
const { Supervisor, Maquina, Tipo, Tecnicos} = require('./models/models.js'); // Modelos Sequelize
const comandasRouter = require('./Routes/comandas.js');
const bdManagerRouter = require('./Routes/bdManager.js');
const Comanda = require('./models/BdComanda.js');

const app = express();
const port = process.env.SERVER_PORT || 3000;
const ip = process.env.SERVER_IP || 'localhost';

app.use(bodyParser.json());
app.use(cors());
app.use('/api', bdManagerRouter);

// Rutas
app.get('/', (req, res) => {
    res.send('Welcome to ADMAN API!');
});

// Ruta para obtener supervisores
app.get('/api/supervisores', async (req, res) => {
    try {
        const supervisores = await Supervisor.findAll(); // Obtener todos los supervisores
        res.json(supervisores); // Enviar como respuesta en formato JSON
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener supervisores on server' });
    }
});

//Ruta para obtener máquinas
app.get('/api/maquinas', async (req, res) => {
    try {
        const maquinas = await Maquina.findAll(); // Obtener todas las máquinas
        res.json(maquinas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener máquinas' });
    }
});

//Ruta para obtener máquinas
app.get('/api/Tech', async (req, res) => {
    try {
        const techs = await Tecnicos.findAll(); // Obtener todas las máquinas
        res.json(techs);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener técnicos' });
    }
});

// Ruta para obtener tipos de mantenimiento
app.get('/api/tipos', async (req, res) => {
    try {
        const tipos = await Tipo.findAll(); // Obtener todos los tipos de mantenimiento
        res.json(tipos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener tipos de mantenimiento' });
    }
});

// Ruta para obtener el mayor valor de COD
app.get('/api/max-cod', async (req, res) => {
    try {
        const maxCod = await Comanda.max('COD'); // Obtener el valor máximo de COD
        res.json({ maxCod });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el código máximo' });
    }
});

app.use('/api/comandas', comandasRouter);

// Sincronizar la base de datos y luego iniciar el servidor
sequelize.sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on http://${ip}:${port}`);
        });
    })
    .catch(error => {
        console.error('Unable to connect to the database:', error);
    });
