import styled from 'styled-components';
import Header from './componentes/header/FormContainer.js';
import Titulo from './componentes/input/titulo.js';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%,#326589);

 `


function App() {
  return (
    <AppContainer>
        
       <Titulo> Sua experiência começa aqui...</Titulo>
      
    </AppContainer>
 
   
  );
}

export default App;
