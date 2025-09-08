import Image from "next/image";
import Nav from "@/comps/nav";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="w-full px-4 sm:px-6 md:px-8 mt-4 flex justify-center">
        <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 bg-white bg-opacity-90 rounded-2xl shadow-lg">
          <div className="flex items-center gap-2 font-bold text-3xl sm:text-4xl md:text-5xl mb-2 text-center">
            <div className="text-black font-bold">
              Welcome to Career{" "}
              <span className="bg-black py-1 px-2 rounded-md text-white">.ai</span>
            </div>
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl mb-2 text-center">
            Your personalized career coach
          </div>
          <div className="text-sm sm:text-base md:text-lg text-center mb-4">
            Get personalized career advice and recommendations with CareerAI. Choose your level of education to get started today.
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 w-full">
            <Link
              href="/tertiary/primary"
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-base sm:text-lg font-medium text-center w-full sm:w-auto"
            >
              Primary School
            </Link>
            <Link
              href="/tertiary"
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-base sm:text-lg font-medium text-center w-full sm:w-auto"
            >
              Tertiary Level
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
