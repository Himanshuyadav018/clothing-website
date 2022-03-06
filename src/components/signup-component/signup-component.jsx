import React from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'

import './signup-styles.scss'
import CustomInput from '../custom-input/custom-input-component'
import CustomButton from '../custom-button/custom-button-component'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'


class SignUp extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const {displayName, email, password, confirmPassword} = this.state

        if(password !== confirmPassword) {
            alert("password doesn't match")
            return
        }

        try{
            const { user } = await createUserWithEmailAndPassword(auth, email, password)
            await createUserProfileDocument(user, {displayName})

            this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
            })

        }catch(error) {
            console.log(error.message)
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target

        this.setState({[name]: value})
    }

    render(){
        return(
            <div className= "sign-up">
                <h2>I don't have an account</h2>
                <span>Create a new account using credentials</span>
                <form onSubmit={this.handleSubmit}>
                    <CustomInput
                    name="displayName" 
                    type='text' 
                    value={this.state.displayName} 
                    handleChange={this.handleChange}
                    label='DisplayName'
                    required
                    />
                    <CustomInput
                    name="email" 
                    type='email' 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label='Email'
                    required
                    />
                    <CustomInput
                    name="password" 
                    type='password' 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label='Password'
                    required
                    />
                    <CustomInput
                    name="confirmPassword" 
                    type='password' 
                    value={this.state.confirmPassword}  
                    handleChange={this.handleChange}
                    label='Confirm Password'
                    required
                    />
                    <CustomButton type= "submit" name="sign up"/>
                </form>
            </div>
        )
    }
}

export default SignUp