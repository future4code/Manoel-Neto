import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import {ThumbDownRounded, ThumbUpRounded } from '@material-ui/icons'
import { Card, Typography, CardContent } from '@material-ui/core'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 530px;
`

const PictureContainer = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 90%;
        height: 35vh;
        padding: 10px;
    }
`
const ContentContainer = styled(CardContent)`
    flex: 1;
`
const CardContainer = styled(Card)`
    background: white;
    display: flex;
    flex-direction: column;
    height: 500px;
    margin: 10px;
`
const ActionContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
`

function Home(props){

    const [profile, setProfile] = useState({})

    const getProfiles = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/manoelneto/person')
        .then(response =>{
            setProfile(response.data.profile)
            props.getMatches()
        })
        .catch(e => {
            alert('Houve um erro inesperado.')
        })
    }

    const choosePerson = (optionChosen) => {
        const body ={
            id: profile.id,
            choice: optionChosen
        }
        axios
        .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/manoelneto/choose-person', body)
        .then(response => {
            getProfiles()
        }).catch(e => {
            alert('Algo inesperado aconteceu.')
        })
    }

    useEffect(() => {
        getProfiles()
    }, [])

    const mainInfo = profile.name + ', ' + profile.age

    return(

        <Container>
            <CardContainer>
                <PictureContainer>
                    <img alt="" src={profile.photo} />
                </PictureContainer>
                <ContentContainer>
                    <Typography color='primary' variant='h5'>{mainInfo}</Typography>
                    <Typography color='primary' variant='subtitle1'>{profile.bio}</Typography>
                </ContentContainer>
            </CardContainer>
            <ActionContainer>
                <ThumbDownRounded style={{fontSize: 60, color:'red'}} onClick={() => choosePerson(false)} />
                <ThumbUpRounded style={{ fontSize: 60, color:'green' }} onClick={() => choosePerson(true)} />
            </ActionContainer>

        </Container>
    )
}
export default Home;