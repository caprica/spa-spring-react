import React, {useEffect, useState} from 'react'

const getUser = async (username) => await (await fetch('/api/users/' + username)).json()

const User = ({username}) => {

    const [data, setData] = useState({user: {}, isFetching: false})

    useEffect(() => {
        const fetchUser = async (username) => {
            try {
                setData({user: data.user, isFetching: true})
                const response = await getUser(username)
                setData({user: response, isFetching: false})
            } catch (e) {
                console.log(e)
                setData({user: data.user, isFetching: false})
            }
        }
        fetchUser(username)
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
                    <tr>
                        <td>{data.user.username}</td>
                        <td>{data.user.name}</td>
                    </tr>
                </tbody>
            </table>
            <p>{data.isFetching ? 'Fetching user... ' : ''}</p>
        </div>
    )

}

export default User