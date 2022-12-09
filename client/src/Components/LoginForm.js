import React, {useState} from 'react'

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
            res.json().then((errs)=> setErrors(errs))
        }
    })
  }
  
  return (
    <div>
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
        </form>
        {
            errors.map((error)=>(
              <li>{error}</li>
            ))
          }
    </div>
  )
}

export default LoginForm