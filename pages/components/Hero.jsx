import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";

function Hero() {
  return (
    <div className="mt-20 flex flex-col items-center">
      <h1 className="text-[5rem] text-center font-bold leading-tight">
        the simplest way to <br /> build your{" "}
        <span className="text-primary">credit score</span>
      </h1>
      <p className="text-center text-2xl flex items-center text-gray-400 mt-10 font-medium">
        join{" "}
        <span className="flex relative items-center mx-2 w-28 justify-center">
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
        </span>{" "}
        in building your financial credibility
      </p>

      <div className="flex items-center justify-between mt-10">
        <button className="px-24 py-5 bg-primary rounded-lg text-black text-lg font-semibold mr-6 filter hover:brightness-110">
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
