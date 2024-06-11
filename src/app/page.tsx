import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { date } from "@/util/info";
import Timer from "@/components/Timer";
import EarthCanvas from "@/components/EarthCanvas";

export default function Home() {
  return (
    <main>
      <div>
        <div className="h-[100vh] relative">
          <Image
            alt="trees home"
            src="/trees_home.png"
            className="blur-[0px] brightness-[.5]"
            style={{
              objectFit: "cover",
              objectPosition: "center top",
              zIndex: -1,
              transform: ""
            }}
            quality={30}
            fill
            priority
          />
          <Navbar bgColor={""}/>
          <div className="text-white absolute text-center w-full mt-32 px-32">
            <div className="flex flex-col items-center">
              <h1 className="font-bold drop-shadow-xl text-[40px] xs:text-6xl sm:text-8xl mb-8">Join Us In Our Upcoming Gala!</h1>
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
      <div className="flex p-20 relative">
        <Image
          alt="trees home"
          src="/trees_home.png"
          className="blur-[0px] brightness-[.5]"
          style={{
            objectFit: "cover",
            objectPosition: "center top",
            zIndex: -1,
            transform: ""
          }}
          quality={30}
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#e9f5ea] via-[#e9f5ea] via-50% to-transparent to-70%"></div>
        <div className="w-3/5 text-[#072e2d] z-10 my-20">
          <h1 className="text-6xl font-black" style={{ textShadow: "rgba(0, 0, 0, 0.2) 2px 2px 10px" }}>
            Creating A <span style={{ color: "#129042" }}>Greener</span> Tomorrow.
          </h1>
          <p className="font-light text-2xl py-6 pr-36">
            Our mission is to raise awareness about the importance of protecting the environment and to advocate for
            policy changes that will help the Earth.
          </p>
        </div>
      </div>
      <div className="flex h-[800px]">
        <div className="w-1/2 bg-[#e9f5ea]">
          <EarthCanvas />
        </div>
        <div className="w-1/2 bg-[#052827]">
          a
        </div>
      </div>
    </main>
  );
}
