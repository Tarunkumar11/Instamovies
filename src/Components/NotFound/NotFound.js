import React from 'react'
import './NotFound.css'
import Particles from 'react-particles-js';
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
                <img className="image-404" src="http://salehriaz.com/404Page/img/404.svg" width="300px" alt="404" />
                <a href="http://salehriaz.com/404Page/404.html" className="btn-go-home">GO BACK HOME</a>
            </div>
            <div className="objects">
                <img className="rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px" alt="rocket" />
                <div className="earth-moon">
                    <img className="earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px" alt="earth" />
                    <img className="moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px" alt="moon" />
                </div>
                <div class="box_astronaut">
                    <img class="astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px" alt="Astronaut" />
                </div>
            </div>
        </div>
        </>
    )
}

export default NotFound
