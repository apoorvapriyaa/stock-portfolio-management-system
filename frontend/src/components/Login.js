import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login(props) {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:3001/api/v1/login", {

            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        })
        const json = await response.json()
        if (json.success) {
            // save the auth token and redirect
            localStorage.setItem('token', json.token)
            navigate("/")
            props.showAlert("Logged in successfully!", "Success", "success")
        } else if (json.error === "enter details") {
            props.showAlert("Please enter the details!", "Failure", "danger")
        } else if (json.error === "user not found") {
            props.showAlert("User not found, please register!", "Failure", "danger")
        } else if (json.error === "pass invalid") {
            props.showAlert("Invalid Password!", "Failure", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <h1 className="display-5 my-4" style={{ color: "#588157" }}>Login to continue</h1>
            <form className='my-4' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={credentials.email}
                        onChange={onChange}
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={credentials.password}
                        onChange={onChange}
                    />
                </div>
                <button type="submit" className="btn btn-dark">
                    LOGIN
                </button>
            </form>

        </div>
    )
}

export default Login