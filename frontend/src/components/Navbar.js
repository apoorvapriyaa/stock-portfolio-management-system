import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'

function Navbar() {
    return (
        <div>
            <nav className="navbar fixed-top" style={{ backgroundColor: "#2f3e46", color: "white" }}>
                <div className="container-fluid">
                    <Link className='nav-link' to="/">
                        <img className="d-inline-block align-text-top mx-2" src={logo} alt="" style={{ width: "30px", height: "30px" }} />
                        Home</Link>
                    <div className="d-flex">
                        <Link className='nav-link mx-3' to="/login">
                            Login
                        </Link>
                        <Link className='nav-link' aria-current="page" to="/signup">
                            Signup
                        </Link>
                    </div>
                </div>
            </nav>

        </div >
    )
}

export default Navbar