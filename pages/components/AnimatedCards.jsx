import Image from "next/image";
import { BiRupee } from "react-icons/bi";
import { FaPercent } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";

function AnimatedCards() {
  return (
    <div className="flex justify-between items-center relative mt-[24rem] mb-[20rem]">
      <div className="w-3/6">
        <div className="absolute top-0 transition-all duration-700">
          <div>
            <Image
              src="https://www.chace.co.in/images/info-card.png"
              alt="animated-card"
              width={250}
              height={250}
            />
          </div>
          <div className="absolute top-0 pl-6 pr-3 py-8">
            <div className="w-10 h-10 bg-primary rounded-full flex justify-center items-center">
              <BiRupee className="text-2xl" />
            </div>
            <p className="mt-6 text-2xl font-semibold">
              Higher negotiating power
            </p>
          </div>
        </div>

        <div className="absolute top-8 left-[17rem] transition-all duration-700">
          <div>
            <Image
              src="https://www.chace.co.in/images/info-card.png"
              alt="animated-card"
              width={250}
              height={250}
            />
          </div>
          <div className="absolute top-0 pl-6 pr-3 py-8">
            <div className="w-10 h-10 bg-primary rounded-full flex justify-center items-center">
              <FaPercent className="text-xl" />
            </div>
            <p className="mt-6 text-2xl font-semibold">
              Lower interest rates on loans
            </p>
          </div>
        </div>

        <div className="absolute top-52 left-20 transition-all duration-700">
          <div>
            <Image
              src="https://www.chace.co.in/images/info-card.png"
              alt="animated-card"
              width={250}
              height={250}
            />
          </div>
          <div className="absolute top-0 pl-6 pr-3 py-8">
            <div className="w-10 h-10 bg-primary rounded-full flex justify-center items-center">
              <AiOutlineCheck className="text-2xl" />
            </div>
            <p className="mt-6 text-2xl font-semibold">
              Quicker approval on credit applications
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col pl-16 w-3/6 mt-10">
        <h3 className="text-5xl text-primary font-bold leading-tight">
          why should you <br /> build it?
        </h3>
        <p className="text-3xl mt-8 leading-snug">
          Everyone prefers dealing with trustworthy individuals, building your
          credit score makes it easier for lenders to trust you.
        </p>
      </div>
    </div>
  );
}

export default AnimatedCards;
