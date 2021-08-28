import React, {useState } from 'react'
import './Login.css'
import { useFormik } from 'formik'
import {Link } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';
import {db} from '../../firebase'

function Signup() {
    
    const {signup} = useAuth()
    const [autherror, setAuthError] = useState(null)
    // const history = useHistory()
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    } 
    let errors = {}
    const formik = useFormik({
        initialValues: {
            email:'',
            password:'',
            confirmPassword:'',
            country:'',
            mobileNo:''

        },  
        onSubmit: async values => {
            try {
                signup(values.email, values.password).then((user) => {
                    console.log(user.user.uid, values)
                    db.collection('users').doc(user.user.uid).set({
                        firstName:values.firstName,
                        lastName:values.lastName,
                        country:values.country,
                        mobileNo:values.mobileNo,
                        email:values.email
                    }).then(() => {
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });
                    // history.push('/')
                }).catch((error) => {
                    setAuthError(error.message);
                })

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


    // useEffect(() => {
    //     db.collection('users').get().then(querySnapshot => {
    //     const documents = querySnapshot.docs.map(doc => doc.data())
    //     // const result = documents.filter(word => word.isDelete === false);
    //     db.collection('users').doc("dfsdsdfsdfhasdlkfjhasdjkfhasdjkfhjklasdhk").set({
    //         firstName:"test",
    //         lastName:"fsdfsd",
    //         country:"inia",
    //         mobileNo:"sdfasdfsd",
    //         email:"tarun@gmial.com"
    //     }).then(() => {
    //         console.log("Document successfully written!");
    //     })
    //     .catch((error) => {
    //         console.error("Error writing document: ", error);
    //     });
    //     })
    // }, [])
    
    
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
                        {autherror ? <div className="inputBox"><div className="errors">{autherror}</div></div> : null}
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
                                <input type="text" placeholder="Country" name="country" onChange={formik.handleChange} value={formik.values.country} onBlur={formik.handleBlur} />
                            </div>
                            <div className="inputBox">
                                <input type="text" placeholder="mobile no" name="mobileNo" onChange={formik.handleChange} value={formik.values.mobileNo} onBlur={formik.handleBlur} />
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
