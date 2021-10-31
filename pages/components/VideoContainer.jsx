import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { GiSpeakerOff } from "react-icons/gi";
import Image from "next/image";

function VideoContainer() {
  const [toggleAudio, setToggleAudio] = useState(true);

  return (
    <div className="flex mb-40 justify-between w-full">
      <div className="flex flex-col w-1/2 mt-12">
        <h2 className="text-5xl font-bold text-primary leading-tight">
          let us help you build your credibility
        </h2>
        <p className="text-[1.8rem] mt-7">
          Navigate the complex world of credit score with us
        </p>

        <div className="flex items-center justify-between mt-14">
          <button className="w-2/5 h-20 bg-primary rounded-lg text-black text-lg font-semibold mr-6 filter hover:brightness-110">
            start building
          </button>
          <button className="w-3/5 h-20 border border-primary rounded-lg text-lg font-semibold flex justify-center items-center hover:text-black hover:bg-primary">
            <BsWhatsapp className="text-3xl mr-2 hover:text-black" />
            chat with us now
          </button>
        </div>
      </div>

      <div className="relative flex justify-end w-1/2">
        <div
          onClick={() => setToggleAudio(!toggleAudio)}
          className="flex items-center rounded-full overflow-hidden absolute w-48 h-48 top-16 left-24 z-10 border-4 border-primary cursor-pointer"
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
        <div>
          <Image
            src="https://www.chace.co.in/images/phone.png"
            alt="phone"
            width={360}
            height={540}
          />
        </div>
      </div>
    </div>
  );
}

export default VideoContainer;
