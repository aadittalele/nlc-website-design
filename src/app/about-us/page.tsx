import EarthCanvas from "@/components/EarthCanvas";
import Navbar from "@/components/Navbar";
import Image from "next/image";

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
		</div>
	);
}

export default AboutUs;