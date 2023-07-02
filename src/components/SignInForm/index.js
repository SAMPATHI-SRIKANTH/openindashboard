import { useGoogleLogin } from '@react-oauth/google';
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import './index.css'
import { useState } from 'react';



const SignInForm = (props) => {
    let navigate = useNavigate();
   
    const [token,setToken] = useState('')
    const login = useGoogleLogin({
        onSuccess: tokenResponse => setToken(tokenResponse.access_token)
      });

      if (token !== ""){
        return navigate("/dashboard");
      }
    return(
    <div className='sign-in-container'>
        <div className='left-side-container'><h1 className='left-side-heading'>Board.</h1></div>
        <div className='right-side-container'>
            <div className='sign-in-form-container'>
                <h1 className='sign-in-heading'>Sign In</h1>
                <p className='sign-in-descript'>Sign in to your account</p>
                <div className='sign-in-apps-btn-container'>
                    <button type="button" className='sign-in-with-btn' onClick={() => login()}>
                        <img src="https://res.cloudinary.com/ssrikanth/image/upload/v1688112452/google-icon_1_vgnj54.png" alt="google-icon" className='icon'/>
                        <p className='sign-in-with-btn-text'>Sign in with Google</p>
                    </button>
                    <button type="button" className='sign-in-with-btn'>
                        <img src="https://res.cloudinary.com/ssrikanth/image/upload/v1688112479/Vector_cn6orj.png" alt="apple-icon" className='icon'/>
                        <p className='sign-in-with-btn-text'>Sign in with Apple</p>
                    </button>
                </div>
                <form className='form-container'>
                    <div className="input-container">
                        <label htmlFor="email" className='input-label'>Email address</label>
                        <input type="email" placeholder="johndoe@gmail.com" className='input-element'/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="password" className='input-label'>
                            Password
                        </label>
                        <input type="password" placeholder="*********" className='input-element'/>
                    </div>
                    <div className='forget-password'>
                        <Link to="forget-password" className="r-link">Forget password</Link>
                    </div>
                    <button type='submit' className='sign-in-btn'>Sign In</button>
                </form>
                <p className='register'>Don't have an account?<Link to="register" className="r-link"> Register here</Link>
                </p>
            </div>
        </div>
    </div>
)
}

export default SignInForm


