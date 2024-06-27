import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex items-center justify-center w-full h-16 bg-white">
      <Link href="/" className="drop-shadow-lg mr-3">
        <Image src="/favicon.ico" width={40} height={40} alt="logo"/>
      </Link>
      <span className="mr-3">© 2024 Aadit Talele</span>
      <span>FBLA NLC Website Design 2024</span>
    </div>
  );
}