import React from 'react'
import './NewFeedback.css'

function NewFeedback(props){
    const linkedin = "";
    const twitter = ""
    const instagram = ""
    const github = ""
    
    const style = {
      backgroundImage: `url(${props.data.url})`, 
    }
    return(
       <div className="feedback-card">
          <div className="profile-img" style={style}>
          </div>
        <div className="content">
          <div className="user-name">
            <h1>{props.data.name}</h1>
          </div>
          <div className="text-content">
            <p>{props.data.review}</p>
            <div className="icons" >
               <a href={twitter}><i className="fab fa-twitter"></i></a>
               <a href={github}><i className="fab fa-github"></i></a>
               <a href={instagram}><i className="fab fa-instagram"></i></a>
               <a href={linkedin}><i className="fab fa-linkedin-in"></i></a>
         </div>
          </div>
          
         
        </div>
       </div>
      
    ) 
  }

  
export default NewFeedback
