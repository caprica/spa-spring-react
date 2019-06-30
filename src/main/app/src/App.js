import React             from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import Home              from './components/Home'
import NotFound          from './components/NotFound'
import User              from './components/User'
import Users             from './components/Users'

import './App.css'

const App = () => (
    <Switch>
        <Route exact path='/index.html'>
            <Redirect to="/"/>
        </Route>

        <Route exact path='/'                component={Home}    />
        <Route exact path='/users'           component={Users}   />
        <Route       path='/users/:username' component={User}    />
        <Route                               component={NotFound}/>
    </Switch>
)

export default App
