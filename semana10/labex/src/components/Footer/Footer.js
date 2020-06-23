import React from 'react'
import { FooterContainer,GreetingsContainer, SocialMediaContainer, SocialText, SocialIcons } from './Styled'
import { Instagram, Facebook, Twitter, LinkedIn } from '@material-ui/icons'
import { Typography } from '@material-ui/core'

export function Footer() {
    return(
        <FooterContainer>

            <GreetingsContainer>
                oi
            </GreetingsContainer>

            <SocialMediaContainer>
                <SocialText>
                    <Typography variant='h6' style={{color: '#FFFFFF'}}>Embarque nessa com a gente!</Typography>
                </SocialText>

                <SocialIcons>
                    <Instagram color='primary' style={{fontSize: 40}} />
                    <Facebook color='primary' style={{fontSize: 40}}  />
                    <Twitter color='primary' style={{fontSize: 40}} />
                    <LinkedIn color='primary' style={{fontSize: 40}}  />
                </SocialIcons>
            </SocialMediaContainer>

        </FooterContainer>
    )
}