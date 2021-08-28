// import React, {useState, useEffect} from 'react'
// import './Profile.css';
// import { useFormik } from 'formik'
// import { useAuth } from '../../contexts/AuthContext';
// import {db} from '../../firebase'
// import {Link } from "react-router-dom";


// function Profile(props) {
    
//     let {currentUser} = useAuth()
//     const [loading ,setLoading] =  useState(true)
//     const formik = useFormik({  
//         initialValues:{
//             firstName:'',
//             lastName:'',
//             email:'',
//             country:"",
//             mobileNo:"",
//         },

//         onSubmit:async values => {
            
//             db.collection("users").doc(currentUser.uid).set({
//                 firstName:values.firstName,
//                 lastName:values.lastName,
//                 country:values.state,
//                 mobileNo:values.mobileNo,
//                 isActive:true
//              }, { merge: true })
//              .then(() => {
//                 alert("Data successfully stored!");
//                 window.location.reload();

//             })
//             .catch((error) => {
//                 alert("Failed to save");
//                 console.error("Error writing document: ", error);
//             });
//         },

//         validate: values => {
//             let errors = {}
//             if(!values.firstName){
//                 errors.email = "Required"
//             }
//             if(!values.lastName){
//                 errors.lastName = "Required"
//             }
//             return errors
//         }

//     })

//     useEffect(() => {
//             db.collection('users').doc(currentUser.uid).get().then(querySnapshot => {
//             const preInfo = querySnapshot.data()
//             formik.values.firstName = preInfo.firstName
//             formik.touched.firstName = true
//             formik.values.lastName = preInfo.lastName
//             formik.touched.lastName  = true
//             formik.values.mobileNo = preInfo.mobileNo
//             formik.touched.mobileNo  = true
//             setLoading(false)
//             })

//         }, [])
    
//   return ( !loading &&
//     <div className="user-profile">
//       <div className="form">
//         <h2>Personal details</h2>
//         <form className="container user-input"  onSubmit={formik.handleSubmit}>
//             <div className="row">
//                 <div className="col-lg-6 col-sm-12 inputBox">
//                     <span>Frist Name</span>
//                     <input type="text"  name="firstName" onChange={formik.handleChange} value={formik.values.firstName} onBlur={formik.handleBlur}/>
//                     {formik.touched.firstName  && formik.errors.firstName ? <div className="errors">{formik.errors.firstName}</div> : null}
//                 </div>
                
//                 <div className="col-lg-6 col-sm-12 inputBox">
//                     <span>Last Name</span>
//                     <input type="text"  name="lastName" onChange={formik.handleChange} value={formik.values.lastName} onBlur={formik.handleBlur} />
//                     {formik.touched.lastName  && formik.errors.lastName ? <div className="errors">{formik.errors.lastName}</div> : null}
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-lg-6 col-sm-12 inputBox">
//                     <span>If other Countery</span>
//                     <input type="text" placeholder="Country" name='country' onChange={formik.handleChange} value={formik.values.country} onBlur={formik.handleBlur} />
//                     {formik.touched.country  && formik.errors.country ? <div className="errors">{formik.errors.country}</div> : null}
//                 </div>
//                 <div className="col-lg-6 col-sm-12 inputBox">
//                     <span>Mobile no</span>
//                     <input type="text"  name="mobileNo" onChange={formik.handleChange} value={formik.values.mobileNo} onBlur={formik.handleBlur} />  
//                 </div>
//             </div> 
//             <div className="bu">
//             <input type="submit" className="btn btn-outline-secondary" />
//             <Link to={{ pathname: "/updatepassword/"}}><input type="button" className="btn btn-outline-secondary update-pass" value="Update Password"/></Link>
//             </div>
//         </form>

        
//       </div>
//     </div>
//   );
// }

// export default Profile
