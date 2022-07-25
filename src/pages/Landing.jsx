import React from 'react'
import Wrapper from '../assets/wrappers/LandingPage'

// router-dom
import {Link} from 'react-router-dom'

// assets
import main from '../assets/images/main.svg'

// components
import {Logo} from '../components'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>some text</p>
          <Link to="/register" className='btn btn-hero'>Login/Register</Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing