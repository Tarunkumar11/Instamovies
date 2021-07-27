import React from 'react'
import './Login.css'
import { useFormik } from 'formik'
import {Link} from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';

function Signup() {
    
    const {signup, currentUser} = useAuth()
    console.log("this is current user", currentUser)
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    } 
    let errors = {}
    const formik = useFormik({
        initialValues: {
            email:'',
            password:'',
            confirmPassword:''

        },  
        onSubmit:values => {
            try {
                signup(values.email, values.password)
                console.log(currentUser)
            }
            catch {
                this.errors.confirmPassword  = "Failed to create an account!"
            }
        },

        validate: values => {
            if(!values.email){
                errors.email = "Required"
            }
            else if(!validateEmail(values.email)) {
                errors.email = "Invalid email!"
            }
            if(!values.password){
                errors.password = "Required"
            }
            else if(values.password.length < 8){
                errors.password = "Minimum 8 character"
            }

            if(!values.confirmPassword){
                errors.confirmPassword = "Required"
            }
            else if(values.password.length < 8){
                errors.confirmPassword = "Minimum 8 character"
            }

            if(values.password !== values.confirmPassword){
                errors.confirmPassword = "Password does not match"
            }

            return errors
        }

    })

    
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
                            Signup
                        </h2>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="inputBox">
                                <input type="email" placeholder="Email Id" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>
                                {formik.touched.email  && formik.errors.email ? <div className="errors">{formik.errors.email}</div> : null}
                            </div>
                            <div className="inputBox">
                                <input type="password" placeholder="Paasword" name="password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
                                {formik.touched.password && formik.errors.password ? <div className="errors">{formik.errors.password}</div>  : null}
                            </div>
                            <div className="inputBox">
                                <input type="password" placeholder="Confirm Paasword" name="confirmPassword" onChange={formik.handleChange} value={formik.values.confirmPassword} onBlur={formik.handleBlur} />
                                {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className="errors">{formik.errors.confirmPassword}</div>  : null}
                            </div>
                            <div className="inputBox">
                                <input type="submit" placeholder="Signup" />
                            </div>
                            <Link to={{ pathname: "/login"}}><p className="sign-up">Already have an account? {" "} Click here</p></Link>
                                
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Signup
