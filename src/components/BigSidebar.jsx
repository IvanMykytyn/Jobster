import React from 'react'
import { useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/BigSidebar'

// components
import {Logo, NavLinks} from './'

const BigSidebar = () => {
  const {isSidebarOpen} = useSelector(state => state.user);
  
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen
            ? 'sidebar-container show-sidebar'
            : 'sidebar-container'
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSidebar
