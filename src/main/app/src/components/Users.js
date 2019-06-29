import React from 'react'

import { Link } from 'react-router-dom'

import useFetchData from './hooks/useFetchData'

function Users() {

    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useFetchData({
        url: '/api/users'
    });

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>username</th>
                        <th>name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.data.map((user, key) =>
                            <tr key={user.username}>
                                <td><Link className="App-link" to={`/users/${user.username}`}>{user.username}</Link></td>
                                <td>{user.name}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <p>{state.data.loading ? 'Fetching users...' : ''}</p>
        </div>
    )

}

export default Users
