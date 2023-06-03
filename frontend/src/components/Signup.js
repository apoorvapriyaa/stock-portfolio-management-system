import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup(props) {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" })

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { name, email, password } = credentials
        const response = await fetch("http://localhost:3001/api/v1/register", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })
        const json = await response.json()
        console.log(json)
        if (json.success) {
            // save the auth token and redirect
            localStorage.setItem('token', json.token)
            navigate("/")
        } else if (json.error === "enter details") {
            props.showAlert("Please enter all the details!", "Failure", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div className="my-4"></div>
            <span className="display-5" style={{ color: "#588157" }}>Welcome to <span className="display-5" style={{ color: "#3a5a40" }}>Stocks</span></span>
            <figcaption className="blockquote-footer my-2">
                Insights on your stock portfolio <cite title="Source Title">safe and fast</cite>
            </figcaption>

            <form className='my-4' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={credentials.name}
                        aria-describedby="emailHelp"
                        onChange={onChange}
                    />
                </div>
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
                        aria-describedby="emailHelp"
                        onChange={onChange}
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
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
                        required
                        minLength={8}
                    />
                </div>
                <button type="submit" className="btn btn-dark">
                    SIGNUP
                </button>
            </form>

        </div>
    )
}
export default Signup