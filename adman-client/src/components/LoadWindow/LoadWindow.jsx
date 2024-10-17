import React, { useState } from 'react';
import axios from 'axios';
import {
  LoadContainer,
  TitleContainer,
  InputContainer,
  ButtonContainer,
  SpinnerContainer,
  Spinner,
  MainContainer
} from './Style-LoadWindow.jsx'

const LoadWindow = () => {
  const urlEnv = process.env.REACT_APP_URL_HOME;
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);  // Estado para manejar el spinner

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Por favor selecciona un archivo CSV.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      setLoading(true)
      const response = await axios.post(`${urlEnv}/api/upload-csv`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },        
      });

      alert(response.data.message);
    } catch (error) {
      console.error('Error subiendo el archivo:', error);
      alert('Hubo un error al subir el archivo.');
    } finally {
      setLoading(false);  // Ocultar el spinner cuando finaliza el proceso
    }
  };

  return (
    <MainContainer>
      <LoadContainer>
        <TitleContainer>Subir archivo CSV</TitleContainer>
        <InputContainer type="file" accept=".csv" onChange={handleFileChange} />
        <ButtonContainer onClick={handleUpload}>Subir e importar</ButtonContainer>
        
        {/* Mostrar el spinner solo cuando `loading` esté en true */}
        {loading && (
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        )}
      </LoadContainer>
    </MainContainer>
  );
};

export default LoadWindow;