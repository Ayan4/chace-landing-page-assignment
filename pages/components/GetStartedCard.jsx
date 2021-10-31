import Image from "next/image";
import { BsFillCheckCircleFill } from "react-icons/bs";
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className="mb-8 mt-52">
      <div className="flex sm:flex-row flex-col justify-between items-center">
        <div className="sm:w-2/5">
          <Image
            src="https://www.chace.co.in/images/partner.png"
            alt="secure"
            width={280}
            height={230}
          />
        </div>
        <div className="flex flex-col sm:w-3/5 w-full">
          <h2 className="sm:text-5xl text-4xl sm:mt-0 mt-14 text-primary font-bold leading-tight">
            partnering with the best to secure your money
          </h2>
          <p className="sm:text-3xl text-xl mt-8 leading-tight">
            Our partner bank hosts your account and follows all security
            standards as per RBI regulations
          </p>
        </div>
      </div>

      <div className="bg-primary mt-48 rounded-lg p-8 flex sm:flex-row flex-col items-start">
        <ul className="sm:border-r-2 sm:border-gray-900 sm:border-opacity-60 p-2">
          <li className="flex text-gray-900 items-center m-6">
            <BsFillCheckCircleFill className="text-3xl mr-6" />
            <p className="text-xl font-semibold">100% Instant Approval</p>
          </li>
          <li className="flex text-gray-900 items-center m-6">
            <BsFillCheckCircleFill className="text-3xl mr-6" />
            <p className="text-xl font-semibold">No annual fee or surprises</p>
          </li>
          <li className="flex text-gray-900 items-center m-6">
            <BsFillCheckCircleFill className="text-3xl mr-6" />
            <p className="text-xl font-semibold">
              Zero credit card debt and interest
            </p>
          </li>
          <li className="flex text-gray-900 items-center m-6">
            <BsFillCheckCircleFill className="text-3xl mr-6" />
            <p className="text-xl font-semibold">Build credit score</p>
          </li>
        </ul>

        <div className="ml-12 mt-4">
          <h2 className="text-5xl text-gray-900 font-bold">
            get started today
          </h2>
          <p className="text-gray-900 opacity-80 text-2xl font-semibold mt-7">
            the simplest way to build your credit score
          </p>
          <button className="w-4/5 h-16 text-lg font-bold tracking-wide rounded-lg bg-gray-900 bg-opacity-80 hover:bg-opacity-90 mt-10">
            start building
          </button>
        </div>
      </div>

      <footer className="flex flex-col items-center mt-40">
        <Image
          src="https://www.chace.co.in/images/chace.svg"
          alt="logo"
          width={130}
          height={90}
        />
        <p className="text-2xl">the simplest way to build your credit score</p>
        <div className="flex mt-8">
          <AiOutlineInstagram className="text-3xl text-gray-300 opacity-70 mr-3 cursor-pointer hover:opacity-100" />
          <AiOutlineWhatsApp className="text-3xl text-gray-300 opacity-70 mr-3 cursor-pointer hover:opacity-100" />
          <AiOutlineTwitter className="text-3xl text-gray-300 opacity-70 mr-3 cursor-pointer hover:opacity-100" />
          <FaFacebook className="text-3xl text-gray-300 opacity-70 mr-3 cursor-pointer hover:opacity-100" />
        </div>
        <p className="mt-8 text-lg text-center opacity-40 leading-tight">
          Chace © 2021 <br />
          All rights reserved
        </p>
      </footer>
    </div>
  );
}

export default Footer;
