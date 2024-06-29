"use client";
import { useState } from "react";
import Image from "next/image";

export default function GalaForm({ onSubmit }: { onSubmit: () => void }) {
  const [donateAmount, setDonateAmount] = useState(10);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleDonation = () => {
    let currentError = "";

    const phoneRegex = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
    if (!phoneRegex.test(phone)) {
      currentError = "Phone number is invalid.";
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      currentError = "Email is invalid.";
    }

    if (currentError) {
      setError(currentError);
    } else {
      onSubmit();
    }
  }

  const formatPhoneNumber = (value: string) => {
    if (!value) return value;

    // Remove all non-digit characters
    const phoneNumber = value.replace(/[^\d]/g, '');

    // Format the phone number as (123) 456-7890
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhone(formattedPhoneNumber);
  };

  return (
    <div className="flex flex-col m-3 lg:m-5">
      <div className="relative my-2">
          <input type="text" id="filled_success" onChange={(e) => setEmail(e.target.value)} aria-describedby="filled_success_help" className="block rounded-lg px-3 pb-3 pt-5 w-full text-md text-gray-900 border-0 border-2 border-gray-300 outline-none peer" placeholder=" " />
          <label htmlFor="filled_success" className="absolute text-md text-gray-700 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
      </div>
      <div className="relative my-2">
          <input type="phone" id="filled_success_2" onChange={handlePhoneChange} value={phone} aria-describedby="filled_success_help" className="block rounded-lg px-3 pb-3 pt-5 w-full text-md text-gray-900 border-0 border-2 border-gray-300 outline-none peer" placeholder=" " />
          <label htmlFor="filled_success_2" className="absolute text-md text-gray-700 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Phone Number</label>
      </div>
      <div className="relative my-2">
          <input type="number" id="filled_success_3" onChange={(e) => setDonateAmount(parseInt(e.target.value))} value={donateAmount} aria-describedby="filled_success_help" className="block rounded-lg px-3 pb-3 pt-5 w-full text-md text-gray-900 border-0 border-2 border-gray-300 outline-none peer" placeholder=" " />
          <label htmlFor="filled_success_3" className="absolute text-md text-gray-700 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Donation Amount</label>
      </div>
      <div className="flex flex-wrap mb-2 text-white">
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
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-xl" onClick={handleDonation}>
        Register
      </button>
      
      { error == "" ? null :
        <p className="mt-4 flex justify-center items-center rounded-xl text-center p-2 bg-red-500 text-lg text-white border-4 border-red-600">
          <Image src="/warning.svg" alt="warning" className="mr-2" width={25} height={25}/>
          {error}
        </p>
      }
    </div>
  );
}