import React from 'react'
import Avatar from '../img/addAvatar.png'
import Google from '../img/google.png'
import Login from './Login'
const Register = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
        <span className='logo'>Lama Chat</span>
        <span className='title'>Registor</span>
        <form>
        <input type="text" placeholder='Username' />
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <input type="password" placeholder='Current Password' />
        <input style={{display:"none"}} type="file" id='file' />
        <label htmlFor="file">
            <img className='Avatar' src={Avatar} alt="" />
            <span>Add a Avatar</span>
        </label>
        <button>Sign Up</button>
        </form>
        <p className='footer'>You don't have an Account? <a href={Login}> Login</a></p>
        <button className='google'><img src={Google}/>Sign Up with Google</button>
      </div>
    </div>
  )
}

export default Register
