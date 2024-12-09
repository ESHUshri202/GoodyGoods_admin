import React from 'react'
import './Navbar.css'
import nav_logo from '../../assets/logo.png'
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            <img src={nav_logo} alt="" className='nav-logo' />
            <div className="name">
                <p>GoodyGoods<span>Admin Panel</span></p>
            </div>
        </div>
        <img src={navProfile} alt="" className='nav-profile' />
    </div>
  )
}

export default Navbar