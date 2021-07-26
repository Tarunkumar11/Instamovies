import React, {useState } from 'react'
import './Feedback.css'
import NewFeedback from '../NewFeedback/NewFeedback';
import testimonialOne from '../../images/testimonial/g1.jpg'
import testimonialTwo from '../../images/testimonial/b2.jpg'
import testimonialThree from '../../images/testimonial/g2.jpg'
import testimonialFour from '../../images/testimonial/b2.jpg'

function Feedback() {
    const data = [{'id': 1,'name':"Saniya Saini", "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum unde minus ducimus sed consequuntur dolores assumenda, ab quibusdam.", "url":testimonialOne},
                {'id': 2,'name':"Shivam Saini", "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum unde minus ducimus sed consequuntur dolores assumenda, ab quibusdam.","url":testimonialTwo},
                {'id': 3,'name':"Anu Saini", "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum unde minus ducimus sed consequuntur dolores assumenda, ab quibusdam.","url":testimonialThree},
                {'id': 4,'name':"Ajay Shah", "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum unde minus ducimus sed consequuntur dolores assumenda, ab quibusdam.","url":testimonialFour},
                ]
    const [currIndex, setIndex] = useState([0,1])
    const  length = data.length
    function nextindex(){
        setIndex((preIndex) =>{
            let curr = preIndex[1]
            let next = curr + 1
            if(next + 1 >= length){
                next = 0
            }
            return [curr, next]
        } )
    }

    function backIndex(){
        setIndex((preIndex) => {
            let curr = preIndex[0]
            let pre = curr - 1
            if(pre < 0){
                pre = length -1
            }
            return [pre, curr]
        })
    }
    

    return (
        <div className='feedback-section'>
            <div className="movie-type">   
                <h2>Some Feedback from Users</h2>
            </div>

            <div className="feedback-content" >
                <div className="backward" onClick={backIndex} >
                    <i className="fas fa-arrow-circle-left"></i>
                </div>
                <div className="feedback">
                    {
                        currIndex.map((index) => {
                            return  <NewFeedback key={data[index].id} data={data[index]} />
                        })    
                    }
                </div>
                <div className="forward" onClick={nextindex}>
                    <i className="fas fa-arrow-circle-right"></i>
                </div>
            </div>
        </div>
    )
}

export default Feedback
