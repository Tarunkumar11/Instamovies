import React from 'react'

function NavbarList(props) {
    const navItem = props.items;
    return (
        <nav>
            {
                navItem.map((item) => {return <li key={item}><a href="#">{item}</a></li>})
            }
        </nav>
    )
}

export default NavbarList
