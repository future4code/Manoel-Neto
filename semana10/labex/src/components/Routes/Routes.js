import React from 'react'
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom'

import { LoginPage } from '../LoginPage/LoginPage'
import { HomePage } from '../HomePage/HomePage'
import { TripsGrid } from '../TripsGridPage/TripsGridPage'
import { TripsDetails } from '../TripDetailsPage/TripDetailsPage'
import { CreateTrip } from '../CreateTripPage/CreateTripPage'
import { AdminPage } from '../AdminPage/AdminPage'


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
            <Route exact path='/trips'>
                <TripsGrid />
            </Route>
            <Route exact path='/trips/details/:id'>
                <TripsDetails />
            </Route>
            <Route exact path='/adm/createtrip'>
                <CreateTrip />
            </Route>
            <Route exact path='/adm'>
                <AdminPage />
            </Route>
            <Route exact path='/adm/tripssubscribed'>
            </Route>
            <Route exact path='/adm/tripssubscribed/details/:id'>
            </Route>
            <Route path='404'>
            </Route>
        </Switch>
    </BrowserRouter>
    )
}
