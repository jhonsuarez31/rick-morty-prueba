import React, { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './AuthReducer'

const initialState = {
    logged:false
}

const init = () =>{
  const user = JSON.parse(localStorage.getItem('user'))
  return {
    logged : !! user,
    user: user
  }
}

export const AuthProvaider = ({children}) => {

  const [ authState, dispatch] = useReducer(authReducer, initialState, init)
  
  const login = ( email, password ) =>{
  
    const user = {
      id:'1wes',
      email: email,
      password: password
    }
    const action ={
      type: types.login,
      payload : user
    } 
    localStorage.setItem('user', JSON.stringify(user))
    dispatch(action)
  }

  const logout = () =>
  {
      localStorage.removeItem('user')
      const action={
          type:types.logout
      }
      dispatch(action)
  }
  
  return (
    <AuthContext.Provider value={{
      ...authState,
      login:login,
      logout:logout
    }}>
        {children}
    </AuthContext.Provider>
  )
   
}
