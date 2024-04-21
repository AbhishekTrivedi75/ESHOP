import React from 'react'
import './Navbar.css'
import footer_logo_1_icon from '../../assets/logo_1.png'
import footer_logo_2_icon from '../../assets/logo_2.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo" onClick={() => { setMenu("shop") }}>
          <p> <span className='east-logo-text'>E</span></p>
          {/* <img className='footer-logo-first' src={footer_logo_1_icon} alt="" /> */}
          <p> <span className='west-logo-text'>-</span>SHOP</p>
          {/* <img className='footer-logo-second' src={footer_logo_2_icon} alt="" /> */}
          <img className='footer-logo-first' src={footer_logo_1_icon} alt="" />
        </div>
        <div className="nav-admin">
          <h1>ADMIN PANEL</h1>
        </div>
    </div>
  )
}

export default Navbar
