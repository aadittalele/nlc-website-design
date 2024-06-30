"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function DonateForm({ onSubmit }: { onSubmit: () => void }) { 
  const router = useRouter();
  const [donateAmount, setDonateAmount] = useState(10);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleDonation = () => {
    let currentError = "";

    if (name.length < 5) {
      currentError = "Your full name must be atleast 5 characters long.";
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      currentError = "Your email is invalid.";
    }

    if (donateAmount <= 0) {
      currentError = "Your donation must be greater than 0.";
    }

    if (donateAmount >= 1000000) {
      currentError = "Your donation must be less than 1,000,000.";
    }

    if (currentError) {
      setError(currentError);
    } else {
      console.log("hi");
      router.push('/pay?amount=' + donateAmount);
      //onSubmit();
    }
  }

  return (
    <div className="flex flex-col m-3 lg:m-5">
      <div className="relative my-2">
          <input type="phone" id="filled_success_2" onChange={(e) => setName(e.target.value)} aria-describedby="filled_success_help" className="block rounded-lg px-3 pb-3 pt-5 w-full text-md text-gray-900 border-0 border-2 border-gray-300 outline-none peer" placeholder=" " />
          <label htmlFor="filled_success_2" className="absolute text-md text-gray-700 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Full Name</label>
      </div>
      <div className="relative my-2">
          <input type="text" id="filled_success" onChange={(e) => setEmail(e.target.value)} aria-describedby="filled_success_help" className="block rounded-lg px-3 pb-3 pt-5 w-full text-md text-gray-900 border-0 border-2 border-gray-300 outline-none peer" placeholder=" " />
          <label htmlFor="filled_success" className="absolute text-md text-gray-700 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
      </div>
      <div className="relative my-2">
          <input type="number" id="filled_success_3" onChange={(e) => setDonateAmount(parseInt(e.target.value))} value={donateAmount} aria-describedby="filled_success_help" className="block rounded-lg px-3 pb-3 pt-5 w-full text-md text-gray-900 border-0 border-2 border-gray-300 outline-none peer" placeholder=" " />
          <label htmlFor="filled_success_3" className="absolute text-md text-gray-700 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Donation Amount</label>
      </div>
      <div className="flex justify-center flex-wrap mb-2 text-white">
        {[5, 10, 20].map((amount) => (
          <button
            key={amount}
            type="button"
            className={`mt-2 transition-all text-lg font-semibold mx-1 px-4 py-2 rounded-lg border-white border-[1px] border-b-4 ${donateAmount === amount ? 'bg-white text-black' : 'bg-transparent'}`}
            onClick={() => setDonateAmount(amount)}
          >
            ${amount}
          </button>
        ))}
        <button
          type="button"
          className={`mt-2 transition-all text-lg font-semibold mx-1 px-4 py-2 rounded-lg border-white border-[1px] border-b-4 ${[5, 10, 20].includes(donateAmount) ? 'bg-transparent' : 'bg-white text-black'}`}
          onClick={() => setDonateAmount(0)}
        >
          Custom
        </button>
      </div>
      <div className="flex justify-center mt-2">
        <button onClick={handleDonation} className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg text-white rounded-full hover:text-white group bg-green-600">
          <span className="absolute left-0 block w-full h-0 transition-all bg-green-700 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <p className="relative">Donate</p>
        </button>
      </div>
      
      { error == "" ? null :
        <p className="mt-4 flex justify-center items-center rounded-xl text-center p-2 bg-red-500 text-lg text-white border-4 border-red-600">
          <Image src="/warning.svg" alt="warning" className="mr-2" width={25} height={25}/>
          {error}
        </p>
      }
    </div>
  );
}