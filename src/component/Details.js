import React from 'react'
import Button from '@mui/material/Button'
import css from "./Details.module.css"
import { Link } from 'react-router-dom'


const Details = () => {
    return (
        <>
            <div className={css.data}>
                <div className={css.data_heading}>
                    <h5>Build amazing </h5>
                    <h5>things</h5>
                </div>
                <div className={css.data_content}>
                    <p>
                        We're GitHub., the company behind the npm Registry and npm CLI.
                        We offer those to the community for free, but our day job is building and selling
                        useful tools for developers like you.
                    </p>
                    <h4>Take your JavaScript</h4>
                    <h4> development up a notch</h4>
                    <p>Get started today for free, or step up to npm Pro to enjoy a premium JavaScript development experience, with features like private packages.</p>
                </div>
                <div className={css.btn}>
                    <Button variant="text" color="primary" className={css.btn_one}>
                        sign up for free
                    </Button>
                    <Button className={css.btn_second}> <Link to='/Pro' className={css.btn_1} >  
                        Learn about Pro
                    </Link></Button>
                   
                   
                </div>
            </div>
            <div className={css.iconimg}>
                <img src='https://static.npmjs.com/attachments/ck3uweazy72ye8874y9kkxnx1-gak.png' />
            </div>
            <div className={css.heading2}>
                <h2>Bring the best of open</h2>
                <h2> source to you, your team,</h2>
                <h2>and your company</h2>
            </div>
            <div className={css.details2}>
                <p>
                    Relied upon by more than 17 million developers worldwide, npm is<br></br>
                    committed to making JavaScript development elegant, productive, and<br></br>
                    safe. The free npm Registry has become the center of JavaScript code<br></br>
                    sharing, and with more than two million packages, the largest software<br></br>
                    registry in the world. Our other tools and services take the Registry, and<br></br>
                    the work you do around it, to the next level.
                </p>
            </div>

            
            <div className={css.footer}>
                <div className={css.footer_box0}>
                   
                    <a href='https://github.com/npm'> <img className={css.imglink} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHQaXLcBuHx11zE7kUDrd012_fOyPTrdJ1A&usqp=CAU'/></a>
                    
                    <a href='https://github.com/'><img className={css.imglink} src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'/></a>
                </div>
                <div className={css.footer_box1}>
                    <p className={css.footer_botom}>Support</p>
                    <ul>
                        <li>Help</li>
                        <li>Advisories</li>
                        <li>Status</li>
                        <li>Contact npm</li>
                    </ul>
                </div>

                <div className={css.footer_box2}>
                    <p className={css.footer_botom}>company</p>
                    <ul>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Press</li>
                    </ul>
                </div>

                <div className={css.footer_box3}>
                    <p className={css.footer_botom}>Terms & Policies</p>
                    <ul>
                        <li>Policies</li>
                        <li>Terms of use</li>
                        <li>Code of conduct</li>
                        <li>Privacy</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Details
