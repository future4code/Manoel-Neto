import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const WrapAll = styled.div`
    display: flex;
    min-height: 85vh;
    justify-content: center;
    align-items: flex-start;

`
const RegisterWrap = styled.div`
    min-width: 300px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Label = styled.label`
    margin: 10px 10px;
`
const SendRegister = styled.button`
    font-size: 16px;
    background: grey;
    color: white;
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    outline: none;
`
const Titulo = styled.h3`
    color: black;
    padding: 10px;
`

const InputValue = styled.input`
    width: 150px;
    display: inline-flex;
    margin: 10px 5px;
    padding: 5px 5px;
    outline: none;
`
const DataCollection = styled.div`
    width: auto;
`



export class Registration  extends React.Component {

    state = {
        nameValue: '',
        emailValue:'',
    }

    nameChange = event => {
        this.setState({
            nameValue: event.target.value
        })
    }

    emailChange = event => {
        this.setState({
            emailValue: event.target.value
        })
    }

    createUser = () => {
        const dataToSend = {
            name: this.state.nameValue,
            email: this.state.emailValue
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', dataToSend, {
            headers: {
                Authorization: 'manoel-queiroz-neto-mello'
            }
        }).then((response) => {
            window.alert(`Usuário ${this.state.nameValue} criado com sucesso!`)
            this.setState({
                nameValue: '',
                emailValue: ''
            })
        }).catch((e) => {
            window.alert('Houve um erro ao enviar os dados.' + e)
            this.setState({
                nameValue: '',
                emailValue: ''
            })
        })
        
    }
    
    render(){
        return(
            <WrapAll>
                <RegisterWrap>
                    <Titulo>Cadastrar</Titulo>
                    <DataCollection>

                        <Label>Nome:</Label>
                        <InputValue 
                            required
                            id='name'
                            name='name'
                            type='text'
                            value={this.state.nameValue} 
                            onChange={this.nameChange}
                        /><br />

                        <Label>Email: </Label>
                        <InputValue
                            required
                            id='email'
                            name='email'
                            type='text'
                            value={this.state.emailValue}
                            onChange={this.emailChange} 
                        /><br />

                    </DataCollection>
                    <SendRegister onClick={this.createUser}>Salvar</SendRegister>
                </RegisterWrap>
            </WrapAll>
        )
    }
}