import FormContainer from './componentes/header/FormContainer.js';
import FormularioCadastro from './componentes/formularios/cadastro.js';
import LoginForm from './componentes/formularios/login.js';
import SelectForm from './componentes/formularios/select.js';




function App() {
  return (
    <FormContainer>
        
        <FormularioCadastro></FormularioCadastro>
        <LoginForm></LoginForm>
        <SelectForm></SelectForm>
      
    </FormContainer>
 
   
  );
}

export default App;
