import React from 'react'
import Google from '../img/google.png'
const Login = () => {
  return (
    <div className='container'>
        <div className='wrapper'>
            <span className='logo'>Lama Chat</span>
            <span className='title'>Log In</span>
            <form>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <p className='forget'>Forget Password?</p>
                <button>Sign In</button>
            </form>
            <p className='footer'>You don't have an Account? Register</p>
            <button className='google'> <img src={Google}/> Sign In with Google</button>
        </div>
      
    </div>
  )
}

export default Login
