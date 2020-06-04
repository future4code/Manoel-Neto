import React from 'react';
import './App.css';
import { Etapa1 } from './Components/Etapa1/Etapa1';
import { Etapa2 } from './Components/Etapa2/Etapa2';
import { Etapa3 } from './Components/Etapa3/Etapa3';
import { Etapa4 } from './Components/Final/Etapa4';
import styled from 'styled-components'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  flex-grow: 1;
`
const ProximaEtapa = styled.button`
  align-self: center;
  margin-top: 10px;
`

class App extends React.Component {
  state = {
    etapa: 1,
  }

  renderizaEtapa = () =>{
    switch(this.state.etapa){
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />
      case 4:
        return <Etapa4 />
      default:
        return <Etapa4 />
    }
  }

  irParaProximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1,
    })
  }

  render (){
  return (

    <AppContainer>

    {this.renderizaEtapa()}
    <br />{this.state.etapa !==4 &&(
    <ProximaEtapa onClick={this.irParaProximaEtapa}>Próxima Etapa</ProximaEtapa>)}

    </AppContainer>
  )
  }
}

export default App;
