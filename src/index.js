import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './componentes/header/FormContainer';
import { createGlobalStyle } from 'styled-components';
import LoginForm from './componentes/formularios/login';
import SelectForm from './componentes/formularios/select';
import Cadastro from './componentes/formularios/cadastro';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
}

  li {
    list-style: none;
  }
`



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
       <BrowserRouter>
         <Header />
            <Routes>
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/" element={<App />} />
              <Route path='/login' element={<LoginForm />} />
              <Route path='/selecione' element={<SelectForm />} />
            </Routes>
          

        </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
