import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { date } from "@/util/info";
import Timer from "@/components/Timer";
import EarthCanvas from "@/components/EarthCanvas";
import Statistics from "@/components/Statistics";

export default function Home() {
  return (
    <main>
      <div>
        <div className="h-[100vh] relative">
          <Image
            alt="trees home"
            src="/trees_home.png"
            className="blur-[3px] brightness-[.7]"
            style={{
              objectFit: "cover",
              objectPosition: "center top",
              zIndex: -1
            }}
            quality={30}
            fill
            priority
          />
          <Navbar />
          <div className="text-white absolute text-center w-full mt-32 px-2 md:px-32">
            <div className="flex flex-col items-center">
              <h1 className="font-bold drop-shadow-xl text-4xl xs:text-6xl sm:text-8xl mb-8">Join Us At Our Upcoming Gala!</h1>
              <Timer date={date}/>
              <div className="mt-7 sm:mt-8 md:mt-10">
                <Link href="/gala" className="text-2xl rounded-xl transition duration-300 border-4 border-[#0c7518] bg-[#189926] hover:bg-[#0c7518] py-2 px-4">Register</Link>
              </div>
            </div>
          </div>
          <div>
            {/* mountain lake with forest photo */}
          </div>
        </div>
      </div>
      <div className="relative flex">
        <Image
          alt="trees home"
          src="/trees_home.png"
          className="absolute inset-0 w-full h-full object-cover object-top blur-0 z-[-1]"
          quality={30}
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#e9f5ea] via-[#e9f5ea] via-60% md:via-50% to-transparent to-70%"></div>
        <div className="z-10 md:my-10 md:w-3/5 text-[#072e2d] px-6 sm:px-20 py-10 mb-56">
          <h1 className="text-5xl xs:text-6xl font-black drop-shadow-xl">
            Creating A <span className="text-[#129042]">Greener</span> Tomorrow.
          </h1>
          <p className="py-6 md:pr-36 text-xl xs:text-2xl font-light">
            Our mission is to raise awareness about the importance of protecting the environment and to advocate for
            policy changes that will help the Earth.
          </p>
        </div>
      </div>
      {/* <div className="flex h-[800px]">
        <div className="w-1/2 bg-[#e9f5ea]">
          <EarthCanvas />
        </div>
        <div className="w-1/2 bg-[#052827]">
          a
        </div>
      </div> */}
      <div className="bg-[#13300e] py-8 text-white text-center">
        <p className="text-5xl xs:text-6xl md:text-8xl font-bold mb-6">Our Impact</p>
        <div className="flex flex-col items-center md:items-start md:flex-row">
          <div className="md:w-1/3 px-8 py-4">
            <p className="text-5xl md:text-7xl font-bold"><Statistics target={1020156} /></p>
            <p className="text-2xl md:text-4xl mt-2">trees planted</p>
          </div>
          <div className="md:w-1/3 px-8 py-4">
            <p className="text-5xl md:text-7xl font-bold"><Statistics target={220935} /></p>
            <p className="text-2xl md:text-4xl mt-2">pounds of plastic removed</p>
          </div>
          <div className="md:w-1/3 px-8 py-4">
            <p className="text-5xl md:text-7xl font-bold"><Statistics target={56034} /></p>
            <p className="text-2xl md:text-4xl  mt-2">acres of land protected</p>
          </div>
        </div>
      </div>
      <div className="py-12 px-8 text-center">
        <p className="text-7xl mb-12">Earth Needs You.</p>
        <Link href="/donate"className="relative flex justify-center items-center w-1/3 mx-6 h-64 text-white transition-all rounded-2xl hover:shadow-xl hover:border-8 border-gray-200">
          <Image
            alt="trees home"
            src="/trees_home.png"
            className="inset-0 w-full h-full object-cover object-top brightness-[.7] rounded-xl"
            quality={30}
            fill
            priority
          />
          <p className="text-5xl font-semibold m-4 z-10">Donate</p>
        </Link>
      </div>
    </main>
  );
}
