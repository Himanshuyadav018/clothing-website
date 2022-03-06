import React from 'react'

import './signin-and-signup-styles.scss'
import Signin from '../../components/signin-component/signin-component'
import SignUp from '../../components/signup-component/signup-component'

const SigninAndSignupPage = () => { 
    return (
        <div className="signinAndSignup">
            <Signin/>
            <SignUp/>
        </div>
    )
}

export default SigninAndSignupPage