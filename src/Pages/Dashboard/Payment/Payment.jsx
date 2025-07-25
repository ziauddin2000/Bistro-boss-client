import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./checkoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Stripe_pk);

export default function Payment() {
  return (
    <div className="py-10 px-5">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-5">Payment</h1>

      <div className="max-w-md">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
}
