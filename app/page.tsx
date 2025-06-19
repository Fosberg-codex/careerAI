import Image from "next/image";
import Nav from "@/comps/nav";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Nav/>
      <div className="w-1/2 mx-auto mt-4">
        <div className="flex flex-col items-center justify-center">
          <div className="text-4xl font-bold">Welcome to CareerAI</div>
          <div className="text-2xl">
            Your personalized career coach
          </div>
          <div className="text-md text-center">
            Get personalized career advice and recommedations with CareerAI. Choose your level of education to get started today.
          </div>

         <div className="flex justify-between gap-4 mt-8">
           <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-lg font-medium">
             Primary School
           </button>
           <Link href="/tertiary" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-lg font-medium">
             Tertiary Level
           </Link>
         </div>
        </div>
      </div>
    
    </>
  
  );
}
