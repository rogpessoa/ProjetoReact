import React, { useState } from "react";
import styled from "styled-components";
import Input from "../input/input";
import Titulo from "../input/titulo";

const FormContainer = styled.form`
  width: 300px;
  padding: 20px 0;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
  border-radius: 8px;
  text-align: center;
  display: center;
  flex-direction: column;
  
`;

const InputContainer = styled.div`
  display: center;
  flex-direction: column;
  
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
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

// Componente reutilizável para os campos de entrada
const InputField = ({ label, type, value, onChange }) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input type={type} value={value} onChange={onChange} required />
    </InputContainer>
  );
};

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do Login:", formData);
    
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Titulo>Login</Titulo>
      <InputField
        label="E-mail"
        type="email"
        value={formData.email}
        onChange={(e) => handleChange({ target: { name: "email", value: e.target.value } })}
      />
      <InputField
        label="Senha"
        type="password"
        value={formData.senha}
        onChange={(e) => handleChange({ target: { name: "senha", value: e.target.value } })}
      />
      <Button type="submit">Entrar</Button>
    </FormContainer>
  );
};

export default LoginForm;
