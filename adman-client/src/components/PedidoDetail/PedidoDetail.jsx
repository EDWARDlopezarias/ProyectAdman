import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import SelectList from './Components/SelectList.jsx';
import {
    Container,
    Title,
    Row,
    Label,
    Value,
    Table,
    Th,
    Td,
    SectionTitle,
    SubTitleText,
    Texto,
    InputText,
    ButtonForm,
    ButtonFormContainer
} from './Style-PedidoDetail.jsx'

const urlEnv = process.env.REACT_APP_URL_HOME;

const ComandaDetails = () => {
  const [comanda, setComanda] = useState(null);
  const [error, setError] = useState(null);
  const [Tr, setTr] = useState('');
  const [Tecnico, setTecnico] = useState('');
  const [update, setUpdate] = useState(false);
  const [SelectValue, setSelectValue] = useState('');
  const [Tecnicos, setTecnicos] = useState([]);
  const {cod} = useParams()
  const navigate = useNavigate();


  useEffect(() => {
    const fetchComanda = async () => {
      try {
        const response = await axios.get(`${urlEnv}/api/comandas/${cod}`);
        setComanda(response.data);

        if(response.data.TR) {
          setTr(response.data.TR)
        } else {
          setTr('Sin trabajo Realizado')
        }
        setTecnico(response.data.Tech1)
      } catch (err) {
        setError('Error al obtener la información de la comanda.');
      }
    };
    fetchComanda();
    axios.get(`${urlEnv}/api/Tech`)
          .then(response => setTecnicos(response.data))
          .catch(error => console.error('Error al obtener Tecnicos:', error))
  }, [cod],update, Tecnicos);
  
  if (error) {
    return <div>{error}</div>;
  }
  
  if (!comanda) {
    return <div>Cargando información de la comanda...</div>;
  }
  const HandleBackClick = () =>{
    navigate('/')
  }

  const handleSelectChange = (value) =>{
    setSelectValue(value)
  }

  const FechaHoy = new Date()
  const HandleSaveClick = () =>{

    switch(comanda.Estado) {

      case 'EMITIDO':
        // Update the comanda
        axios.put(`${urlEnv}/api/comandas/${cod}`, {
          ...comanda,
          TR: Tr,
          Hinicio: new Date(FechaHoy).toISOString(),
          Estado: 'EN CURSO',
          Tech1: SelectValue
        })
        .catch(error => console.error('Error updating comanda:', error));
        setUpdate(!update)
      break;

      case 'EN CURSO':
        // Update the comanda
        axios.put(`${urlEnv}/api/comandas/${cod}`, {
          ...comanda,
          TR: Tr,
          Fecha_aprobacion:new Date(FechaHoy).toISOString(),
          Estado: 'FINALIZADO'
        })
        .then(response => {
            alert('Trabajo Actualizado');
        })
        .catch(error => console.error('Error updating comanda:', error));
      break;

      default:
        alert('alerta de funcionamiento')
      break;
    }
  }

  const calcularDuracion = (horaInicio, horaFin) => {
    if (!horaInicio || !horaFin) return 'N/A'; // Manejar valores nulos o indefinidos
  
    const msDiferencia = new Date(horaFin) - new Date(horaInicio); // Diferencia en milisegundos
    const horas = Math.floor(msDiferencia / (1000 * 60 * 60)); // Convertir a horas
    const minutos = Math.floor((msDiferencia % (1000 * 60 * 60)) / (1000 * 60)); // Minutos restantes
    return `${horas} horas y ${minutos} minutos`;
  }

  //<Td>{comanda.Tech1}</Td>
  return (
    <Container>
      <Title>Pedido de mantenimiento</Title>
        <SectionTitle>Pedido Numero: {comanda.COD}</SectionTitle>

      {/* Sección de fechas */}
      <Row>
        <Label>Fecha y hora: </Label>
        <Value>{new Date(comanda.Fecha).toLocaleString()}</Value>
      </Row>
      <Row>
        <Label>Fecha y hora de inicio: </Label>
        <Value>{new Date(comanda.Hinicio).toLocaleString()}</Value>
      </Row>
      <Row>
        <Label>Fecha y hora de cierre: </Label>
        <Value>{new Date(comanda.Fecha_aprobacion).toLocaleString()}</Value>
      </Row>
      <Row>
        <Label>{comanda.Estado === 'EN CURSO' ? 'Tiempo en curso:':'Duración Total:' }</Label>
        <Value>{
          comanda.Estado === 'EN CURSO' ? (
            calcularDuracion( comanda.Hinicio, new Date(Date()))    
          ) : (calcularDuracion( comanda.Hinicio, comanda.Fecha_aprobacion))
        }</Value>
      </Row>

      {/* Tabla con información general */}
      <SectionTitle>Información General</SectionTitle>
      <Table>
        <thead>
          <tr>
            <Th>Responsable</Th>
            <Th>Solicitante</Th>
            <Th>Máq</Th>
            <Th>Aprobado</Th>
            <Th>Estado</Th>
            <Th>Sector</Th>
            <Th>Urgencia</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {comanda.Estado === 'EMITIDO' ? (
              <Td><SelectList 
                    Array={Tecnicos}
                    onChange={handleSelectChange}
                    column='Tecnico'
                    defaultValue={Tecnico}
                  />
              </Td>
            ) : (
              <Td>{comanda.Tech1}</Td>
            )}
            <Td>{comanda.Supervisor}</Td>
            <Td>{comanda.MAQ}</Td>
            <Td>{comanda.Aprobado ? 'Sí' : 'No'}</Td>
            <Td>{comanda.Estado}</Td>
            <Td>{comanda.Sector}</Td>
            <Td>{comanda.Criticidad}</Td>
          </tr>
        </tbody>
      </Table>

      {/* Tabla con información de seguridad */}
      <SectionTitle>Controles de Seguridad</SectionTitle>
      <Table>
        <thead>
          <tr>
            <Th>Parada de emergencia</Th>
            <Th>Protecciones</Th>
            <Th>Sensores</Th>
            <Th>EPP</Th>
            <Th>ATS caliente</Th>
            <Th>ATS altura</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>{comanda.SH1 ? 'Si' : 'No'}</Td>
            <Td>{comanda.SH2 ? 'Si' : 'No'}</Td>
            <Td>{comanda.SH3 ? 'Si' : 'No'}</Td>
            <Td>{comanda.SH4 ? 'Si' : 'No'}</Td>
            <Td>{comanda.SH5 ? 'Si' : 'No'}</Td>
            <Td>{comanda.SH6 ? 'Si' : 'No'}</Td>
          </tr>
        </tbody>
      </Table>
            <SubTitleText>Motivo de pedido</SubTitleText>
                <Texto>{comanda.Motivo}</Texto>
            <SubTitleText>Detalle de trabajo realizado</SubTitleText>
                {comanda.Estado === 'EN CURSO' ? (
                <InputText
                    type="text" 
                    value={Tr} 
                    onChange={(e) => setTr(e.target.value)} 
                />
                    ) : (
                        <Texto>{comanda.TR}</Texto>
                    )}
            <ButtonFormContainer>
              <ButtonForm onClick={()=> HandleBackClick()} >Volver</ButtonForm>
              <ButtonForm onClick={()=> HandleSaveClick()} disabled={comanda.Estado === 'FINALIZADO' ? true : false}>{comanda.Estado === 'EMITIDO' ? 'Iniciar' : 'Finalizar'}</ButtonForm>
            </ButtonFormContainer>
    </Container>
  );
};

export default ComandaDetails;
