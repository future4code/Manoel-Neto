import React from 'react'
import { WrapAll, ButtonChange, ButtonDiv } from './Styled'
import { MainPage } from './components/MainPage/MainPage'
import { Postcode } from './components/Postcode/Postcode'
import { HarryPotter } from './components/HarryPotter/HarryPotter'

class App extends React.Component {
  state = {
    page: "inicial"
  }

  onClickHarry = () => {
    this.setState({
      page: "harry"
    })
    console.log("funcionou")
  }

  onClickPostal = () => {
    this.setState({
      page: "postal"
    })
    console.log("funcionou")
  }

  onClickInicial = () => {
    this.setState({
      page: 'inicial'
    })
  }

  renderPage = () => {
    switch(this.state.page){
      case "harry":
        return <HarryPotter />
      
      case "postal":
        return <Postcode />

      default: 
        return <MainPage changeHarry={this.onClickHarry} changePostal={this.onClickPostal} />
    }
  }

  render () {

    return (
      <WrapAll>
        {this.renderPage()}
        {this.state.page !== 'inicial' && <ButtonDiv><ButtonChange onClick={this.onClickInicial}>Voltar</ButtonChange></ButtonDiv>}
      </WrapAll>
    )
    }
  }

export default App;