import ScoreBar from "./ScoreBar";

function CreditScoreBar() {
  return (
    <div className="sm:mt-50 mt-72 mb-40">
      <div className="flex sm:flex-row flex-col justify-between items-center">
        <h2 className="sm:text-5xl text-4xl text-primary font-bold leading-tight sm:w-2/6 w-full">
          btw, what is credit score?
        </h2>
        <h3 className="sm:text-3xl text-xl font-normal sm:w-4/6 w-full sm:mt-0 mt-8 leading-snug">
          Credit score is a 3-digit number between 300 - 900 reflecting how well
          you’ve managed your money in the past. It's a scorecard of your
          trustworthiness.
        </h3>
      </div>

      <ScoreBar />
    </div>
  );
}

export default CreditScoreBar;
