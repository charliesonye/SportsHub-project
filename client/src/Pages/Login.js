import React, {useState} from 'react'
import SignupForm from '../Components/SignupForm'
import LoginForm from '../Components/LoginForm'

 function Login({onLogin}) {
  const [isLogin, setIsLogin] = useState(true)
    return (
    <div>
        {
            isLogin ? (
                <LoginForm onLogin={onLogin}/>
            ) :  (
                <SignupForm onLogin={onLogin} />
            )
        }
       
    </div>
  )
}

export default Login