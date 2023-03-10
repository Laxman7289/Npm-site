import React from 'react'
import css from "./Header.module.css"

export const Header = () => {
  return (
<div className={css.container}>
    <div className={css.header}>
      <ul>
        <li>Pro</li>
        <li>Teams</li>
        <li>Pricing</li>
        <li>Documentation</li>
      </ul>
    </div>
      <div className={css.nav}>
        <p className={css.item_left} >npm</p>
        <input type="search" placeholder='Search packages'></input>
        <a href='#' className={css.right_item_one}>sign Up</a>
        <a href='#' className={css.right_item}>sign In</a>
        
      </div>
      <div className={css.img_backg}>
        <img src='https://t4.ftcdn.net/jpg/04/82/03/07/360_F_482030733_TJDqWHmhDsXJzVt55KbwQMoShQDg5JKu.jpg'></img>
      </div>
    </div>
  )
}
