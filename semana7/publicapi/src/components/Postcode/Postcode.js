import React from 'react'
import { PageContainer, MainTitle, InputCep, Search } from './Styled'
import { handleAddress } from '../API/API'

export class Postcode extends React.Component{
    state = {
        postalCodeValue: '',
        address: [],
        errorMessage: null
    }

    onChange = event => {
        this.setState({
            postalCodeValue: event.target.value
        })
    }



    render() {
        const fullAddress = this.state.handleAddress.map(unidade => {
            return(
            <div>
                <p>Logradouro:{unidade.logradouro}</p>
                <p>Bairro: {unidade.bairro}</p>
                <p>Cidade:{unidade.localidade}</p>
                <p>CEP: {unidade.cep}</p>
            </div>
            )
        })

        return(
            <PageContainer>
                <MainTitle>Qual o seu cep?</MainTitle>
                <InputCep value={this.state.postalCodeValue} onChange= {this.onChange} />
                <Search onClick={() => handleAddress(this.state.postalCodeValue)}>Buscar</Search>
                {fullAddress}
            </PageContainer>
        )
    }
}