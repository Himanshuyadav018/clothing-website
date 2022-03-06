import React from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'

import './signin-styles.scss'
import CustomInput from '../custom-input/custom-input-component'
import CustomButton from '../custom-button/custom-button-component'
import {auth, signInWithGoogle } from '../../firebase/firebase.utils'

class Signin extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const {email, password} = this.state
        try{
            await signInWithEmailAndPassword(auth, email, password)
            this.setState({email: '', password: ''})

        }catch(error) {
            console.log(error.message)
        }

    }

    handleChange = (e) => {
        const {name, value} = e.target

        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div className="signin">
                <h2>I already have an account</h2>
                <span>Enter login and password to login</span>

                <form onSubmit={this.handleSubmit}>
                    <CustomInput
                        name="email" 
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label='Email'
                        required/>
                    <CustomInput 
                        name="password" 
                        type='password' 
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='Password'
                        required/>
                    <div className='button-group'>
                    <CustomButton type="submit" name='Sign in'/>
                    <CustomButton type="button" onClick={signInWithGoogle} name='Sign in with google' isGoogleSignIn/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signin