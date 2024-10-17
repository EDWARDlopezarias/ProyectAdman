const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const multer = require('multer'); // Para manejar archivos multipart
const Comanda = require('../models/BdComanda.js'); // Modelo de Sequelize
const moment = require('moment');

const router = express.Router();

// Configuración de multer para manejar el archivo CSV
const upload = multer({ dest: 'uploads/' }); // Guarda temporalmente en la carpeta 'uploads'

// Endpoint para subir y procesar el archivo CSV
router.post('/upload-csv', upload.single('file'), async (req, res) => {
    console.log('Ruta /api/upload-csv accedida');
    try {
        // Ruta del archivo subido temporalmente
        const filePath = req.file.path;

        // Truncar la tabla BD_COMANDAS antes de insertar los nuevos datos
        await Comanda.destroy({ truncate: true });

        // Array para almacenar los datos que se leerán del CSV
        const comandasData = [];

        // Leer y procesar el archivo CSV
        fs.createReadStream(filePath)
            .pipe(csv({ separator: ';' }))
            .on('data', (row) => {
                console.log('Fila CSV leída:', row); // Log para inspeccionar cada fila del CSV
                
                // Función para reformatear las fechas
            const parseDate = (dateString) => {
                // Si la fecha no es válida o está vacía, regresa null
                if (!dateString || !moment(dateString, 'D/M/YYYY HH:mm:ss', true).isValid()) {
                return null;
                }
                // Devuelve la fecha en el formato que PostgreSQL espera
                return moment(dateString, 'D/M/YYYY HH:mm:ss').format('YYYY-MM-DD HH:mm:ss');
            };                
                // Procesar cada fila del CSV y añadir al array de datos
                comandasData.push({
                    Tech1: row.Tech1,
                    FechaCierre: parseDate(row.FechaCierre),
                    Criticidad: row.CRITICIDAD,
                    Fecha_aprobacion: parseDate(row.Fecha_aprobacion),
                    MAQ: row.MAQ,
                    Supervisor: row.Supervisor,
                    COD: row.COD,
                    Fecha: parseDate(row.Fecha),
                    Aprobado: row.Aprobado,
                    Tipo_de_mantenimiento: row.Tipo_de_mantenimiento,
                    Motivo: row.Motivo,
                    TR: row.TR,
                    Fecha_de_alta: parseDate(row['Fecha de alta']),
                    Estado: row.Estado,
                    Sector: row.Sector,
                    Hinicio: parseDate(row.Hinicio),
                    Hfin: parseDate(row.Hfin),
                    Nsup: row.NSUP,
                    SH1: row.SH1 === '1',
                    SH2: row.SH2 === '1',
                    SH3: row.SH3 === '1',
                    SH4: row.SH4 === '1',
                    SH5: row.SH5 === '1',
                    SH6: row.SH6 === '0',
                    SH7: row.SH7 === '0'
                });
            })
            .on('end', async () => {
                console.log('Datos a insertar:', comandasData); // Verifica qué datos se van a insertar
                // Insertar los datos leídos del CSV en la base de datos
                try {
                    await Comanda.bulkCreate(comandasData,{
                        fields: [
                            'Tech1',
                            'FechaCierre',
                            'Criticidad',
                            'Fecha_aprobacion',
                            'MAQ',
                            'Supervisor',
                            'COD',
                            'Fecha',
                            'Aprobado',
                            'Tipo_de_mantenimiento',
                            'Motivo',
                            'TR',
                            'Fecha_de_alta',
                            'Estado',
                            'Sector',
                            'Hinicio',
                            'Hfin',
                            'Nsup',
                            'SH1',
                            'SH2',
                            'SH3',
                            'SH4',
                            'SH5',
                            'SH6',
                            'SH7'
                        ] // Especificamos las columnas a insertar, excluyendo 'id'
                    });
                    res.status(200).json({ message: 'Datos subidos y almacenados correctamente' });
                } catch (error) {
                    console.log('Error al insertar los datos en la base de datos:', error); // <-- Log para revisar errores
                    res.status(500).json({ error: 'Error al insertar los datos en la base de datos' });
                }
            });

    } catch (error) {
        res.status(500).json({ error: 'Error al procesar el archivo CSV' });
    }
});

router.get('/test', (req, res) => {
    res.send('Test route is working');
});

module.exports = router;