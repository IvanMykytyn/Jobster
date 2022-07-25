import React from 'react'
import Wrapper from '../assets/wrappers/BigSidebar'

// components
import {Logo} from './'

const BigSidebar = () => {
  const isSidebarOpen = false;
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen
            ? 'sidebar-container '
            : 'sidebar-container show-sidebar'
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          {/* <NavLinks /> */}
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSidebar
