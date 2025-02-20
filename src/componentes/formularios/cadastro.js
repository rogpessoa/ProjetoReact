import styled from "styled-components";

import { useState } from "react";
import Titulo from "../input/titulo";


const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%,#326589);

 `

function Cadastro  ()  {
  const [formData, setFormData] = useState({
    nome: "",
    matricula: "",
    email: "",
    dataNascimento: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados cadastrados:", formData);
  };

  return (
    <AppContainer>
      <Titulo>Cadastro</Titulo>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="nome" placeholder="Nome Completo" onChange={handleChange} />
        <Input type="text" name="matricula" placeholder="Matrícula" onChange={handleChange} />
        <Input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <Input type="date" name="dataNascimento" onChange={handleChange} />
        <Button type="submit">Cadastrar</Button>
      </Form>
      
    </AppContainer>
  );
};

export default Cadastro