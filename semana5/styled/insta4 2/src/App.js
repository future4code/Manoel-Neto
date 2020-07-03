import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    posts: [
        {
          nomeUsuario: "_maanoeln",
          fotoUsuario: "https://picsum.photos/50/50?a=1",
          fotoPost: "https://picsum.photos/200/150?a=1"
        },
        {
          nomeUsuario: "kevcass",
          fotoUsuario: "https://picsum.photos/50/50?a=2",
          fotoPost: "https://picsum.photos/200/150?a=2"
        },
        {
          nomeUsuario: "walp",
          fotoUsuario: "https://picsum.photos/50/50?a=3'",
          fotoPost: "https://picsum.photos/200/150?a=3"
        }
      ],

      valorNomeUsuario : "",
      valorFotoUsuario : "",
      valorFotoPost : "",
  };

  addNewPost = () => {

    const newPost = {
      nomeUsuario: this.state.valorNomeUsuario,
      fotoUsuario: this.state.valorFotoUsuario,
      fotoPost: this.state.valorFotoPost
    }

    const newPosts = [newPost, ...this.state.posts]

    this.setState({
      posts: newPosts,
      valorNomeUsuario: "",
      valorFotoUsuario: "",
      valorFotoPost: ""
    })
  };

  onChangeInputNomeUsuario = event =>{
    this.setState({
      valorNomeUsuario: event.target.value
    })
  }

  onChangeInputFotoUsuario = event =>{
    this.setState({
      valorFotoUsuario: event.target.value
    })
  }

  onChangeInputFotoPost = event =>{
    this.setState({
      valorFotoPost: event.target.value
    })
  }

  render() {

    const listaPosts = this.state.posts.map(post => {
      return (
        <Post
        nomeUsuario = {post.nomeUsuario}
        fotoUsuario = {post.fotoUsuario}
        fotoPost = {post.fotoPost}
        key = {post.nomeUsuario}
        />
      )
    })

    return (
      <div className={'app-container'}>
        <input
          value={this.state.valorNomeUsuario}
          onChange={this.onChangeInputNomeUsuario}
          placeholder={"Nome de usuario"}
        />

        <input
          value={this.state.valorFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
          placeholder={"Link foto usuario"}
        />

        <input
          value={this.state.valorFotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder={"Link foto post"}
        />

        <button onClick={this.addNewPost}>Postar</button>

        {listaPosts}
      </div>
    );
  }
}

export default App;
