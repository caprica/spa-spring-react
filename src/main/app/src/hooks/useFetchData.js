import {useEffect, useReducer} from 'react'

const initialState = {
    loading: false,
    error  : false,
    data   : []
}

const dataReducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                 loading: action.loading
            }
        case 'ERROR':
            return {
                ...state,
                loading: false,
                error  : action.error
            }
        case 'SET_DATA':
            return {
                ...state,
                loading: false,
                data   : action.data
            }
        default:
            return {
                ...state
            }
    }
}

const useFetchData = ({url}) => {
    const [state, dispatch] = useReducer(dataReducer, initialState)

    useEffect(() => {
        const getInitialData = async () => {
            try {
                const response = await fetch(url)
                const data = await response.json()
                dispatch({
                    type: 'SET_DATA',
                    data
                })
            } catch (error) {
                dispatch({
                    type: 'ERROR',
                    error
                })
            }
        }
        getInitialData()
    }, [url])

    return [state, dispatch]
}

export default useFetchData

// Based on https://codebushi.com/react-hooks-higher-order-reducers/
