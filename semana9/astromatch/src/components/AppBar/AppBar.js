import React from 'react'
import { AppBarContainer, IconMatchesContainer, Logo, IconFindContainer  } from './Styled'
import { GroupAdd, GroupRounded} from '@material-ui/icons'
import { Badge, Typography } from '@material-ui/core'

function AppBar(props){

    return(
        <AppBarContainer>
                <IconMatchesContainer>
                    {props.iconChange === 'home'&&
                    <Badge badgeContent={props.matches.length} color='primary' max={10} >
                        <GroupRounded color='secondary' fontSize='large' onClick={props.changePage} />
                    </Badge>
                    }
                </IconMatchesContainer>
                <Logo>
                    <h2>astromatch</h2>
                </Logo>
                <IconFindContainer>
                    {props.iconChange === 'matches' &&
                    <GroupAdd color='secondary' fontSize='large' onClick={props.changePage} />}
                </IconFindContainer>
        </AppBarContainer>
    )
}
export default AppBar;