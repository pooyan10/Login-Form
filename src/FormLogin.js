import React from 'react'
import useForm from './useForm'
import './App.css'

const FormLogin = () => {
    const {values , handleChange , handleSubmit}=useForm()
    return (
        <div className='App'>
            <h1>fill this form </h1>
            <form onSubmit={handleSubmit} >
                <label>
                    email
                </label>

                <input 
                 type="email" name="email" placeholder="enter your email"
                 onChange={handleChange} value={values.email}>
                </input><br/>

                <label>
                    password
                </label>

                <input
                 type="password" name="password" placeholder="enter your password"
                  onChange={handleChange} value={values.password}>
                </input><br/>

                <button>submit</button>
            </form>
        </div>
    )
}

export default FormLogin
