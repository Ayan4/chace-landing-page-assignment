import Image from "next/image";
import { BsChevronRight } from "react-icons/bs";

function ChaceHelp() {
  return (
    <div className="mb-48">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl text-primary font-bold text-center leading-tight">
          how chace helps you <br /> build your credit score?
        </h2>
        <p className="mt-6 text-3xl">designed to be effortless for everyone</p>
      </div>

      <div className="flex mt-16 justify-between">
        <div className="flex flex-col items-center w-60">
          <Image
            src="https://www.chace.co.in/images/features-1.png"
            alt="money"
            width={230}
            height={230}
          />
          <div className="flex flex-col items-center text-center">
            <p className="text-2xl font-bold mt-8">Move Money</p>
            <p className="mt-2 font-semibold">
              Move money into your Chace account. It’s fast, easy and you can do
              it right in the app.
            </p>
          </div>
        </div>

        <div className="mt-28">
          <BsChevronRight className="text-2xl text-primary" />
        </div>

        <div className="flex flex-col items-center w-60">
          <Image
            src="https://www.chace.co.in/images/features-2.png"
            alt="money"
            width={230}
            height={230}
          />
          <div className="flex flex-col items-center text-center">
            <p className="text-2xl font-bold mt-8">Spend Money</p>
            <p className="mt-2 font-semibold">
              Whether it’s Netflix or groceries, use Chace for everyday
              purchases without ever having to worry about credit card debt or
              interest.
            </p>
          </div>
        </div>

        <div className="mt-28">
          <BsChevronRight className="text-2xl text-primary" />
        </div>

        <div className="flex flex-col items-center w-60">
          <Image
            src="https://www.chace.co.in/images/features-3.png"
            alt="money"
            width={230}
            height={230}
          />
          <div className="flex flex-col items-center text-center">
            <p className="text-2xl font-bold mt-8">Build Credit</p>
            <p className="mt-2 font-semibold">
              Refill your Chace account balance at the end of a month. You’ll
              never spend money you don’t have and you’ll build credit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChaceHelp;
