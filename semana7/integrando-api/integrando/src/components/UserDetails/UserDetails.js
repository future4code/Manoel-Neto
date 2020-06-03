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
    width: 400px;
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
const Details = styled.span`
`

const axiosConfig = {
    headers: {
        Authorization: 'manoel-queiroz-neto-mello'
    }
}

export class UserDetails  extends React.Component {

    state = {
        users: [],
        id: this.props.getUserId
    }

    componentDidMount(){
        this.handleUserDetails(this.state.id)
    }

    componentDidUpdate(){
    }

    handleUserDetails = id => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, axiosConfig ).then((response) => {
            this.setState({users: response.data})
        }).catch((e) => {
            window.alert('Houve um erro ao buscar a informação')
        })
    }
    
    render(){
        
        const user = this.state.users
        

        return(
            <WrapAll>
                {this.state.users.length === 0 ? <div>Carregando...</div> :
                <NamesDiv>
                    <Details>{user.name}</Details> <Details>{user.email}</Details><DeleteButton onClick={this.props.deleteUser}>x</DeleteButton>
                </NamesDiv>}
            </WrapAll>
        )
    }
}