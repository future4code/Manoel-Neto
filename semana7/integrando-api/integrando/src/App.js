import React from 'react';
import './App.css';
import { Registration } from './components/Register/RegisterUser';
import { List } from './components/List/Userlist';
import { UserDetails } from './components/UserDetails/UserDetails';
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const ButtonBar = styled.div`
  width: 100vw;
  height: 5vh;
  background-color: black;
  color: white;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const PrincipalButton = styled.button`
  border: 1px solid white;
  background: grey;
  color: white;
  padding: 5px;
  outline: none;

  :hover {
    background: lightgrey;
  }

`

class App extends React.Component {
  
  state = {
    page: 'register'
  }

  renderPage = () => {
    switch(this.state.page){
      case 'register':
        return <Registration />;
      
      case 'list':
        return <List changePage={() => this.handleUserDetails('userInfo')} />
      
      default: 
        return <Registration />
    }
  }

  handleUserDetails = (newPage) => {
    this.setState({
      page: newPage
    })
  }

  changePage = () => {
    (this.state.page === 'register') ? this.setState({page: 'list'}) : this.setState({page: 'register'})
  }

  returnPage = () => {
    this.setState({
      page: 'list'
    })
  }

  render(){ 

    const viewedText = (this.state.page === 'register') ? 'Exibir Lista' : 'Exibir Registro'

  return (
    <Wrapper>
      <ButtonBar>
        <PrincipalButton onClick={this.changePage}>{viewedText}</PrincipalButton>
        {this.state.page === 'userInfo' && <PrincipalButton onClick={this.returnPage}>Voltar</PrincipalButton>}
      </ButtonBar>
      {this.renderPage()}
    </Wrapper>
  );
  }
}

export default App;
