import Link from "next/link";

export default function PaymentSuccess({
  searchParams: { amount },
}: {
  searchParams: { amount: string };
}) {
  return (
    <main className="p-10 h-[100vh] text-white text-center bg-gradient-to-tr from-green-500 to-blue-600">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mt-4 mb-8">Thank you for your donation!</h1>
        <h2 className="text-2xl">You successfully sent</h2>
        <div className="p-2 rounded-md text-4xl font-bold mb-4">
          ${amount}
        </div>
        <Link href="/" className="px-5 py-2.5 mb-4 border-4 border-blue-600 relative rounded-full group overflow-hidden font-medium bg-blue-500 inline-block">
          <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-600 group-hover:h-full opacity-90"></span>
          <span className="relative text-2xl">Return to Home</span>
        </Link>
        <h2 className="text-lg ">If you have any questions or concerns, please reach out to us using the <span className="font-bold">contact form</span> or through <span className="font-bold">support@ecostafbla.org</span></h2>
      </div>
    </main>
  );
}