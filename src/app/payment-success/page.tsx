import Link from "next/link";

export default function PaymentSuccess({
  searchParams: { amount },
}: {
  searchParams: { amount: string };
}) {
  return (
    <main className="p-10 text-white text-center m-10 rounded-md bg-gradient-to-tr from-green-500 to-blue-600">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Thank you for your donation!</h1>
        <h2 className="text-2xl">You successfully sent</h2>
        <div className="p-2 rounded-md mt-2 text-4xl font-bold">
          ${amount}
        </div>
        <Link className="text-2xl" href="/">Return Home</Link>
        <h2 className="text-lg ">If you have any questions or concerns, please contact us at support@ecostafbla.org</h2>
      </div>
    </main>
  );
}