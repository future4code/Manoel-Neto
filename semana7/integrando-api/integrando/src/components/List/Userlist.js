import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

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


export class List  extends React.Component {

    state = {
        users: []
    }
     
    componentDidMount () {
        this.getData()
    }

    componentDidUpdate(){
        this.getData()
    }

    getData = () => {
    
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
            headers: {
                Authorization: 'manoel-queiroz-neto-mello'
            }
        }).then((response) => {
            this.setState({users: response.data})
        }).catch((e) => {
            this.setState({errorMessage: 'Ocorreu um erro!'})
        })
    }

    deleteUser = userId => {
        axios.delete('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/'+`${userId}`, {
            headers: {
                Authorization: 'manoel-queiroz-neto-mello'
            }
        }).then((response)=> {
            window.alert('Deletado com sucesso!')
        }).catch((e) => {
            window.alert('Houve um erro ao deletar o usuário.')
        })

    }
    
    render(){
        
        const users = this.state.users.map(user => {
            return (
            <NamesDiv>
                <p key={user.id}>{user.name}</p> <DeleteButton onClick={() => this.deleteUser(user.id)}>X</DeleteButton>
            </NamesDiv>
            )
        })
        return(
            <WrapAll>
                {users}
            </WrapAll>
        )
    }
}