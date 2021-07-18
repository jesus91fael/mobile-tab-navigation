import React from 'react'
import'./styles.css'

const Menu = ({children, onClick}) =>{
    return(
        <div onClick={onClick} className='item-menu'>{children}</div>
    )
}

export default Menu