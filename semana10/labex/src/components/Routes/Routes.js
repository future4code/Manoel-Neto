import React from 'react'
import { BrowserRouter, Switch, Route, useHistory, useLocation} from 'react-router-dom'

import { LoginPage } from '../LoginPage/LoginPage'
import { HomePage } from '../HomePage/HomePage'
import { TripsGridPage } from '../TripsGridPage/TripsGridPage'
import { TripsDetails } from '../TripDetailsPage/TripDetailsPage'
import { CreateTrip } from '../CreateTripPage/CreateTripPage'
import { AdminPage } from '../AdminPage/AdminPage'


export const Routes = (useLocation) => {

    const history = useHistory()
    const location = useLocation

    const goBack = () => {

        if(location === '/adm'){
            history.replace('/')
        }
        history.goBack()
    }

    return(
        <BrowserRouter>
        <Switch>
            <Route exact path='/'>
                <HomePage />
            </Route>
            <Route exact path='/login'>
                <LoginPage />
            </Route>
            <Route exact path='/trips/list'>
                <TripsGridPage />
            </Route>
            <Route exact path='/trips/details/:id'>
                <TripsDetails />
            </Route>
            <Route exact path='/trips/create/'>
                <CreateTrip />
            </Route>
            <Route exact path='/adm'>
                <AdminPage />
            </Route>
            <Route exact path='/trips/subscribed'>
            </Route>
            <Route exact path='/trips/subscribed/details/:id'>
            </Route>
            <Route path='404'>
            </Route>
        </Switch>
    </BrowserRouter>
    )
}
