import React from 'react'
import css from "./Login.module.css"

export const Login = () => {
    return (
        <div className={css.backimg} >
            <div className={css.container}>
                <div className={css.logindata}>
                    <h2>Login</h2>
                    <form>
                        <div className={css.input_box}>
                            <span className={css.icons}><ion-icon name="mail-outline"></ion-icon></span>
                            <input type="email" required pattern='[a-z]*' ></input>
                            <label>E-mail</label>
                        </div>
                        <div className={css.input_box}>
                            <span className={css.icons}><ion-icon name="lock-closed-outline"></ion-icon></span>
                            <input type="password" required></input>
                            <label>Password</label>
                        </div>
                        <div className={css.registration_box}>
                            <label> <input type="checkbox" ></input>Registration</label>
                            <a href='#'>Forgot Password?</a>
                        </div>
                        
                        <button className={css.btn} type='submit'>Login</button>
                      

                        <div className={css.registration_link}>
                            <p>Don't have an account?<a href='#'>Register</a></p>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    )
}