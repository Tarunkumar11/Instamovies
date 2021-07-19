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

                        if(item === "Filter" ){
                            return <li key={item} onClick={filterHandle}><a href="#">{item}</a></li>    
                        }
                        else    
                            return <li key={item}><a href="#">{item}</a></li>
                    })
            }
        </nav>
    )
}

export default NavbarList
