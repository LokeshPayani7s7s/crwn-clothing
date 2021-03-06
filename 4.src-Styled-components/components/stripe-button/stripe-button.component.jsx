import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price}) => {
  const priceForStripe = price *100;
  const publishableKey = 'pk_test_51HytmTCNzWvyFuWrMLdZaNUEqSgZ0qxWti8FZRW85ivEhKnZYejTpOPFiYR52Y12sB1EefoQV0gLKjjYuGUg1z0900ORNfb2Hp';

 const onToken = token =>{
    console.log(token)
    alert('Payment Successful');
  }
  return (
    <StripeCheckout
      label="Pay Now"
      name= 'Crwn clothing'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel = 'Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;