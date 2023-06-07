import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
        <>
            <h1 className="display-5 my-4" style={{ color: "#588157" }}>About us</h1>

            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Welcome to Stock Portfolio Management System!
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            We understand the importance of managing your investments effectively. Our Stock Portfolio Management System is designed to empower you with the tools and insights you need to make informed decisions and maximize your portfolio's potential.
                            With our user-friendly web application, you can conveniently monitor and analyze your stock holdings, track performance, and stay updated on market trends. Whether you're a seasoned investor or just starting your journey, our platform caters to all levels of expertise.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            Join us
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            We are committed to empowering investors with the tools and resources they need to succeed in today's dynamic stock market. Join us and take control of your investments with confidence. Start exploring our Stock Portfolio Management System today!
                            Head over to the <Link to="/register">signup</Link> page to register or <Link to="/login">login</Link> to continue your journey.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            Disclaimer
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            Our Stock Portfolio Management System provides tools and information for educational and informational purposes only. It does not constitute financial advice or a recommendation to buy, sell, or hold any securities. Always consult with a qualified financial advisor before making investment decisions.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                        >
                            Contact Us
                        </button>
                    </h2>
                    <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <strong>Apoorva: </strong> beingapoorva77@gmail.com <br />
                            <strong>Aryan: </strong> aryansemail@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About