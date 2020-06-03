import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { UserDetails } from '../UserDetails/UserDetails'

const WrapAll = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 85vh;
    justify-content: flex-start;
    align-items: center;

`
const NamesDiv = styled.div`
    display: flex;
    border-bottom: 1px dashed black;
    justify-content: space-between;
    width: 200px;
`
const DeleteButton = styled.button`
    font-size: 16px;
    border: none;
    color: black;
    outline: none;
    align-items: flex-end;

    :hover {
        color: red;
    }
`
const axiosConfig = {
    headers: {
        Authorization: 'manoel-queiroz-neto-mello'
    }
}

export class List  extends React.Component {

    state = {
        users: [],
        id: '',
        name: ''
    }
     
    componentDidMount () {
        this.getData()
    }

    getData = () => {
    
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', axiosConfig ).then((response) => {
            this.setState({users: response.data})
        }).catch((e) => {
            this.setState({errorMessage: 'Ocorreu um erro!'})
        })
    }

    deleteUser = userId => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, axiosConfig).then((response)=> {
            window.alert('Usuario deletado com sucesso.')
            this.getData();
        }).catch((e) => {
            window.alert('Houve um erro ao deletar o usuário.' + e)
        })

    }

    confirmDelete = (id, userName) => {
        const confirmMessage = window.confirm('Tem certeza que quer deletar o usuário '+ userName+'?\n') 
        confirmMessage ? this.deleteUser(id) : alert('Usuário não foi deletado')
    }

    handleUserId = (userInfoId, userInfoName) => {
        this.setState({
            id: userInfoId,
            name: userInfoName
        })
    }
    
    render(){
        
        const users = this.state.users.map(user => {
                return(
            <NamesDiv  key={user.id} >
                <p onClick={() => this.handleUserId(user.id, user.name)}>{user.name}</p> <DeleteButton onClick={() => this.confirmDelete(user.id, user.name)}>X</DeleteButton>
            </NamesDiv>
                )   
        })

        return(
            <WrapAll>
                {this.state.users.length === 0 && <div>Carregando...</div>}
                {this.state.id ==='' ? users : <UserDetails key={users.id} getUserId={this.state.id} deleteUser={() => this.confirmDelete(this.state.id, this.state.name)} />}
            </WrapAll>
        )
    }
}