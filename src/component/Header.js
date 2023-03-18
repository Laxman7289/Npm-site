import React from 'react'
import css from "./Header.module.css"
import { Link } from 'react-router-dom'


export const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.header}>
        
          <a href='#'>Pro</a>
          <a href='#'>Teams</a>
          <a href='#'>Pricing</a>
          <a href='#'>Documentation</a>

        
      </div>
      <div className={css.nav}>
        <p className={css.item_left} >npm</p>
       
        <input type="text" placeholder='Search packages'></input>
        <a href='#' className={css.right_item_one}>sign Up</a>
        <Link to='/login' className={css.right_item}>sign In</Link>
      </div>

    </div>
  )
}
