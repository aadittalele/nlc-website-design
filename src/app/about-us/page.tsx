import EarthCanvas from "@/components/EarthCanvas";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

function AboutUs() {
	return (
		<div>
      <div className="h-[40vh] sm:h-[45vh] relative">
        <Image
          alt="trees home"
          src="/trees_home.png"
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
        <div className="flex">
          <div className="w-1/2 p-8 text-end">
            <p className="mb-4 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-300 text-transparent bg-clip-text font-bold text-5xl">
              Our Mission
            </p>
            <p className="ml-16 text-gray-500">
              At Ecosta, our mission is to lead the charge in environmental advocacy and restoration. We are committed to preserving our planet's natural beauty and biodiversity for future generations.
            </p>
          </div>
          <div className="w-1/2 p-8">
            <p className="mb-4 bg-gradient-to-r from-green-600 via-green-400 to-green-300 text-transparent bg-clip-text font-bold text-5xl">
              Our Intiatives
            </p>
            <p className="mr-16 text-gray-500">
              Our projects stretch across continents from Africa to Asia, covering every corner of the globe. We're a nonprofit committed to environmental advocacy and restoration, aiming to foster change.
            </p>
          </div>
        </div>
        <div className="flex justify-center my-10">
          <div style={{ width: "600px", height: "360px" }}>
            <EarthCanvas />
          </div>
        </div>
      </div>
      <div className="mx-18 sm:mx-24 md:mx-48 mt-16 mb-6">
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
	);
}

export default AboutUs;