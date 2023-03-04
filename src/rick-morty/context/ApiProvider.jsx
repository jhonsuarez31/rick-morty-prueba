import React, { useReducer } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { types } from '../types/types'
import { ApiContext } from './ApiContext'
import { ApiReducer } from './ApiReducer'

const initialState ={
    characters:[]
}
export const ApiProvider = ({children}) => {

    const [apiState, dispatch] = useReducer(ApiReducer,{})

    const {data,isLoading} = useFetch('https://rickandmortyapi.com/api/character')
    if( isLoading) return
    const {results} = data
    const getAllCharacter = () =>{
        const action ={
            type: types.getAllCharacter,
            payload:results
        }
        dispatch(action)
    }
    
    

    return (
    <ApiContext.Provider value={{
        ...apiState,
        getAllCharacter:getAllCharacter,
        characters: apiState.characters
    }}>
        {children}
    </ApiContext.Provider>
  )
}
