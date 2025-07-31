import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function CheckoutForm() {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transcationId, setTranscationId] = useState("");
  let stripe = useStripe();
  let elements = useElements();
  let AxiosSecure = useAxiosSecure();
  let [cart, refetch] = useCart();
  let { user } = useContext(AuthContext);
  const navigate = useNavigate();

  let totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      AxiosSecure.post("/create-payment-intent", { price: totalPrice }).then(
        (res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        }
      );
    }
  }, [AxiosSecure, totalPrice]);

  let handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("Error: ", error);
      setError(error.message);
    } else {
      console.log("PaymentMethod: ", paymentMethod);
      setError("");
    }

    //Confirm Payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("Payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("Transaction id", paymentIntent.id);
        setTranscationId(paymentIntent.id);

        // now save the payment in the database
        const payment = {
          email: user?.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), // utc date convert, use moment js
          cartIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.menuId),
          status: "pending",
        };

        const res = await AxiosSecure.post("/payments", payment);
        //console.log("payment response", res.data);
        refetch();

        if (res.data.paymentResult.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Payment successfull",
            icon: "success",
          });
          navigate("/dashboard/payment-history");
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-sm btn-primary mt-4"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-500">{error}</p>
    </form>
  );
}
