import React from 'react'
import './FeedbackCard.css'

const person = "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg";
const linkedin = "";
const twitter = ""
const instagram = ""
const github = ""

function FeedbackCard(props) {
  var extraclass = ''
  if(props.extraclass !==undefined  ) {
      extraclass = props.extraclass
  }
  return (
    <div className={"card-container" + extraclass} >
      <div className="card">
        <div className="card-content">
           <div className="card-heading">
             <h2> This is awesome </h2>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias vel eaque iusto magni consequuntur,?</p>
          
           <div className="icons">
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

export default FeedbackCard
