import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { date } from "@/util/info";
import Timer from "@/components/Timer";
import EarthCanvas from "@/components/EarthCanvas";
import Statistics from "@/components/Statistics";
import FadeInView from "@/components/FadeInView";
import ScaleInView from "@/components/ScaleInView";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div>
        <div className="h-[100vh] relative">
          <Image
            alt="trees home"
            src="/trees_home.png"
            className="blur-[3px] brightness-[.7] scale-[1.02]"
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
                <Link href="/gala" className="px-5 py-2.5 border-4 border-green-700 relative rounded-full group overflow-hidden font-medium bg-green-600 inline-block">
                  <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-green-700 group-hover:h-full opacity-90"></span>
                  <span className="relative text-2xl">Register</span>
                </Link>
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
          alt="cliff"
          src="/cliff.jpg"
          className="absolute inset-0 w-full h-full object-cover object-top blur-0 z-[-1]"
          quality={30}
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#e9f5ea] via-[#e9f5ea] via-60% md:via-50% to-transparent to-70%"></div>
        <div className="z-10 md:my-10 md:w-3/5 text-[#072e2d] px-6 sm:px-20 py-10 mb-56">
          <FadeInView delay={1}>
            <h1 className="text-5xl xs:text-6xl font-black drop-shadow-xl">
              Creating A <span className="text-[#129042]">Greener</span> Tomorrow.
            </h1>
            <p className="py-6 md:pr-36 text-xl xs:text-2xl font-light">
              Our mission is to raise awareness about the importance of protecting the environment and to advocate for
              policy changes that will help the Earth.
            </p>
          </FadeInView>
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
            <div className="flex flex-col items-center">
              <ScaleInView>
                <Image src="/tree.svg" alt="tree" width={140} height={140}/>
              </ScaleInView>
              <p className="text-5xl md:text-7xl font-bold mt-4"><Statistics target={1020156} /></p>
              <p className="text-2xl md:text-4xl mt-2">trees planted</p>
            </div>
          </div>
          <div className="md:w-1/3 px-8 py-4">
            <div className="flex flex-col items-center">
              <ScaleInView>
                <Image src="/recycle.svg" alt="recycle" width={140} height={140}/>
              </ScaleInView>
              <p className="text-5xl md:text-7xl font-bold mt-4"><Statistics target={220935} /></p>
              <p className="text-2xl md:text-4xl mt-2">pounds of plastic removed</p>
            </div>
          </div>
          <div className="md:w-1/3 px-8 py-4">
            <div className="flex flex-col items-center">
              <ScaleInView>
                <Image src="/land.png" alt="land" width={140} height={140}/>
              </ScaleInView>
              <p className="text-5xl md:text-7xl font-bold mt-4"><Statistics target={56034} /></p>
              <p className="text-2xl md:text-4xl  mt-2">acres of land protected</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 px-8 text-center">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mx-2 md:mx-6 rounded-xl bg-white shadow-xl mb-12">
            <Image
              alt="windmills"
              src="/windmills.webp"
              className="rounded-t-2xl w-full h-64 object-cover"
              quality={30}
              width={450}
              height={300}
            />
            <p
              className="inline-block px-3 py-1 mb-4 mt-8 text-xs font-medium tracking-wider text-green-600 uppercase bg-green-200 rounded-full">
              Help the environment
            </p>
            <p className="text-2xl font-extrabold leading-none md:text-3xl">
              Donate
            </p>
            <p className="p-6 text-gray-800">
              Your donation funds projects that restore forests, wetlands, and other vital ecosystems, providing safe havens for wildlife and maintaining biodiversity.
            </p>
            <Link href="/donate" className="relative inline-flex items-center justify-center p-4 px-6 py-3 mb-6 overflow-hidden font-medium text-white transition duration-300 ease-out bg-green-500 rounded-full shadow-md group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-600 group-hover:translate-x-0 ease">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white-500 transition-all duration-300 transform group-hover:translate-x-full ease">Learn More</span>
              <span className="relative invisible">Learn More</span>
            </Link>
          </div>
          <div className="w-full md:w-1/3 mx-2 md:mx-6 rounded-xl bg-white shadow-xl mb-12">
            <Image
              alt="coast"
              src="/coast.jpg"
              className="rounded-t-2xl w-full h-64 object-cover origin-top"
              quality={30}
              width={450}
              height={300}
            />
            <p
              className="inline-block px-3 py-1 mb-4 mt-8 text-xs font-medium tracking-wider text-blue-600 uppercase bg-blue-200 rounded-full">
              Get to know us
            </p>
            <p className="text-2xl font-extrabold leading-none sm:text-3xl">
              Who are we?
            </p>
            <p className="p-6 text-gray-800">
              We are a nonprofit committed to protecting the environment through advocacy and restoration, ensuring a sustainable future for everyone.
            </p>
            <Link href="/about-us" className="relative inline-flex items-center justify-center p-4 px-6 py-3 mb-6 overflow-hidden font-medium text-white transition duration-300 ease-out bg-blue-500 rounded-full shadow-md group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-600 group-hover:translate-x-0 ease">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white-500 transition-all duration-300 transform group-hover:translate-x-full ease">Learn More</span>
              <span className="relative invisible">Learn More</span>
            </Link>
          </div>
          <div className="w-full md:w-1/3 mx-2 md:mx-6 rounded-xl bg-white shadow-xl mb-12">
            <Image
              alt="gala"
              src="/gala.jpg"
              className="rounded-t-2xl w-full h-64 object-cover origin-top"
              quality={30}
              width={450}
              height={300}
            />
            <p
              className="inline-block px-3 py-1 mb-4 mt-8 text-xs font-medium tracking-wider text-[#A4B509] uppercase bg-[#e5f089] rounded-full">
              Help the environment
            </p>
            <p className="text-3xl font-extrabold md:text-3xl">
              Come To Our Gala!
            </p>
            <p className="p-6 text-gray-800">
              Join us for our gala to support environmental protection and advocacy efforts, fostering a sustainable future through impactful initiatives and community engagement.
            </p>
            <Link href="/gala" className="relative inline-flex items-center justify-center p-4 px-6 py-3 mb-6 overflow-hidden font-medium text-white transition duration-300 ease-out bg-[#c9d65a] rounded-full shadow-md group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#A4B509] group-hover:translate-x-0 ease">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white-500 transition-all duration-300 transform group-hover:translate-x-full ease">Learn More</span>
              <span className="relative invisible">Learn More</span>
            </Link>
          </div>
        </div>
        {/* <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
          <div
              className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded-lg shadow-xl lg:flex-row sm:mx-auto">
              <div className="relative lg:w-1/2">
                  <img src="https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80"
                      alt="Persons talking in a work setting." className="object-cover w-full lg:absolute h-80 lg:h-full" />
                  <svg className="absolute top-0 right-0 hidden h-full text-white lg:inline-block" viewBox="0 0 20 104"
                      fill="currentColor">
                      <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104"></polygon>
                  </svg>
              </div>
              <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                  <div>
                      <p
                          className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-purple-600 uppercase bg-purple-200 rounded-full">
                          Craft and build
                      </p>
                  </div>
                  <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                      Your Next Great Idea
                  </h5>
                  <p className="py-5 mb-5 text-gray-800">
                      <span className="font-bold">Our Platform</span> will help you craft and build your next idea. Utilize our
                      drag and
                      drop components to build the application of your dreams.
                  </p>
                  <div className="flex items-center">
                      <button type="submit"
                          className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-purple-500 rounded-lg hover:bg-purple-700 focus:shadow-outline focus:outline-none">
                          Get started
                      </button>
                      <a href="/" aria-label=""
                          className="inline-flex items-center text-lg underline transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                          Learn More
                          <svg className="inline-block w-2 ml-2" fill="currentColor" viewBox="0 0 12 12">
                              <path
                                  d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z">
                              </path>
                          </svg>
                      </a>
                  </div>
              </div>
          </div>
        </div> */}
      </div>
    </main>
  );
}
