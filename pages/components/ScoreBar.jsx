import { useState } from "react";
import Image from "next/image";
import data from "../../scoreData.json";

function ScoreBar() {
  const [selectedBar, setSelectedBar] = useState("average");
  const [xOffset, setXOffset] = useState(50);

  const data = {
    "very poor": {
      heading: "very poor",
      score: "300-500",
      description:
        "There is a high probability of your loan and credit card applications getting rejected. In case of approval, you are unlikely to get the lowest interest rate.",
      source: "https://www.chace.co.in/images/gradient-scorecard.png"
    },
    poor: {
      heading: "poor",
      score: "501-650",
      description:
        "You will have a slightly higher chance of getting approved for loans. However, the interest rates offered may be on the higher side.",
      source: "https://www.chace.co.in/images/gradient-scorecard.png"
    },
    average: {
      heading: "average",
      score: "651-700",
      description:
        "You are quite likely to get approved for financial products and a large number of lenders will consider offering you a loan or credit card.",
      source: "https://www.chace.co.in/images/gradient-scorecard.png"
    },
    good: {
      heading: "good",
      score: "751-800",
      description:
        "You might get better than the average interest rate on your loans and most lenders will be willing to offer you loans basis your credit score.",
      source: "https://www.chace.co.in/images/gradient-scorecard.png"
    },
    excellent: {
      heading: "excellent",
      score: "851-900",
      description:
        "With score categorised as excellent, you will get the best possible loan interest rate and will also receive top credit card offers from the lenders.",
      source: "https://www.chace.co.in/images/gradient-scorecard-last.png"
    }
  };

  return (
    <div className="mt-20 mb-80 relative">
      <div className="flex">
        <div className="flex flex-col w-[30%] mr-1.5">
          <div className="flex justify-between items-center px-1.5 mb-1.5">
            <p>300</p>
            <p>500</p>
          </div>
          <div className="flex items-center">
            <div
              onClick={() => {
                setSelectedBar("very poor");
                setXOffset(0);
              }}
              className={`h-4 w-full rounded-lg bg-red-500 cursor-pointer transition-all duration-500 ${selectedBar ===
                "very poor" && "ring-2 ring-red-300"}`}
            ></div>
            <span className="w-1.5 h-1 bg-gray-300"></span>
          </div>
        </div>

        <div className="flex flex-col w-[25%] mr-1.5">
          <div className="flex justify-between items-center px-1.5 mb-1.5">
            <p>501</p>
            <p>650</p>
          </div>
          <div className="flex items-center">
            <span className="w-1.5 h-1 bg-gray-300"></span>
            <div
              onClick={() => {
                setSelectedBar("poor");
                setXOffset(28);
              }}
              className={`h-4 w-full rounded-lg bg-red-400 cursor-pointer transition-all duration-500 ${selectedBar ===
                "poor" && "ring-2 ring-red-200"}`}
            ></div>
            <span className="w-1.5 h-1 bg-gray-300"></span>
          </div>
        </div>

        <div className="flex flex-col w-[20%] mr-1.5">
          <div className="flex justify-between items-center px-1.5 mb-1.5">
            <p>651</p>
            <p>750</p>
          </div>
          <div className="flex items-center">
            <span className="w-1.5 h-1 bg-gray-300"></span>
            <div
              onClick={() => {
                setSelectedBar("average");
                setXOffset(50);
              }}
              className={`h-4 w-full rounded-lg bg-yellow-500 cursor-pointer transition-all duration-500 ${selectedBar ===
                "average" && "ring-2 ring-yellow-300"}`}
            ></div>
            <span className="w-1.5 h-1 bg-gray-300"></span>
          </div>
        </div>

        <div className="flex flex-col w-[15%] mr-1.5">
          <div className="flex justify-between items-center px-1.5 mb-1.5">
            <p>751</p>
            <p>850</p>
          </div>
          <div className="flex items-center">
            <span className="w-1.5 h-1 bg-gray-300"></span>
            <div
              onClick={() => {
                setSelectedBar("good");
                setXOffset(66);
              }}
              className={`h-4 w-full rounded-lg bg-green-400 cursor-pointer transition-all duration-500 ${selectedBar ===
                "good" && "ring-2 ring-green-200"}`}
            ></div>
            <span className="w-1.5 h-1 bg-gray-300"></span>
          </div>
        </div>

        <div className="flex flex-col w-[10%] mr-1.5">
          <div className="flex justify-between items-center px-1.5 mb-1.5">
            <p>851</p>
            <p>900</p>
          </div>
          <div className="flex items-center">
            <span className="w-1.5 h-1 bg-gray-300"></span>
            <div
              onClick={() => {
                setSelectedBar("excellent");
                setXOffset(67);
              }}
              className={`h-4 w-full rounded-lg bg-green-500 cursor-pointer transition-all duration-500 ${selectedBar ===
                "excellent" && "ring-2 ring-green-300"}`}
            ></div>
          </div>
        </div>
      </div>

      <div
        style={{ left: `${xOffset}%` }}
        className={`absolute top-14 w-[21.5rem] transition-all duration-700 ease-in-out`}
      >
        <Image
          width={340}
          height={190}
          src={data[selectedBar].source}
          alt="card"
        />
        <div className="absolute top-0 left-0 flex flex-col pt-6 px-6">
          <div className="flex items-center">
            <h3 className="text-3xl font-bold text-primary mr-6">
              {data[selectedBar].heading}
            </h3>
            <p className="text-gray-500 text-lg font-semibold">
              {data[selectedBar].score}
            </p>
          </div>
          <p className="mt-3 font-semibold">{data[selectedBar].description}</p>
        </div>
      </div>
    </div>
  );
}

export default ScoreBar;
