import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer"
import Habilities from "../components/habilities";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <div className="mb-auto">
          <Navbar />
          <div className="mt-9">
            <Habilities />
          </div>
        
        </div>
        <Footer />
      </div>
    </>
  );  
}