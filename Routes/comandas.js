// routes/comandas.js
const express = require('express');
const router = express.Router();
const Comanda = require('../models/BdComanda');
const { Op } = require('sequelize'); // Importar operadores de Sequelize

//Ruta para obtener el conteo de registros entre dos fechas con filtros
router.get('/countxfechas', async (req, res) => {
    //http://10.10.10.214:3000/api/comandas/countxfechas?fechaInicio=2024-10-01T03:00:00.000Z&fechaFin=2024-10-09T12:27:59.332Z&columnbd=Sector&valuebd=OTROS
    const { fechaInicio, fechaFin, columnbd, valuebd } = req.query;  // Obtener las fechas desde los parámetros de la query
        
    try {
        const countByFechasAndFilters = await Comanda.count({
            where: {
                Fecha: {
                    [Op.between]: [fechaInicio, fechaFin]  // Filtrar por rango de fechas
                },
                [columnbd]: valuebd
            }
        });
        res.json({ countByFechasAndFilters });
    } catch (error) {
        res.status(500).json({ error: 'Error al contar los registros entre las fechas especificadas y filtros' });
    }
});

// Ruta para obtener el conteo de comandas por columna y valor de columna
router.get('/count/dataxcolumn', async (req, res) => {
    const { columnbd, valuebd } = req.query;  // Obtener columna y valor desde los parámetros de la URL

    try {
        // Generar el objeto where dinámicamente
        const whereCondition = { [columnbd]: valuebd };  // Crear el objeto where dinámicamente

        const countByEstado = await Comanda.count({
            where: whereCondition  // Usar la condición generada
        });
        res.json({ countByEstado });
    } catch (error) {
        res.status(500).json({ error: `Error al contar las comandas con la columna ${columnbd} y valor ${valuebd}` });
    }
});

// Ruta para obtener el conteo de registros entre dos fechas con estado "EMITIDO"
router.get('/count-por-fechas', async (req, res) => {
    const { fechaInicio, fechaFin } = req.query;  // Obtener las fechas desde los parámetros de la query
    try {
        const countByFechas = await Comanda.count({
            where: {
                Fecha: {
                    [Op.between]: [fechaInicio ,fechaFin ]  // Filtrar por rango de fechas
                }
            }
        });
        res.json({ countByFechas });
    } catch (error) {
        console.error('Error en el servidor al contar los registros:', error);
        res.status(500).json({ error: 'Error al contar los registros entre las fechas especificadas con estado "EMITIDO"' });
    }
});

// Obtener una comanda por COD
router.get('/:cod', async (req, res) => {
    try {
        const comanda = await Comanda.findOne({ where: { COD: req.params.cod } });
        if (comanda) {
            res.json(comanda);
        } else {
            res.status(404).send('Comanda not found');
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Obtener todas las comandas
router.get('/', async (req, res) => {
    console.log('punto alcanzado');
    try {
        const comandas = await Comanda.findAll({
            order: [['Fecha', 'DESC']],
            limit: 100
        });
        res.json(comandas);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// POST /api/comandas
router.post('/', async (req, res) => {
    try {
        const newComanda = await Comanda.create(req.body);
        res.status(201).json(newComanda);
    } catch (error) {
        console.error('Error creating new comanda:', error);
        res.status(500).send('Server Error');
    }
});

// Actualizar una comanda por COD
router.put('/:cod', async (req, res) => {
    try {
        const comanda = await Comanda.findOne({ where: { COD: req.params.cod } });
        if (comanda) {
            await comanda.update(req.body);
            res.json(comanda);
        } else {
            res.status(404).send('Comanda not found');
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});




module.exports = router;