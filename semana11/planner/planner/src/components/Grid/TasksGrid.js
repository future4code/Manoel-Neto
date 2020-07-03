import React from 'react'
import { GridContainer, DayCard, TaskItem, Icons} from './Styled'
import { deleteData } from '../../Api'
import { Edit, Delete } from '@material-ui/icons'

const TaskGrid = (props) => {

    const tasks = props.data

    const monday = [], tuesday = [], wednesday = [], thursday = [], friday = [], saturday = [], sunday = []

    tasks.forEach(item => {
        if(item.day === '1'){
            sunday.push(item)
        }else if(item.day === '2'){
            monday.push(item)
        }else if(item.day === '3'){
            tuesday.push(item)
        }else if(item.day === '4'){
            wednesday.push(item)
        }else if(item.day === '5'){
            thursday.push(item)
        }else if(item.day === '6'){
            friday.push(item)
        }else if(item.day === '7'){
            saturday.push(item)
        }
    })

    const deleteTask = async(id) => {
        await deleteData(id)
        props.getTasks()
    }

    return(
        <GridContainer>
            <DayCard>
                Segundax <hr/>
                    {monday && monday.map(item => {
                        return(
                            <TaskItem key={item.id}>
                                <span>{item.text}</span> 
                                <Icons>
                                    <Edit onClick={() => props.update(item.id, item.text, item.day)} />
                                    <Delete data-testid={'delete-segunda'} onClick={() => deleteTask(item.id)} />
                                </Icons>
                            </TaskItem>)
                    })}
            </DayCard>

            <DayCard>
                Terçax <hr/>
                    {tuesday && tuesday.map(item => {
                        return(
                        <TaskItem  key={item.id}>
                            <span>{item.text}</span> 
                            <Icons>
                                <Edit data-testid={'update-terca'} onClick={() => props.update(item.id, item.text, item.day)} />
                                <Delete data-testid={'delete-terca'} onClick={() => deleteTask(item.id)} />
                            </Icons>
                        </TaskItem>)
                    })}
            </DayCard>

            <DayCard>
                Quartax <hr/>
                    {wednesday && wednesday.map(item => {
                        return(
                            <TaskItem key={item.id}>
                                <span>{item.text}</span> 
                                <Icons>
                                    <Edit onClick={() => props.update(item.id, item.text, item.day)} />
                                    <Delete data-testid={'delete-quarta'} onClick={() => deleteTask(item.id)} />
                                </Icons>
                            </TaskItem>)                    
                        })}
            </DayCard>

            <DayCard>
                Quintax <hr/>
                    {thursday && thursday.map(item => {
                        return(
                            <TaskItem key={item.id}>
                                <span>{item.text}</span> 
                                <Icons>
                                    <Edit onClick={() => props.update(item.id, item.text, item.day)} />
                                    <Delete data-testid={'delete-quinta'} onClick={() => deleteTask(item.id)} />
                                </Icons>
                            </TaskItem>)
                    })}

            </DayCard>

            <DayCard>
                Sextax <hr/>
                    {friday && friday.map(item => {
                        return(
                            <TaskItem key={item.id}>
                                <span>{item.text}</span> 
                                <Icons>
                                    <Edit data-testid={'update-sexta'} onClick={() => props.update(item.id, item.text, item.day)} />
                                    <Delete data-testid={'delete-sexta'} onClick={() => deleteTask(item.id)} />
                                </Icons>
                            </TaskItem>)
                    })}
            </DayCard>

            <DayCard>
                Sabadox <hr/>
                    {saturday && saturday.map(item => {
                        return(
                            <TaskItem key={item.id}>
                                <span>{item.text}</span> 
                                <Icons>
                                    <Edit onClick={() => props.update(item.id, item.text, item.day)} />
                                    <Delete data-testid={'delete-sabado'} onClick={() => deleteTask(item.id)} />
                                </Icons>
                            </TaskItem>)                    
                        })}
                
            </DayCard>

            <DayCard>
                Domingox <hr/>
                    {sunday && sunday.map(item => {
                        return(
                            <TaskItem key={item.id}>
                                <span>{item.text}</span> 
                                <Icons>
                                    <Edit onClick={() => props.update(item.id, item.text, item.day)} />
                                    <Delete data-testid={'delete-domingo'} onClick={() => deleteTask(item.id)} />
                                </Icons>
                            </TaskItem>)
                    })}
            </DayCard>
        </GridContainer>
    )
}

export default TaskGrid