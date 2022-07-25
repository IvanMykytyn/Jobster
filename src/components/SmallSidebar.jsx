import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar'
import { useDispatch, useSelector } from 'react-redux';

// actions
import { toggleSidebar } from '../feature/user/userSlice';

// components
import {Logo, NavLinks} from './'

// react-icons 
import {FaTimes} from 'react-icons/fa'

const SmallSideBar = () => {
  const dispatch = useDispatch()
  const {isSidebarOpen} = useSelector(state => state.user);
  
  return (
    <Wrapper>
      <div className={'sidebar-container' + (isSidebarOpen ? ' show-sidebar' : '') }>
        <div className='content'>
          <button className='close-btn' onClick={() => dispatch(toggleSidebar())}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className='nav-links'>
            <NavLinks toggleSidebar={toggleSidebar}/>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSideBar