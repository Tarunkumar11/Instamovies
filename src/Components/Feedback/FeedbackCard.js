import React from 'react'
import './FeedbackCard.css'

// const person = "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg";
const linkedin = "";
const twitter = ""
const instagram = ""
const github = ""

function FeedbackCard(props) {
  let extraclass = ''
  let extraclass2 = ''
  let castName = 'That is Awesome'
  let overview = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias vel eaque iusto magni consequuntur,?"
  let style = {
    // backgroundImage: "url('https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg)",
  }
  
  if(props.data) {
    castName = props.data.name;
    overview = props.data.character;
    let imagePath = ""
    if(props.data.profile_path){
        imagePath = "https://www.themoviedb.org/t/p/w300_and_h450_face" +props.data.profile_path
    }
    style  = { 
      backgroundImage: `url(${imagePath})`, 
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }

  }
  if(props.extraclass !==undefined  ) {
      extraclass = props.extraclass
      //castName = props.data.name
  }

  if(props.extraclass2 !==undefined ) {
    extraclass2 = props.extraclass2
  }
  return (
    <div className={"card-container" + extraclass}  style = {style}>
      <div className="card">
        <div className="card-content">
           <div className="card-heading">
             <h2> {castName}</h2>
          </div>
          <p>{overview}</p>
          
           <div className={"icons" + extraclass2} >
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
