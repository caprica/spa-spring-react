import React                   from 'react'

import { Switch, Route, Link } from 'react-router-dom'

import Home                    from './components/Home'
import Page                    from './components/Page'
import User                    from './components/User'
import Users                   from './components/Users'

import './App.css'

const UsersPage = () => (
    <Page header="Users">
        <Users/>
        <span><Link className="App-link" to="/">Home</Link></span>
    </Page>
)

const UserPage = (props) => (
    <Page header={`User ${props.match.params.username}`}>
        <User username={props.match.params.username}/>
        <span><Link className="App-link" to="/">Home</Link> | <Link className="App-link" to="/users">Users</Link></span>
    </Page>
)

const NotFound = () => (
    <Page header="Not Found">
        <span><Link className="App-link" to="/">Home</Link></span>
    </Page>
)

const App = () => (
    <Switch>
        <Route exact path='/'                component={Home} />
        <Route exact path='/index.html'      component={Home} />
        <Route exact path='/users'           component={Users}/>
        <Route       path='/users/:username' component={UserPage} />
        <Route                               component={NotFound} />
    </Switch>
)

export default App
