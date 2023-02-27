import React , { useState } from 'react'
import Google from '../img/google.png'
import Svg from '../img/Tablet login-amico.png'
 import { auth } from '../firebase';
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const email = e.target[0].value;
    const password = e.target[1].value;
   
   

    try {
     await signInWithEmailAndPassword(auth, email, password)
navigate("/")
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className='container'>
      <img className='svg' src={Svg} alt="" />
        <div className='wrapper'>
            <span className='logo'>Lama Chat</span>
            <span className='title'>Log In</span>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <p className='forget'>Forget Password?</p>
                <button>Sign In</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p className='footer'>You don't have an Account? <Link to ="/register">Register</Link></p>
            <button className='google'> <img className='g-img' src={Google}/> Sign In with Google</button>
        </div>
      
    </div>
  )
}

export default Login
