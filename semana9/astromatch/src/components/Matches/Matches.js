import React from 'react'
import styled from 'styled-components'
import { Avatar, List, ListItem, ListItemText, Typography } from '@material-ui/core'

const MatchesContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    height: 500px;
    overflow: auto;
`
const SingleMatchName = styled(ListItemText)`
    margin-left: 10px;
    font-size: 16px;
    color: white;
`

function Matches(props){

    return(
        <MatchesContainer>
            {props.matches.length === 0 && <Typography variant='body1' color='secondary'>Você ainda nao possui nenhum match</Typography>}
            {props.matches.map(match => 
            <List key={match.id}>
                <ListItem button divider>
                    <Avatar src={match.photo} />
                    <SingleMatchName primary={match.name} />
                </ListItem>
            </List>)}
        </MatchesContainer>
    )
}
export default Matches;