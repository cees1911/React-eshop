import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51HmilsA191ZPfEqz4e7hRicfXqpWeQSghr9gmU9h3t2GuyGIuaGP3k2dnzdvNqwjaaD5AYnTwNZigz65Zmhs8JpX00cJIGxPc9'

    const onToken = token => {
        axios ({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(responce => {
            alert('Payment successful')
        }).catch(error => {
            console.log('Payment error: ', error )
            alert
            ('There was an issue with your payment. Please make sure you use the provided credit Cart.')
        })
        
    }

    return(
        <StripeCheckout 
        label='Pay Now'
        name='Cees e-shop'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishablekey}
        />
    );
};

export default StripeCheckoutButton;