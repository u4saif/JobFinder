import React from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/SharedLayout'
import Logo from '../../components/Logo'

export const SharedLayout = () => {
  return (
    <>
      <Wrapper>
        <main className='dashboard'>
            Sharedlayout
          {/* <SmallSidebar />
          <BigSidebar /> */}
          <div>
            <Logo />
            <div className='dashboard-page'>
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </>

  )
}
