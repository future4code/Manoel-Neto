import styled from 'styled-components'

export const GridContainer = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
`

export const DayCard = styled.div`
    border-right: 1px solid black;
    padding: 8px;
    flex: 1;
    width: 1%;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    align-items: center;

    :last-of-type {
        border: none;
    }
`

export const TaskItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Icons = styled.div`
    width: auto;
`
