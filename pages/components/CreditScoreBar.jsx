import ScoreBar from "./ScoreBar";

function CreditScoreBar() {
  return (
    <div className="mt-40 mb-40">
      <div className="flex justify-between items-center">
        <h2 className="text-5xl text-primary font-bold leading-tight w-2/6">
          btw, what is credit score?
        </h2>
        <h3 className="text-3xl font-normal w-4/6 leading-snug">
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
