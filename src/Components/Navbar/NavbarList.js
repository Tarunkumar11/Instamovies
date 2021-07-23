import React from 'react'
import {Link} from "react-router-dom";

function NavbarList(props) {
    const navItem = props.items;
    function filterHandle(e){
        const filter  =  document.getElementById("filterid")
        if(filter !== null) {
            filter.style.display = "inline"
        }
        
          
    }
    
    return (
        <nav>
            {
                navItem.map((item) => {

                        if(item.btn === "Filter" ){
                            return <Link to = {{pathname: `/${item.link}`}} key={item.btn} onClick={filterHandle} ><li>{item.btn}</li> </Link>    
                        }
                        else    
                            return <Link to = {{pathname: `/${item.link}`}} key={item.btn}><li>{item.btn}</li> </Link> 
                    })
            }
        </nav>
    )
}

export default NavbarList
