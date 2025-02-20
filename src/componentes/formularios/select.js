import React, { useState } from "react";
import styled from "styled-components";
import Titulo from "../input/titulo";

const Opcao = styled.h2`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
`

const FormContainer = styled.form`
  width: 600px;
  margin: auto;
  padding: 20px;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  background: #007bff;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;


const SelectForm = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Opção selecionada:", selectedOption);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Titulo>SELECIONE UMA OPÇÃO</Titulo>
      <Select value={selectedOption} onChange={handleChange} required>
        <option value="">Escolha uma opção</option>
        <option value="email">E-MAIL</option>
        <option value="matricula">MATRÍCULA</option>
        <option value="cpf">CPF</option>
        <option value="rg">RG</option>
      </Select>
      <Button type="submit">Enviar</Button>
    </FormContainer>
  );
};



export default SelectForm;
