import React from 'react'

import './custom-button-styles.scss';

const CustomButton = ({name,isGoogleSignIn, ...otherprops}) => {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherprops}>
            {name}
        </button>
    )
}

export default CustomButton