import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SplitForm from './SplitForm';


const stripePromise = loadStripe('pk_test_51IeZW2DunQXenhN5CfifyapLh2Y5HCT4CH5vIBuq2glwEtaU4hJoJPKPpX7FTrv7VCxWIbSNqwRgeYqlzTsjBFLV000zzM8Xgd');


const PaymentGateway = ({handleBooking}) => {
  return (
    <Elements stripe={stripePromise}>
      <SplitForm handleBooking={handleBooking} />
    </Elements>
  );
};

export default PaymentGateway;