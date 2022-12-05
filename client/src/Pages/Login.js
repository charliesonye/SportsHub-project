import React from 'react'
import SignupForm from '../Components/SignupForm'

 function Login({onLogin}) {
  return (
    <div>
        <SignupForm onLogin={onLogin} />
    </div>
  )
}

export default Login