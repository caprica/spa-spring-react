import React from 'react'

import useFetchData from './hooks/useFetchData'

const User = ({username}) => {

    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useFetchData({
        url: `/api/users/${username}`
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
                    <tr>
                        <td>{state.data.username}</td>
                        <td>{state.data.name}</td>
                    </tr>
                </tbody>
            </table>
            <p>{state.data.loading ? 'Fetching user... ' : ''}</p>
        </div>
    )

}

export default User
