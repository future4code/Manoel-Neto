import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { LoginPage } from '../LoginPage/LoginPage'
import { HomePage } from '../HomePage/HomePage'
import { TripsGridPage } from '../TripsGridPage/TripsGridPage'
import { ApplyPage } from '../ApplyPage/ApplyPage'
import { CreateTripPage } from '../CreateTripPage/CreateTripPage'
import { AdminPage } from '../AdminPage/AdminPage'
import { TripsDetailsPage } from '../TripDetailsPage/TripDetailsPage'

function PrivateRoute({component: Component, ...rest}) {

    const token = window.localStorage.getItem('token')

    const returnedComponent = token === null  ? <Redirect to={{pathname: '/'}} /> : <Route {...rest}><Component /></Route>

    return returnedComponent
}

export const Routes = () => {

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

            <Route exact path='/trips/:tripId/apply'>
                <ApplyPage />
            </Route>

            <PrivateRoute exact path='/trips/create' component={CreateTripPage} />

            <PrivateRoute exact path='/adm' component={AdminPage} />

            <PrivateRoute exact path='/trips/details/:tripId' component={TripsDetailsPage} />

            <Route path='/404'>
            </Route>
        </Switch>
    </BrowserRouter>
    )
}
