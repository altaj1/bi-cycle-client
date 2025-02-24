/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { ImSpinner9 } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ buyInfo }: { buyInfo: any }) => {
  // console.log(buyInfo.price, "registrationInfo");
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState();
  console.log({ buyInfo });
  const stripe = useStripe();
  const elements = useElements();
  const [_cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);
  useEffect(() => {
    // fetch client secret

    if (buyInfo?.price > 1) {
      getClientSecret({ price: buyInfo?.price });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buyInfo?.price]);

  //   get clientSecret
  const getClientSecret = async (price: any) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/orders/create-payment-intent`,
        price
      );
      // console.log("clientSecret from server--->", data);
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.log({ error });
    }
  };

  const handelSubmit = async (event: any) => {
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
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setCardError(error.message as string);
      setProcessing(false);
      return;
    } else {
      // console.log('[PaymentMethod]', paymentMethod)
      setCardError("");
    }

    // confirm payment
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret as unknown as string, {
        payment_method: {
          card: card,
          billing_details: {
            email: buyInfo?.user?.email,
            name: buyInfo?.user?.id,
          },
        },
      });

    if (confirmError) {
      // console.log(confirmError)
      setCardError(confirmError.message as string);
      setProcessing(false);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      // console.log(paymentIntent, "this is payment intent")
      const paymentInfo = {
        email: buyInfo?.user.email,
        product: buyInfo._id,
        quantity: 1,
        totalPrice: buyInfo.price,
      };

      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/orders`,
          paymentInfo
        );
        console.log(data);
        if (data.status) {
          toast.success(data.message);
          navigate(`/`);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <form onClick={handelSubmit} className="space-y-5">
        <div>
          <label className="">Enter Your Card Number:</label>
          <div className="border p-4 border-accent w-full max-w-xs rounded-lg">
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
          </div>
        </div>

        <div className="flex mt-2 justify-around">
          <button
            disabled={!stripe || !clientSecret || processing}
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          >
            {processing ? (
              <ImSpinner9 className="animate-spin m-auto" size={24} />
            ) : (
              `Pay`
            )}
            pay
          </button>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
