"use client";
import { useState } from "react";

export default function DonateForm({ onSubmit }: { onSubmit: () => void }) {
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
      <div className="relative">
          <input type="text" id="filled_success" onChange={(e) => setEmail(e.target.value)} aria-describedby="filled_success_help" className="block rounded-lg px-3 pb-3 pt-5 w-full text-md text-gray-900 border-0 border-2 border-gray-300 outline-none peer" placeholder=" " />
          <label htmlFor="filled_success" className="absolute text-md text-gray-700 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
      </div>
      <div className="relative">
          <input type="phone" id="filled_success_2" onChange={handlePhoneChange} value={phone} aria-describedby="filled_success_help" className="block rounded-lg px-3 pb-3 pt-5 w-full text-md text-gray-900 border-0 border-2 border-gray-300 outline-none peer" placeholder=" " />
          <label htmlFor="filled_success_2" className="absolute text-md text-gray-700 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Phone Number</label>
      </div>
      <div className="relative mb-3">
        <input
          id="floatingAmount"
          type="number"
          placeholder=" "
          className="peer w-full border border-gray-300 rounded p-2"
          value={donateAmount}
          onChange={(e) => setDonateAmount(parseInt(e.target.value))}
        />
        <label htmlFor="floatingAmount" className="absolute left-2 top-2 text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-gray-500 transition-all">
          Donate Amount
        </label>
      </div>
      <div className="flex flex-wrap mb-3">
        {[5, 10, 20].map((amount) => (
          <button
            key={amount}
            type="button"
            className={`me-2 mb-2 px-4 py-2 rounded ${donateAmount === amount ? 'bg-gray-200' : 'bg-transparent border border-gray-200'}`}
            onClick={() => setDonateAmount(amount)}
          >
            ${amount}
          </button>
        ))}
        <button
          type="button"
          className={`me-2 mb-2 px-4 py-2 rounded ${[5, 10, 20].includes(donateAmount) ? 'bg-transparent border border-gray-200' : 'bg-gray-200'}`}
          onClick={() => setDonateAmount(0)}
        >
          Custom
        </button>
      </div>
      <button className="pt-2 el2 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleDonation}>
        Donate
      </button>
      <div className="flex">
        
      </div>
      
      { error == "" ? null :
        <p className="mt-2 text-md text-red-500">{error}</p>
      }
    </div>
  );
}