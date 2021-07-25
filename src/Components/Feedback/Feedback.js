import React, {useState } from 'react'
import './Feedback.css'
import NewFeedback from '../NewFeedback/NewFeedback';

function Feedback() {
    const data = [{'name':"tarun Saini", "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum unde minus ducimus sed consequuntur dolores assumenda, ab quibusdam.", "url":"https://picsum.photos/200/300"},
                {'name':"Shivam Saini", "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum unde minus ducimus sed consequuntur dolores assumenda, ab quibusdam.","url":"https://picsum.photos/200/300"},
                {'name':"Sathyam Saini", "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum unde minus ducimus sed consequuntur dolores assumenda, ab quibusdam.","url":"https://picsum.photos/200/300"},
                {'name':"Chotu Saini", "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum unde minus ducimus sed consequuntur dolores assumenda, ab quibusdam.","url":"https://picsum.photos/200/300"},
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
                    <i class="fas fa-arrow-circle-left"></i>
                </div>
                <div className="feedback">
                    {
                        currIndex.map((index) => {
                            return  <NewFeedback data={data[index]}/>
                        })    
                    }
                </div>
                <div className="forward" onClick={nextindex}>
                    <i class="fas fa-arrow-circle-right"></i>
                </div>
            </div>
        </div>
    )
}

export default Feedback
