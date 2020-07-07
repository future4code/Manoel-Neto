import React, { useState } from 'react';
import { AppContainer, PlannerContainer } from './Styled'
import CreateTaskBar from './components/Nav/CreateTask'
import TaskGrid from './components/Grid/TasksGrid';
import { useRequestData, sendData, updateTask } from './Api';
import { useForm } from './Hooks';

function App() {

  const [ data, getTasks ] = useRequestData()
  const [ update, setUpdate ] = useState(true)
  const [ getId, setGetId ] = useState(null) 

  const { form, clear, onChange, setForm } = useForm({
    text: '',
    day: ''
  })

  const handleUpdate = (id, task, day) => {
    setUpdate(!update)
    setForm({
      text: task,
      day: day
    })
    setGetId(id)
  }

  const handleChange = event => {
    const { name, value } = event.target
    onChange(name, value)
}

  const handleClick = async(body) => {
    if(update){

      await sendData(body)
      getTasks()
      clear()

    } else if (!update) {
      await updateTask(getId, body)
      getTasks()
      clear()
      setUpdate(!update)

    }
  }

  return (
    
    <AppContainer>
      <PlannerContainer>
        <CreateTaskBar
          form={form}
          updateStatus={update}
          handleChange={handleChange}
          click={handleClick}
        />

        <TaskGrid data={data} getTasks={getTasks} update={handleUpdate} />
      </PlannerContainer>
    </AppContainer>
  );
}

export default App;
