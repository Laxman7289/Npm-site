    import React from 'react'
import Button from '@mui/material/Button'
import css from "./Details.module.css"


const Details = () => {
  return (
    <div className={css.data}>
        <div className={css.data_heading}>
            <h5>Build amazing </h5>
            <h5>things</h5>
        </div>
        <div className={css.data_content}>
            <p>
            We're GitHub., the company behind the npm Registry and npm CLI. We offer those to the community for free, but our day job is building and selling useful tools for developers like you.
            </p>
            <h4>Take your JavaScript</h4>
            <h4> development up a notch</h4>
            <p>Get started today for free, or step up to npm Pro to enjoy a premium JavaScript development experience, with features like private packages.</p>
        </div>
        <div className={css.btn}>
            <Button variant="text" color="primary" className={css.btn_one}>
                sign up for free
            </Button>
            <Button variant="text" color="primary" className={css.btn_second} >
                Learn about Pro
            </Button>
        </div>

    </div>
  )
}

export default Details
