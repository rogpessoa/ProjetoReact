import styled from "styled-components";
import Titulo from "../input/titulo";
import { Link } from "react-router-dom";


const AppOpcoes = styled.ul`
  display: flex;
  background-image: linear-gradient(90deg, #002F52 35%,rgb(243, 244, 245));
  
  
  
`;

const AppOpcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
  
`

const textoOpcoes = ['CADASTRO', 'LOGIN', 'SELECIONE'];

function Header (){
    return(
        
        <AppOpcoes>
            <Link to="/">
                <Titulo >FAÇA SEU LOGIN OU CADASTRO</Titulo>
            </Link>
            {textoOpcoes.map((texto) => (
                <Link to={`/${texto.toLowerCase()}`}>
                    <AppOpcao color="#FFF"><p>{texto}</p></AppOpcao>

                </Link>
            )

            )}
            
            
        </AppOpcoes>

    )
}


export default Header