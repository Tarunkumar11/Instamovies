import React from 'react'
import './Login.css'


function Login() {
    const lofd = ""
    return (
        <div className='login-container'>
            <div className="box">
                <div className="square-ver" style={{'--i': 0 }} ></div>
                <div className="square-ver" style={{'--i': 1 }} ></div>
                <div className="square-ver" style={{'--i': 2 }} ></div>
                <div className="square-ver" style={{'--i': 3 }} ></div>
                <div className="square" style={{'--i': 0 }} ></div>
                <div className="square" style={{'--i': 1 }} ></div>
                <div className="square" style={{'--i': 2 }} ></div>
                <div className="square" style={{'--i': 3 }} ></div>
                <div className='container'>
                    <div className="form">
                        <h2>
                            Login
                        </h2>
                        <form>
                            <div className="inputBox">
                                <input type="email" placeholder="Email Id" />
                            </div>
                            <div className="inputBox">
                                <input type="password" placeholder="Paasword" />
                            </div>

                            <div className="inputBox">
                                <input type="submit" placeholder="Login" />
                            </div>
                                <p className="forgot">forgot password ?<a href={lofd}>Click here</a></p>
                                <p className="sign-up">Don't have an account?<a href={lofd}>Click here</a></p>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Login
