import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "../Payment/PaymentForm"

const PUBLIC_KEY = "pk_test_51M2rXLGQnLUAcbmt2cXr5w6zRFmNpSQXMDkw1mbBFKpfeXMlxxt9Mkrflhiagx1XFbe9Foo6WsQoHIYBh6lLSH2j005dwPbKHk"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}