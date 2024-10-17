import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import SelectForm from '../SelectForm/SelectForm';
import {
    FormContainer,
    Form,
    CodPedido,
    SelectContainer,
    Section,
    SectionTitle,
    TextArea,
    ButtonForm
} from './Style-NewComandaForm.jsx'


const NewComandaForm = () => {
    const [supervisor, setSupervisor] = useState('');
    const [codigoComanda, setCodigoComanda] = useState('');
    const [codigoMaquina, setCodigoMaquina] = useState('');
    const [motivo, setMotivo] = useState('');
    const [tipo, setTipo] = useState('');
    const [criticidad, setCriticidad] = useState('');

    const [supervisores, setSupervisores] = useState([]);
    const [maquinas, setMaquinas] = useState([]);
    const [tipos, setTipos] = useState([]);
    const urlEnv = process.env.REACT_APP_URL_HOME

    const maxComanda = useCallback(() =>{
        axios.get(`${urlEnv}/api/max-cod`)
            .then(response => setCodigoComanda(response.data.maxCod + 1))
            .catch(error => console.error('Error al obtener el código de comanda:', error));
    }, [urlEnv])

    useEffect(() => {
        const urlEnv = process.env.REACT_APP_URL_HOME
        // Obtener datos de los supervisores
        axios.get(`${urlEnv}/api/supervisores`)
            .then(response => setSupervisores(response.data))
            .catch(error => console.error('Error al obtener supervisores-newcomanda:', error));

        // Obtener datos de las máquinas
        axios.get(`${urlEnv}/api/maquinas`)
            .then(response => setMaquinas(response.data))
            .catch(error => console.error('Error al obtener máquinas:', error));

        // Obtener datos de los tipos de mantenimiento
        axios.get(`${urlEnv}/api/tipos`)
            .then(response => setTipos(response.data))
            .catch(error => console.error('Error al obtener tipos de mantenimiento:', error));
        
        // Obtener el mayor valor de COD
        maxComanda();
    }, [maxComanda]);//observa la variable

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formattedDate = new Date().toISOString();
        const urlEnv = process.env.REACT_APP_URL_HOME
        try {
            const newComanda = {
                Supervisor: supervisor,
                COD: codigoComanda,
                MAQ: codigoMaquina,
                Motivo: motivo,
                Tipo_de_mantenimiento: tipo,
                Criticidad: criticidad,
                Fecha: formattedDate,
                Estado: 'EMITIDO'
            };
            console.log(newComanda);
            await axios.post(`${urlEnv}/api/comandas`, newComanda);
            alert('Comanda creada exitosamente');
            // Reiniciar los campos del formulario
            setSupervisor('');
            setCodigoComanda('');
            setCodigoMaquina('');
            setMotivo('');
            setTipo('');
            setCriticidad('');
            maxComanda();
        } catch (error) {
            console.error('Error creando comanda:', error);
            console.log(error);
            alert(' Hubo un error al crear la comanda');
        }
    };

    const Urgencias = [
        { Id: 1, TIPO: 'URGENTE' },
        { Id: 2, TIPO: 'NORMAL' }
    ];

    return (
        <FormContainer>
            <Form onSubmit={handleSubmit}>
                <CodPedido>Código de pedido: {codigoComanda}</CodPedido>
                <SelectContainer>
                    <SelectForm
                        title='Nombre del Supervisor:'
                        firstvalue='Seleccionar'
                        value={supervisor}
                        fn={(e) => setSupervisor(e.target.value)}
                        bd={supervisores}
                        column='NyAsup'
                    />
                    <SelectForm
                        title='Código de máquina:'
                        firstvalue='Seleccionar'
                        value={codigoMaquina}
                        fn={(e) => setCodigoMaquina(e.target.value)}
                        bd={maquinas}
                        column='CODMAQUINA'
                    />                        
                    <SelectForm
                        title='Tipo de Comanda:'
                        firstvalue='Seleccionar'
                        value={tipo}
                        fn={(e) => setTipo(e.target.value)}
                        bd={tipos}
                        column='TIPO'
                    />
                    <SelectForm
                        title='Criticidad:'
                        firstvalue='Seleccionar'
                        value={criticidad}
                        fn={(e) => setCriticidad(e.target.value)}
                        bd={Urgencias}
                        column='TIPO'
                    />
                </SelectContainer>
                <Section>
                    <SectionTitle>Motivo:</SectionTitle>
                    <TextArea
                        value={motivo}
                        onChange={(e) => setMotivo(e.target.value)}
                        required
                        rows='7'
                        className='textarea-motivo'
                    />
                </Section>
                <ButtonForm type="submit">Crear Comanda</ButtonForm>
            </Form>
        </FormContainer>
    );
};

export default NewComandaForm;