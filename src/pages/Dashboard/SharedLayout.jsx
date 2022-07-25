import React, { useEffect } from 'react'
import Wrapper from '../../assets/wrappers/SharedLayout'

// router-dom
import { Outlet, useNavigate } from 'react-router-dom'

// components
import { Navbar, BigSidebar, SmallSidebar } from '../../components'
import { useSelector } from 'react-redux'

const SharedLayout = () => {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.user)

  useEffect(() => {
    if (!user) {
      setTimeout(() => {
        navigate('/landing')
      })
    }
  }, [user, navigate])

  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  )
}

export default SharedLayout
