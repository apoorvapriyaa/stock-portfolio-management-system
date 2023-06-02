import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
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
        //console.log(json)
        if (json.success) {
            // save the auth token and redirect
            localStorage.setItem('token', json.token)
            navigate("/")
        } else {
            alert("Invalid Details. Please check and try again!")
        }

    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <>
            <title>Glassmorphism login Form Tutorial in html css</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
                rel="stylesheet"
            />
            {/*Stylesheet*/}
            <style
                media="screen"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n      *,\n*:before,\n*:after{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody{\n    background-color: #daecf2;\n}\n.background{\n    width: 410px;\n    height: 450px;\n    position: absolute;\n    transform: translate(-50%,-50%);\n    left: 50%;\n    top: 50%;\n}\n.background .shape{\n    height: 200px;\n    width: 200px;\n    position: absolute;\n    border-radius: 50%;\n}\n.shape:first-child{\n    background: linear-gradient(\n        #67326b,\n        	#dacfec\n    );\n    left: -80px;\n    top: -80px;\n}\n.shape:last-child{\n    background: linear-gradient(\n        to right,\n       #fff6c9,\n        #ffb05e\n    );\n    right: -30px;\n    bottom: -80px;\n}\nform{\n    height: 600px;\n    width: 400px;\n    background-color: rgba(255,255,255,0.13);\n    position: absolute;\n    transform: translate(-50%,-50%);\n    top: 50%;\n    left: 50%;\n    border-radius: 10px;\n    backdrop-filter: blur(10px);\n    border: 2px solid rgba(255,255,255,0.1);\n    box-shadow: 0 0 40px rgba(8,7,16,0.6);\n    padding: 50px 35px;\n}\nform *{\n    font-family: 'Poppins',sans-serif;\n    color: #080710;\n    letter-spacing: 0.5px;\n    outline: none;\n    border: none;\n}\nform h3{\n    font-size: 32px;\n    font-weight: 500;\n    line-height: 42px;\n    text-align: center;\n}\n\nlabel{\n    display: block;\n    margin-top: 30px;\n    font-size: 16px;\n    font-weight: 500;\n}\ninput{\n    display: block;\n    height: 50px;\n    width: 100%;\n    background-color: rgba(0,0,0,0.07);\n    border-radius: 3px;\n    padding: 0 10px;\n    margin-top: 8px;\n    font-size: 14px;\n    font-weight: 300;\n}\n::placeholder{\n    color: #080710;\n}\nbutton{\n    margin-top: 50px;\n    width: 100%;\n    background-color: #ffffff;\n    color: #080710;\n    padding: 15px 0;\n    font-size: 18px;\n    font-weight: 600;\n    border-radius: 5px;\n    cursor: pointer;\n}\n.social{\n  margin-top: 30px;\n  display: flex;\n}\n.social div{\n  background: red;\n  width: 150px;\n  border-radius: 3px;\n  padding: 5px 10px 10px 5px;\n  background-color: rgba(255,255,255,0.27);\n  color: #eaf0fb;\n  text-align: center;\n}\n.social div:hover{\n  background-color: rgba(255,255,255,0.47);\n}\n.social .fb{\n  margin-left: 25px;\n}\n.social i{\n  margin-right: 4px;\n}\n\n    "
                }}
            />
            <div className="background">
                <div className="shape" />
                <div className="shape" />
            </div>
            <form onSubmit={handleSubmit}>
                <h3>Signup Here</h3>
                <label htmlFor="name">Full Name</label>
                <input type="text" placeholder="Your Full Name" id="name" value={credentials.name} name="name" onChange={onChange} />
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Email" id="email" value={credentials.email} name="email" onChange={onChange} />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" value={credentials.password} name="password" onChange={onChange} />
                <button type="submit">Sign Up</button>
            </form>
        </>
    )
}

export default Signup