import React, { useState } from 'react';
import LoginForm from '../auth/LoginForm';
import SignUpForm from '../auth/SignUpForm';
import homeVectorImage from '../../images/Flixtagram_home_vector.png';
import instaLogo from '../../images/instagram_logo.png'
import './LandingPage.css'

const LandingPage = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className='landing-page-container'>
      <div className='image-container-LEFT'>
        <img className='home-vector-image' src={homeVectorImage}></img>
      </div>
      <div className='forms-container-RIGHT'>
        <img className='insta-logo' src={instaLogo}></img>
        {showSignUp ?
        <div className='signup-form-container'>
          <SignUpForm />
          Already have an account?
          <button className='show-log-in-form' onClick={() => setShowSignUp(false)}>Log in</button>
        </div> :
        <div className='login-form-container'>
          <LoginForm />
          Don't have an account?
          <button className='show-sign-up-form' onClick={() => setShowSignUp(true)}>Sign up</button>
        </div>}
      </div>
    </div>
  )
}

export default LandingPage;
