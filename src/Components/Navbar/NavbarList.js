import React from 'react'

function NavbarList(props) {
    const navItem = props.items;
    return (
        <nav>
            {
                navItem.map((item) => {return <li><a href="#">{item}</a></li>})
            }
        </nav>
    )
}

export default NavbarList
