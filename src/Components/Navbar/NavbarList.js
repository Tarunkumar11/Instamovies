import React from 'react'
import {Link} from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';

function NavbarList(props) {

    const {logout, currentUser} = useAuth()
    const navItem = props.items;
    function filterHandle(e){
        const filter  =  document.getElementById("filterid")
        if(filter !== null) {
            filter.style.display = "inline"
        }
        
          
    }
    async function handleLogout(){
        logout()
    }
    
    return (
        <nav>
            <Link to = {{pathname: `/${navItem[0].link}`}} key={navItem[0].btn} ><li>{navItem[0].btn}</li> </Link>
            <Link to = {{pathname: `/${navItem[5].link}`}} key={navItem[5].btn}><li>{navItem[5].btn}</li> </Link> 
            {/* <Link to = {{pathname: `/${navItem[2].link}`}} key={navItem[2].btn} onClick={filterHandle}><li>{navItem[2].btn}</li> </Link>  */}
            
            {
                currentUser&& <>
                <Link to = {{pathname: `/${navItem[1].link}`}} key={navItem[1].btn}><li>{navItem[1].btn}</li> </Link> 
                <Link to = {{pathname: `/${navItem[4].link}`}} key={navItem[4].btn} onClick={handleLogout}><li>{navItem[4].btn}</li> </Link> 
                </>
            }

            {!currentUser && <Link to = {{pathname: `/${navItem[3].link}`}} key={navItem[3].btn}><li>{navItem[3].btn}</li> </Link> }
            
            

            {/* {
                navItem.map((item) => {

                        if(item.btn === "Filter" ){
                            return <Link to = {{pathname: `/${item.link}`}} key={item.btn} onClick={filterHandle} ><li>{item.btn}</li> </Link>    
                        }
                        else    
                            return <Link to = {{pathname: `/${item.link}`}} key={item.btn}><li>{item.btn}</li> </Link> 
                    })
            } */}
        </nav>
    )
}

export default NavbarList
