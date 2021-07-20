import React from 'react'

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
                            return <li key={item.btn} onClick={filterHandle}><a href={item.link}>{item.btn}</a></li>    
                        }
                        else    
                            return <li key={item.btn}><a href={item.link}>{item.btn}</a></li>
                    })
            }
        </nav>
    )
}

export default NavbarList
