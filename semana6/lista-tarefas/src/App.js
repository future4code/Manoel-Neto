import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filter: ''
    }

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {
    const taskString = localStorage.getItem("tarefas")

    if (taskString){
      const tarefas = JSON.parse(taskString)

      this.setState({tarefas})
    }

  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    if(this.state.inputValue) {
      const newTask = {
        id: Date.now(),
        specs: this.state.inputValue,
        done: false
      }

      this.setState({tarefas: [...this.state.tarefas, newTask], inputValue: ""})
    }

    console.log(this.state.tarefas)

  }

  selectTarefa = (id) => {
    const newTasks = this.state.tarefas.map(task => {
      if(task.id === id){
        return{
          ...task,
          done: !task.done
        }
      }
      return task
    })
    this.setState({tarefas: newTasks})
  }

  onChangeFilter = (event) => {
    this.setState({filter: event.target.value})
  }

  deleteTarefa = (id) => {
    const deleteTask = this.state.tarefas.filter(task => {
      return task.id !== id
    })

    this.setState({tarefas: deleteTask})

  }

  deleteAll = () =>{
    const deleteAll = this.state.tarefas.filter(task =>{
      if(task.id){
        return true
      } 
    })

    this.setState({tarefas: deleteAll})
  }

  onChangeFilter = (event) => {
    this.setState({filter: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
        switch (this.state.filter) {
          case 'pendentes':
            return !tarefa.done
          case 'completas':
            return tarefa.done
          default:
            return false
        }
      })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
          <button onclick={this.deleteAll}>Deletar tudo</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList >
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                key={tarefa.id}
                completa={tarefa.done}
                onClick={() => this.selectTarefa(tarefa.id)}
                onDoubleClick={() => this.deleteTarefa(tarefa.id)}
              >
                {tarefa.specs}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
