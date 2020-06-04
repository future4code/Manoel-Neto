import React from 'react';
import logo from './logo.svg';
import './App.css';
import { WrapAll, PageContainer, MainTitle, SelectionMenu  } from './Styled'


class App extends React.Component {

  state={
    page: 0
  }

  renderPage = () => {
    switch(this.state.page){
      case 1: 
        return <p>olá</p>
      
      case 2:
        return <p>fudeu</p>
      
      default:
        return {}
    }
  }

  handlePageNumber = event => {
    this.setState({
      page: event.target.value
    })
    
  }


  

  render(){
    const renderPage = this.state.page === 0 ? "puta" : "falsa"

    return (
      <WrapAll>
        {renderPage}
      </WrapAll>
    );
  }
}

export default App;
