import React, {useState} from 'react'

function SignupForm({onLogin}) {
 const [username, setUsername] = useState('')
 const [password, setPassword] = useState('')
 const [passwordConfirmation, setPasswordConfirmation] = useState('')
 const [errors, setErrors] = useState([])

  function handleSubmit(e){
    e.preventDefault()
    const newUser = {
      username,
      password,
      password_confirmation: passwordConfirmation
    }

    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    }).then((res)=>{
      if(res.ok){
        res.json().then((user)=> onLogin(user))
      }else {
        res.json().then((err)=> setErrors(err.errors))
      }
    })
  }
  
  return (
    <div>
      <form onSubmit= {handleSubmit}>
        <label>username:</label>
        <input 
          name='username' 
          type='text' 
          value={username}
          onChange= {(e) => setUsername(e.target.value)}
        />
        <label>password:</label>
        <input 
          name='password' 
          type='text' 
          value={password}
          onChange= {(e) => setPassword(e.target.value)}
        />
        <label>password confirmation:</label>
        <input 
          name='password confirmation' 
          type='text' 
          value={passwordConfirmation}
          onChange= {(e) => setPasswordConfirmation(e.target.value)}
        />
        <input 
          type='submit'
        />
        
      </form><br/>
      {
        errors.map((error)=> (
          <li key={error}>{error}</li>
        ))
      }
     
      
    </div>
  )
}


export default SignupForm