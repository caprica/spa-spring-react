import React, {useEffect, useState} from 'react'

import { Link } from 'react-router-dom'

const getUsers = async () => await (await fetch('/api/users')).json()

function Users() {

    const [data, setData] = useState({users: [], isFetching: false})

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setData({users: data.users, isFetching: true})
                const response = await getUsers()
                setData({users: response, isFetching: false})
            } catch (e) {
                console.log(e)
                setData({users: data.users, isFetching: false})
            }
        }
        fetchUsers()
    }, [])

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
                        data.users.map((user, key) =>
                            <tr key={user.username}>
                                <td><Link className="App-link" to={`/users/${user.username}`}>{user.username}</Link></td>
                                <td>{user.name}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <p>{data.isFetching ? 'Fetching users...' : ''}</p>
        </div>
    )

}

export default Users