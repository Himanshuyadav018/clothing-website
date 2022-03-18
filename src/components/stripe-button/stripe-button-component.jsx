import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

import './stripe-button-styles.scss';

const StripeButton = (price) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51Keg7YSAva0p4VJO2JC3iWF8IOLWCDB2I7rXrAsf3i3UK7HLeHG16LYGqiQ9mVLYsRVc6HosDCgqGPJBFDairfXs00uHP9s65N'

    const onToken = (token) => {
        console.log(token)
        alert('payment successful')
    }

    return (
        <div>
            <StripeCheckout
                label='Pay Now'
                name="Clothing Website ltd"
                image='https://svgshare.com/i/CUz.svg'
                shippingAddress
                billingAddress
                amount={priceForStripe}
                token={onToken}
                stripeKey={publishableKey}
                discription={`your total amount is $${price}`}
                panelLabel='PayNow'
            />
        </div>
    )
}

export default StripeButton