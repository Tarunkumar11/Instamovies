import React from 'react'
import './FeedbackCard.css'

const person = "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg";
const linkedin = "";
const twitter = ""
const instagram = ""
const github = ""

function FeedbackCard() {
  return (
    <div className="card-container" >
      <div className="card">
        <div className="card-content">
           <div className="card-heading">
             <h2> This is awesome </h2>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias vel eaque iusto magni consequuntur, eius, blanditiis laudantium quod quasi, architecto perferendis. Doloremque minima eos similique incidunt optio deleniti vitae id?</p>
          
           <div class="icons">
             <a href={twitter}><i class="fab fa-twitter"></i></a>
             <a href={github}><i class="fab fa-github"></i></a>
             <a href={instagram}><i class="fab fa-instagram"></i></a>
             <a href={linkedin}><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
       </div>
     </div>
    
  )
}                              

export default FeedbackCard
