"use client";

import Checkout from "@/components/Checkout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Pay({ searchParams: { amount } }: { searchParams: { amount: string } }) {
  return (
    <main className="text-white text-center bg-gradient-to-tr from-blue-400 to-green-600 h-[100vh] p-10">
      <div className="mb-10">
        <h1 className="text-3xl mb-2">You are donating</h1>
        <h2 className="text-5xl">
          <span className="font-bold"> ${amount}</span>
        </h2>
      </div>
      <div className="px-4 sm:px-10 md:px-24">
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: parseInt(amount) * 100,
            currency: "usd",
          }}
        >
          <Checkout amount={parseInt(amount)} />
        </Elements>
      </div>

    </main>
  );
}