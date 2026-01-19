import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./Stripe";
import PaymentForm from "./PaymentForm";

const Checkout = ({ clientSecret }) => {
    return (
        <Elements
            stripe={stripePromise}
            options={{ clientSecret }}
        >
            <PaymentForm />
        </Elements>
    );
};

export default Checkout;
