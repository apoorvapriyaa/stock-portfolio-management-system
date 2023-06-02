import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Navbar() {
    let location = useLocation()

    let navStyle = {
        backgroundColor: "#457b9d"
    }
    let navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate("/login")
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={navStyle}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{ color: "white" }}>
                        <strong>Stocks</strong>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/" style={{ color: "#edede9" }}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} aria-current="page" to="/about" style={{ color: "#edede9" }}>
                                    About
                                </Link>
                            </li>
                        </ul>
                        {!localStorage.getItem('token') ? <form className="d-flex" role="search">
                            <Link className="btn btn-outline-light mx-2" to="/login" role="button">
                                Login
                            </Link>
                            <Link className="btn btn-outline-light mx-2" to="/register" role="button">
                                Signup
                            </Link>
                        </form> : <button className="btn btn-outline-light mx-2" onClick={handleLogout} role="button">
                            Logout
                        </button>}
                    </div>
                </div>
            </nav>
        </div >
    )
}

export default Navbar