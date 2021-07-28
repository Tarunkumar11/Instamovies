import React from 'react'
import './NotFound.css'
import Particles from 'react-particles-js';
import f404 from '../../images/Error/404.svg'
import earth from '../../images/Error/earth.svg'
import moon from '../../images/Error/moon.svg'
import rocket from '../../images/Error/rocket.svg'
import astronaut from '../../images/Error/astronaut.svg'
import {Link} from "react-router-dom";
function NotFound() {


    return (
        <>
        <Particles  id = "partical" className="newpartical"  params={{
          particles: {

           line_linked:{
               enable:true,
               distance:205,
               color:"#1bd926",
               opacity:0,
               width:3
           },

            number: {
              value: 40,
              density: {
                enable: true,
                value_area: 1000,
              }
            },

            shape: {
                    type: "star",
                    stroke: {
                        width: 6,
                        color: "#7B6E91"
                    }
                }
            },
            
            move: {
                speed:3
            }

            

        }}/>
        <div className="not-found">
            <div class="central-body">
                <img className="image-404" src={f404} width="300px" alt="404" />
                <Link className="btn-go-home" to={{ pathname:'/'}}>GO BACK HOME </Link>
            </div>
            <div className="objects">
                <img className="rocket" src={rocket} width="40px" alt="rocket" />
                <div className="earth-moon">
                    <img className="earth" src={earth} width="100px" alt="earth" />
                    <img className="moon" src={moon} width="80px" alt="moon" />
                </div>
                <div className="box_astronaut">
                    <img class="astronaut" src={astronaut} width="140px" alt="Astronaut" />
                </div>
            </div>
        </div>
        </>
    )
}

export default NotFound
