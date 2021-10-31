import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { GiSpeakerOff } from "react-icons/gi";
import Image from "next/image";

function VideoContainer() {
  const [toggleAudio, setToggleAudio] = useState(true);

  return (
    <div className="flex sm:flex-row flex-col mb-40 justify-between w-full">
      <div className="flex flex-col sm:w-1/2 w-full mt-12">
        <h2 className="sm:text-5xl text-3xl font-bold text-primary leading-tight">
          let us help you build your credibility
        </h2>
        <p className="sm:text-[1.8rem] text-[1.3rem] mt-7">
          Navigate the complex world of credit score with us
        </p>

        <div className="flex sm:flex-row flex-col items-center justify-between sm:mt-14 mt-10">
          <button className="sm:w-2/5 w-full sm:h-20 h-14 bg-primary rounded-lg text-black text-lg font-semibold sm:mr-6 mr-0 filter hover:brightness-110">
            start building
          </button>
          <button className="sm:w-3/5 w-full sm:h-20 h-14 sm:mt-0 mt-5 border border-primary rounded-lg text-lg font-semibold flex justify-center items-center hover:text-black hover:bg-primary">
            <BsWhatsapp className="text-3xl mr-2 hover:text-black" />
            chat with us now
          </button>
        </div>
      </div>

      <div className="relative flex sm:justify-end justify-center sm:w-1/2 w-full">
        <div
          onClick={() => setToggleAudio(!toggleAudio)}
          className="flex items-center rounded-full overflow-hidden absolute w-48 h-48 top-16 sm:left-24 left-26 z-10 border-4 border-primary cursor-pointer"
        >
          {toggleAudio && (
            <GiSpeakerOff className="text-white text-5xl absolute left-16 z-30 pointer-events-none" />
          )}

          <video
            className=""
            src="https://www.chace.co.in/images/phonevideo-web.mp4"
            width="300"
            height="150"
            autoPlay
            muted={toggleAudio}
            loop
          />
        </div>
        <div className="sm:block hidden">
          <Image
            src="https://www.chace.co.in/images/phone.png"
            alt="phone"
            width={360}
            height={540}
          />
        </div>
        <div className="mt-56 sm:hidden block">
          <Image
            src="https://www.chace.co.in/images/chace-card.png"
            alt="card"
            width={390}
            height={230}
          />
        </div>
      </div>
    </div>
  );
}

export default VideoContainer;
