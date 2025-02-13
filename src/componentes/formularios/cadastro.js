import Input from "../input/input";
import styled from "styled-components";
import FormContainer from "../header/FormContainer";
import React, { useState } from "react";
import Titulo from "../input/titulo";

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


const FieldInput = styled.h3`
   display: center;
   flex-direction: column; 
    
    
   
`


const Fields = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 1px;
    text-align: center;
    display: center;
    justify-content: flex;
    align-items: center;
`

const CadastroDiv = styled.div`
    margin-top: 30px;
    display: center;
    width: 100%;
    justify-content: flex;
    cursor: pointer;
    align-items: flex;
    
`

const InputField = ({ label, type, value, onChange }) => {
    return (
      <FieldInput>
        {label}:
        <Input type={type} value={value} onChange={onChange} required />
      </FieldInput>
    );
  };
  
  // Componente FormularioCadastro
  const FormularioCadastro = () => {
    const [formData, setFormData] = useState({
      nomeCompleto: "",
      matricula: "",
      email: "",
      dataNascimento: ""
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Cadastro realizado com sucesso!");
      console.log(formData);
    };
  
    return (
      <FormContainer>
        <CadastroDiv>
          <Titulo>Cadastro</Titulo>
            <Fields onSubmit={handleSubmit}>
              <InputField
                label="Nome Completo"
                type="text"
                value={formData.nomeCompleto}
                onChange={(e) => handleChange({ target: { name: "nomeCompleto", value: e.target.value } })}
              />
              <InputField
                label="Matrícula"
                type="text"
                value={formData.matricula}
                onChange={(e) => handleChange({ target: { name: "matricula", value: e.target.value } })}
              />
              <InputField
                label="E-mail"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange({ target: { name: "email", value: e.target.value } })}
              />
              <InputField
                label="Data de Nascimento"
                type="date"
                value={formData.dataNascimento}
                onChange={(e) => handleChange({ target: { name: "dataNascimento", value: e.target.value } })}
              />
              <Button type="submit">Cadastrar</Button>
            </Fields>
        </CadastroDiv>
      </FormContainer>
    );
  };
  
  export default FormularioCadastro;
