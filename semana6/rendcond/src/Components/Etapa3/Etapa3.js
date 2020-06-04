import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
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
const Cursos = styled.select`
    border: 1px solid black;
    border-radius: 5px;
    align-self: center;
`
const CursoOption = styled.option`
    color: black;
`

export class Etapa3 extends React.Component {
    state = {
        cursos: ["Ensino Técnico", "Curso de Ingles"],
        valorMotivo: ""
    }

    onChangeMotivo = event => {
        this.setState({valorMotivo: event.target.value})
    }

    render(){

        let listaCursos = this.state.cursos.map(curso => {
            return <CursoOption>{curso}</CursoOption>
        })

        return(
            <Container>
                <Header>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</Header>
                <Label>5. Porque voce não terminou um curso de graduação?</Label>
                <Input onChange={this.onChangeMotivo} value={this.state.valorMotivo} />
                <Label>6. Você fez algum curso complementar?</Label>
                <Cursos>
                    {listaCursos}
                </Cursos>
            </Container>
        )
    }
}