import Image from "next/image";
import Link from "next/link";
import Navbar from "../app/components/navbar";
import Footer from "../app/components/footer";
import About from "../app/components/about";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <div className="mb-auto">
          <Navbar />
          <div className="mt-9">
            <About />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );  
}