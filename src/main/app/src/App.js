import React                   from 'react'

import { Switch, Route, Link } from 'react-router-dom'

import User                    from './User'
import Users                   from './Users'

import logo from './logo.svg'

import './App.css'

const Page = (props) =>
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {props.children}
        </header>
    </div>

const Home = () =>
    <Page>
        <p>
            ReactJS Client Routing and SpringMVC Server Routing
        </p>
        <span><Link className="App-link" to="/users">Users</Link></span>
    </Page>

const UsersPage = () => (
    <Page>
        <h1>Users</h1>
        <Users/>
        <span><Link className="App-link" to="/">Home</Link></span>
    </Page>
)

const UserPage = (props) => (
    <Page>
        <h1>User {props.match.params.username}</h1>
        <User username={props.match.params.username}/>
        <span><Link className="App-link" to="/">Home</Link> | <Link className="App-link" to="/users">Users</Link></span>
    </Page>
)

const NotFound = () => (
    <Page>
        <h1>Not Found</h1>
        <span><Link className="App-link" to="/">Home</Link></span>
    </Page>
)

const App = () => (
    <Switch>
        <Route exact path='/'                component={Home}     />
        <Route exact path='/index.html'      component={Home}     />
        <Route exact path='/users'           component={UsersPage}/>
        <Route       path='/users/:username' component={UserPage} />
        <Route                               component={NotFound} />
    </Switch>
)

export default App
