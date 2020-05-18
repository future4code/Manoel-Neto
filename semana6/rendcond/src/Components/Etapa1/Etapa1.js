import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: flex-start;
`
const Header = styled.h2`
    color: black;
    align-self: center;
`

const Label = styled.label `
    color: black;
    align-self: center;
    margin: 10px 0;
`

const Input = styled.input`
    border: solid 1px black;
    outline: none;
    align-self: center;
`
const Escolaridade = styled.select`
    border: 1px solid black;
    border-radius: 5px;
    align-self: center;
`
const EscolaridadeOption = styled.option`
    color: black;
`

export class Etapa1 extends React.Component {
    state = {
        escolaridade: ["Ensino médio incompleto", "Ensino médio completo", "Ensino superior incompleto", "Ensino superior completo"],
        valorNome: "",
        valorIdade: "",
        valorEmail: ""  
    }

    onChangeNome = event => {
        this.setState({valorNome: event.target.value})
    }

    onChangeIdade = event => {
        this.setState({valorIdade: event.target.value})
    }

    onChangeEmail = event => {
        this.setState({valorEmail: event.target.value})
    }

    render(){

        let listaEscolaridade = this.state.escolaridade.map(escolaridade => {
            return <EscolaridadeOption>{escolaridade}</EscolaridadeOption>
        })

        return(
            <Container>
                <Header>ETAPA 1 - DADOS GERAIS</Header>
                <Label>1. Qual o seu nome?</Label>
                <Input onChange={this.onChangeNome} value={this.state.valorNome} />
                <Label>2. Qual a sua idade?</Label>
                <Input onChange={this.onChangeIdade} value={this.state.valorIdade} />
                <Label>3. Qual seu email?</Label>
                <Input onChange={this.onChangeEmail} value={this.state.valorEmail} />
                <Label>4. Qual sua escolaridade?</Label>
                <Escolaridade>
                    {listaEscolaridade}
                </Escolaridade>
            </Container>
        )
    }
}