import React, { useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";
import './SplitForm.css'



const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: "12px",
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",

          "::placeholder": {
            color: "#aab7c4",
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    []
  );

  return options;
};

const SplitForm = ({handleBooking}) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });

    if (error) {
      setPaymentError(error.message)
      setPaymentSuccess(null)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setPaymentSuccess(paymentMethod.id)
      setPaymentError(null);
      handleBooking(paymentMethod.id);
    } 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>
        Card number
        <CardNumberElement 
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br/>
      <label>
        Expiration date
        <CardExpiryElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br/>
      <label>
        CVC
        <CardCvcElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br/>
      <button type="submit" disabled={!stripe} className="button-coral">
        Confirm Payment
      </button>
    </form>
    {
      paymentError && <p style={{color: 'tomato'}}>{paymentError}</p>
    }
     {
      paymentSuccess && <p style={{color: 'green'}}>Payment was Successfull</p>
    }
    </div>
  );
};

export default SplitForm;