import React, {useState } from 'react'
import './Feedback.css'
import NewFeedback from '../NewFeedback/NewFeedback';

function Feedback() {
    const data = [{'name':"Saniya Saini", "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum unde minus ducimus sed consequuntur dolores assumenda, ab quibusdam.", "url":"https://i.pinimg.com/564x/19/cf/78/19cf789a8e216dc898043489c16cec00.jpg"},
                {'name':"Shivam Saini", "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum unde minus ducimus sed consequuntur dolores assumenda, ab quibusdam.","url":"https://thispersondoesnotexist.com/image"},
                {'name':"Anu Saini", "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum unde minus ducimus sed consequuntur dolores assumenda, ab quibusdam.","url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQnm7qaETgFaoTabNbopUVHpsBcqASi5M1IQ&usqp=CAU"},
                {'name':"Chotu Saini", "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum unde minus ducimus sed consequuntur dolores assumenda, ab quibusdam.","url":"https://thispersondoesnotexist.com/image"},
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
                            return  <NewFeedback data={data[index]}/>
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
