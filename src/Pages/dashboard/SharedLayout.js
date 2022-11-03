import React from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/SharedLayout'
import { Navbar } from '../../components/Navbar'

export const SharedLayout = () => {
  return (
    <>
      <Wrapper>
        <main className='dashboard'>
            Sharedlayout
          {/* <SmallSidebar />
          <BigSidebar /> */}
          <div>
            <Navbar />
            <div className='dashboard-page'>
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </>

  )
}
