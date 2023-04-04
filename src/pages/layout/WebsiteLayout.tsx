import React from 'react'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

const WebsiteLayout = () => {
  return (
    <div>
      <header>
        <button className='btn btn-primary'>HH</button>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  )
}

export default WebsiteLayout

