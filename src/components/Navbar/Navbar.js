import React,{useEffect} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';
// eslint-disable-next-line
const Navbar = () => {
  useEffect(() => {
    document.querySelector('.drop1').firstChild.addEventListener('mouseover', () => {
      document.querySelector('.dropdown').classList.add('show')
    })
    document.querySelector('.dropdown').addEventListener('mouseover', () => {
      document.querySelector('.dropdown').classList.add('show')
    })
    document.querySelector('.dropdown').addEventListener('mouseout', () => {
      document.querySelector('.dropdown').classList.remove('show')
    })
  })

  return (
    <nav id='navbar'>
      <input type="checkbox" name="display" id="display" />
      <label htmlFor="display" className='display'><i className=' bx bx-menu'></i></label>
      <div className="logo"><img src={logo} alt="" /></div>
      <ul className="menu">
        <li className='drop1'>
          <div><span>MENU</span><i className='bx bxs-down-arrow '></i></div>
          <ul className="dropdown">
            <li>SHOP</li>
            <li>BRANDS</li>
            <li>CATEGORIES</li>
          </ul>
        </li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <button className='loginbtn'>Login</button>
    </nav>
  )
}

export default Navbar