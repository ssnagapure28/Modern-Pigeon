import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff", 
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm() {
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("/payment", {
                amount: 1842,
                id
            })

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}

    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        {!success ? 
        <form onSubmit={handleSubmit}>
            <div> 
            <h1 class="heading">Billing Details</h1>
            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Animesh D"></input>
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
                <input type="text" id="email" name="email" placeholder="andy@gmail.com"></input>
            </div>
            
             <label >Accepted Cards <i class="fa fa-credit-card" > </i></label>
             <div class="icon-container">
                      <i class="fa fa-cc-visa" ></i>&nbsp;
                      <i class="fa fa-cc-mastercard" ></i>&nbsp;
                      <i class="fa fa-cc-amex" ></i>&nbsp;
                      <i class="fa fa-cc-discover" ></i>&nbsp;
            </div>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button class="btn">Pay</button>
            
        </form>
        :
       <div>
           <h2>You parcel receipt has been generated. Thanks a lot for using Modern Pigeon.</h2>
       </div> 
        }
            
        </>
    )
}