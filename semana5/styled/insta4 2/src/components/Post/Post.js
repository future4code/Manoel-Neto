import React from 'react'
import './Post.css'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import {IconeSemContador} from '../IconeSemContador/IconeSemContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeMarkedPreto from '../../img/marked.svg'
import iconeMarkedWhite from '../../img/marked-white.svg'
import share from '../../img/share.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'

const PostContainer = styled.div`
  border: 1px solid gray;
    width: 300px;
    margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`
const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marked: false,
    compartilhando: false
  }

  onClickCurtida = () => {
    if(!this.state.curtido){
      this.setState({
        curtido: true,
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
      console.log("Curtiu.")
    }else{
      this.setState({
        curtido: false,
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
      console.log("Descurtiu.")
    }
  }

  onClickMarked = () => {
    if(!this.state.marked){
      this.setState({
        marked: true,
      })
    }else{
      this.setState({
        marked: false,
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    const newComment = [this.props.aoEnviarComentario]
    const newComments =[newComment, ...this.state.comments]

    this.setState({
      comments: newComments,
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })

    console.log(newComments)
  }

  onClickShare = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeMarked

    if(this.state.marked){
      iconeMarked = iconeMarkedPreto
    } else{
      iconeMarked = iconeMarkedWhite
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componentesCompartilhar

    if(this.state.compartilhando) {
      componentesCompartilhar = <SecaoCompartilhar />
    }


    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeSemContador
          icone={iconeMarked}
          onClickIcone={this.onClickMarked}
        />

        <IconeSemContador
          icone={share}
          onClickIcone={this.onClickShare}
        />
      </PostFooter>

      {componenteComentario}
      {componentesCompartilhar}
      
    </PostContainer>
  }
}

export default Post