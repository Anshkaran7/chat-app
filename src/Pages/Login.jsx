import React from 'react'

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
        </div>
      
    </div>
  )
}

export default Login
