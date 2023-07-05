import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () =>  {
    return(
    <>
        <nav className="navbar">
            <div className='container flex_space'>
                <div className='meni-icon'>
                    <i className='fa-solid fa-bars'></i>
                </div>
                <ul className='nav-menu active'>
                    <li>
                        <Link to='/' >Home</Link>
                        <Link to='/about' >About</Link>
                        <Link to='/destination' >destination</Link>
                        <Link to='/blog' >blog</Link>
                        <Link to='/contact us' >Contact us</Link>
                        <Link to='/testimonisal' >Testimonisal</Link>
                        <Link to='/photo' >photo</Link>
                    </li>
            </ul>
            <div className="login_area flex">
                <li>
                    <Link to='/Sign-in'>
                    <i className='far fa-chevron-right'>Sign In</i>
                    </Link>
                    </li>
                    <li>
                        <Link to ='/register'>
                        <i className='far fa-chevron-right'>register</i>
                        </Link>
                    </li>
                    <li>
                        <Link to ='/contact'>
                        <button className="primary-btn">Request a quote</button>
                        </Link>
                    </li>
                    
            </div>
            </div>
        </nav>
            </>
    )
}
export default Navbar
