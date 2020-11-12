import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// function sum(...rest){
//     result = 0

//     for(let i = 0; i<= rest.length; i++){
//         result += i
//     }

//     return result
// }

// sum(1, 2, 3, 4, 5)

const ProtectedRoute = ({ component: Component, user, ...rest }) => {
  console.log({ component: Component, user, ...rest })
  return (
    <Route render={() => user ? <Component {...rest} /> : <Redirect to='/login' />} />
  )
}

export default ProtectedRoute
