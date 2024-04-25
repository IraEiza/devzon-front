import './Landing.css'

import { Outlet } from 'react-router-dom'

import NavBar from '../components/NavBar/NavBar'

const Landing = () => {

  return (
    <div id='landing'>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default Landing