import React, {useState} from 'react'
import SignupForm from '../Components/SignupForm'
import LoginForm from '../Components/LoginForm'

 function Login({onLogin}) {
  const [isLogin, setIsLogin] = useState(true)
    return (
    <div>
        {
            isLogin ? (
                <>
                <LoginForm onLogin={onLogin}/>
                <button onClick={() =>setIsLogin(false) } >
                    Sign Up 
                </button>
                </>
                
            ) :  (
                <>
                <SignupForm onLogin={onLogin} />
                <button onClick={()=> setIsLogin(true)}>
                    Sign In
                </button>
                </>
            )
        }
       
    </div>
  )
}

export default Login