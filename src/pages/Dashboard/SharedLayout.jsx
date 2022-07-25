import React from 'react'
import Wrapper from '../../assets/wrappers/SharedLayout'

// router-dom
import { Outlet} from 'react-router-dom'

// components
import { Navbar, BigSidebar, SmallSidebar } from '../../components'

const SharedLayout = () => {

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
