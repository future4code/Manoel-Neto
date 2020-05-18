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
const Header2 = styled.h2`
    color: black;
    align-self: center;
`

export class Etapa4 extends React.Component {

    render(){

        return(
            <Container>
                <Header>O FORMULÁRIO ACABOU</Header>
                <Header2>Muito obrigado por participar! Entraremos em contato!</Header2>
            </Container>
        )
    }
}