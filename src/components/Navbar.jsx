import React, { useState } from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import { useSelector, useDispatch } from 'react-redux'

// components
import { Logo } from './'

// react-icons
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'

// actions
import { clearStore, toggleSidebar } from '../feature/user/userSlice'

const Navbar = () => {
  const dispatch = useDispatch()

  // local state
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)

  const { user } = useSelector((state) => state.user)

  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn"
          onClick={() => dispatch(toggleSidebar())}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setDropdownIsOpen((prev) => !prev)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          {dropdownIsOpen && (
            <div className="dropdown show-dropdown">
              <button
                type="button"
                className="dropdown-btn"
                onClick={() => {
                  dispatch(clearStore('Logout Successful...'));
                }}
              >
                logout
              </button>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
