import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
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

export class Etapa2 extends React.Component {
    state = {
        valorCurso: "",
        valorInstituição: "", 
    }

    onChangeCurso = event => {
        this.setState({valorCurso: event.target.value})
    }

    onChangeInstituicao = event => {
        this.setState({valorIntituicao: event.target.value})
    }

    render(){

        return(
            <Container>
                <Header>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</Header>
                <Label>5. Qual curso?</Label>
                <Input onChange={this.onChangeCurso} value={this.state.valorCurso} />
                <Label>6. Qual a unidade de ensino?</Label>
                <Input onChange={this.onChangeInstituicao} value={this.state.valorInstituicao} />
            </Container>
        )
    }
}