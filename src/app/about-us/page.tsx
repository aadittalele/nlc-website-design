"use client";
import EarthCanvas from "@/components/EarthCanvas";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function AboutUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const submitForm = async () => {
    let currentError = "";

    if (name.length < 5) {
      currentError = "Your full name must be atleast 5 characters long.";
    }

    if (message.length < 10) {
      currentError = "Your message must be atleast 10 characters long.";
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      currentError = "Your email is invalid.";
    }

    if (currentError) {
      setError(currentError);
    } else {
      // await fetch(
      //   "/api/contact",
      //   {
      //     method: "POST",
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({ name: name, email: email, message: message })
      //   }
      // );
      setSubmitted(true);
    }
  }

	return (
		<div className="overflow-hidden">
      <div className="h-[40vh] sm:h-[45vh] relative">
        <Image
          alt="cliff"
          src="/cliff.jpg"
          className="blur-[5px] brightness-[.7] scale-[1.02]"
          style={{
            objectFit: "cover",
            objectPosition: "center top",
            zIndex: -1
          }}
          quality={50}
          fill
          priority
        />
        <Navbar />
        <div className="flex justify-center items-center text-white mt-20">
          <p className="text-6xl xs:text-7xl sm:text-8xl font-bold">About Us</p>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8 text-center md:text-end">
            <p className="mb-4 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-300 text-transparent bg-clip-text font-bold text-5xl">
              Our Mission
            </p>
            <p className="mrl0 md:ml-16 text-gray-500">
              At Ecosta, our mission is to lead the charge in environmental advocacy and restoration. We are committed to preserving our planet's natural beauty and biodiversity for future generations.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-8 text-center md:text-start">
            <p className="mb-4 bg-gradient-to-r from-green-600 via-green-400 to-green-300 text-transparent bg-clip-text font-bold text-5xl">
              Our Intiatives
            </p>
            <p className="mr-0 md:mr-16 text-gray-500">
              Our projects stretch across continents from Africa to Asia, covering every corner of the globe. We're a nonprofit committed to environmental advocacy and restoration, aiming to foster change.
            </p>
          </div>
        </div>
        <div className="flex justify-center my-10 overflow-hidden">
          <div style={{ width: "600px", height: "360px" }}>
            <EarthCanvas />
          </div>
        </div>
        <p className="text-center text-xl sm:text-2xl md:text-4xl mt-28">Have any questions? Contact us at <span className="font-bold">support@ecostafbla.org</span></p>
        <p className="text-center text-xl sm:text-2xl md:text-4xl font-bold my-4">OR</p>
        <p className="text-center text-xl sm:text-2xl md:text-4xl">Fill out the form below:</p>
        <p className="text-center text-2xl sm:text-3xl md:text-5xl font-black mt-10">Contact Us Form</p>
        <div className="flex flex-col items-center mt-8">
          <div className="flex justify-center">
            { submitted ?
              <p className="text-2xl bg-green-600 p-4 text-white rounded-xl">Thank you for your message. We will be reaching out to you soon.</p>
            :
              <div>
                <p>Name</p>
                <input onChange={(e) => setName(e.target.value)} className="w-full p-2 text-2xl outline-none bg-transparent border-b-2 border-[#444444]"/>
                <p className="mt-6">Email</p>
                <input onChange={(e) => setEmail(e.target.value)} className="w-full p-2 text-2xl outline-none bg-transparent border-b-2 border-[#444444]"/>
                <p className="mt-6">Message</p>
                <textarea onChange={(e) => setMessage(e.target.value)} className="w-full p-2 text-xl outline-none bg-transparent border-b-2 border-[#444444]"/>
                <button onClick={submitForm} className="my-10 w-48 text-2xl rounded-xl border-2 border-[#444444] text-[#444444] transition hover:text-white duration-300 hover:border-[#074c8a] hover:bg-[#074c8a] py-2 px-4">Submit</button>
              </div>
            }
          </div>
          { error == "" ? null :
            <p className="max-w-xl flex justify-center items-center rounded-xl text-center p-2 bg-red-500 text-lg text-white border-4 border-red-600">
              <Image src="/warning.svg" alt="warning" className="mr-2" width={25} height={25}/>
              {error}
            </p>
          }
        </div>
        <div className="mx-8 sm:mx-24 md:mx-48 mt-16 mb-6">
          <h1 className="text-center font-bold text-2xl">Our Rationale</h1>
          <h6 className="font-bold mt-4">Crucial Facts about Climate Change</h6>
          <ul className="list-disc list-inside">
            <li>
              Forests and woodlands absorb approximately 30 percent of emissions generated by industry and fossil
              fuels. Nevertheless, the world witnesses a yearly loss of 10 million hectares of forests. This
              deforestation and forest deterioration contribute to 11 percent of carbon emissions.
              <sup>
                <Link href={"/sources"} prefetch={false}>
                  [1]
                </Link>
              </sup>
            </li>
            <li>
              Over the past 170 years, humans have released 2.4 trillion tons of Carbon Dioxide into the atmosphere,
              with half of this occurring in the last 35 to 50 years.
              <sup>
                <Link href={"/sources"} prefetch={false}>
                  [2]
                </Link>
              </sup>
            </li>
            <li>
              The last decade has witnessed the five hottest years ever recorded.
              <sup>
                <Link href={"/sources"} prefetch={false}>
                  [2]
                </Link>
              </sup>
            </li>
            <li>
              As of 2018, the concentration of carbon dioxide (CO2) in the atmosphere reached 408 parts per million,
              marking the highest level in the past 3 million years.
              <sup>
                <Link href={"/sources"} prefetch={false}>
                  [2]
                </Link>
              </sup>
            </li>
          </ul>
          <ul className="list-disc list-inside">
            <li>
              Earth's climate has experienced changes throughout its history, but the current warming is occurring at
              a pace unprecedented in the last 10,000 years.
              <sup>
                <Link href={"/sources"} prefetch={false}>
                  [3]
                </Link>
              </sup>
            </li>
            <li>
              From the increase in global temperatures to the melting of ice sheets, there is a wealth of evidence
              demonstrating a planet undergoing warming.
              <sup>
                <Link href={"/sources"} prefetch={false}>
                  [3]
                </Link>
              </sup>
            </li>
          </ul>
        </div>
      </div>
		</div>
	);
}

export default AboutUs;