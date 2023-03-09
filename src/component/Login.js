import React from 'react'
import css from "./Login.module.css"

export const Login = () => {
    return (
        <div >
            <p>npm</p>
            <div>
                <div>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6LXNan-fM4zhBNBHjbME6_h43Amn97t2yiQ&usqp=CAU' alt='logo'></img>
                </div>
            </div>
            <div >
                <h4>Sign In</h4>
                <label htmlFor="">Username</label>
                <input type="text"/>
                <label htmlFor="">Password</label>
                <input type="password"/>
            </div>

        </div>
    )
}