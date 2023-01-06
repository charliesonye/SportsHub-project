import React, {useState} from 'react'
import {Link} from 'react-router-dom'

 function LoginForm({onLogin}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
    
  function handleSubmit(e){
    e.preventDefault()

    const userInfo = {
        username,
        password
    }
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    }).then((res)=>{
        if(res.ok){
            res.json().then((user)=> onLogin(user))
        }else{
            res.json().then((errs)=> setErrors(errs.errors))
        }
    })
  }
  
  return (
    <div>
        <h3>Please Log in:</h3>
        <form onSubmit={handleSubmit}>
            <label>username: </label>
            <input 
                name='username' 
                type='text' 
                value={username}
                onChange={(e)=>setUsername(e.target.value)} 
            />

            <label>password: </label>
            <input 
                name='password' 
                type='text' 
                value={password}
                onChange={(e)=>setPassword(e.target.value)} 
            />
            <input
                type='submit'
            />
        </form><br />
        {
        errors.map((error)=> (
          <li key={error}>{error}</li>
        ))
      }
        <h3>To sign up for an account, click here</h3>
    </div>
  )
}

export default LoginForm