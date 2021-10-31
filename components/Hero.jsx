import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";

function Hero() {
  return (
    <div className="mt-24 flex flex-col items-center">
      <h1 className="sm:text-[5rem] text-5xl text-center font-bold leading-tight">
        the simplest way to <br /> build your{" "}
        <span className="text-primary">credit score</span>
      </h1>
      <div className="text-center sm:text-2xl text-lg flex items-center text-gray-400 sm:mt-10 mt-16 font-medium">
        <div>join</div>{" "}
        <div className="flex relative items-center sm:mx-2 sm:w-28 w-32">
          <div className="absolute left-0">
            <Image
              height={40}
              width={40}
              src="https://www.chace.co.in/avatars/1.png"
              alt="user"
            />
          </div>
          <div className="absolute left-6">
            <Image
              height={40}
              width={40}
              src="https://www.chace.co.in/avatars/2.png"
              alt="user"
            />
          </div>
          <div className="absolute left-12">
            <Image
              height={40}
              width={40}
              src="https://www.chace.co.in/avatars/3.png"
              alt="user"
            />
          </div>
          <div className="absolute left-[4.5rem]">
            <Image
              height={40}
              width={40}
              src="https://www.chace.co.in/avatars/4.png"
              alt="user"
            />
          </div>
        </div>{" "}
        <div>in building your financial credibility</div>
      </div>

      <div className="flex sm:flex-row flex-col items-center sm:justify-between sm:mt-14 mt-20">
        <button className="px-24 py-5 bg-primary rounded-lg text-black text-lg sm:mb-0 mb-6 font-semibold sm:mr-6 filter hover:brightness-110">
          start building
        </button>
        <button className="px-16 py-5 border border-primary rounded-lg text-lg font-semibold flex justify-center items-center hover:text-black hover:bg-primary">
          <BsWhatsapp className="text-3xl mr-2 hover:text-black" />
          chat with us now
        </button>
      </div>
    </div>
  );
}

export default Hero;
