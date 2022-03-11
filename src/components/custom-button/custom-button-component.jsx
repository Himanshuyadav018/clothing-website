import React from 'react'

import './custom-button-styles.scss';

const CustomButton = ({name,isGoogleSignIn,inverted, ...otherprops}) => {
    return (
        <button className={`${inverted ? 'inverted' : ''}${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherprops}>
            {name}
        </button>
    )
}

export default CustomButton