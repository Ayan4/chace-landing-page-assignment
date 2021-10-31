import Head from "next/Head";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CreditScoreBar from "./components/CreditScoreBar";
import AnimatedCards from "./components/AnimatedCards";
import ChaceHelp from "./components/ChaceHelp";
import VideoContainer from "./components/VideoContainer";
import GetStartedCard from "./components/GetStartedCard";

function Home() {
  return (
    <div className="sm:max-w-7xl w-full mx-auto sm:px-28 px-6">
      <Head>
        <title>Chace</title>
      </Head>

      {/* Nav */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* score bar section */}
      <CreditScoreBar />

      {/* why animated cards */}
      <AnimatedCards />

      {/* How chase helps you */}
      <ChaceHelp />

      {/* CTA and video */}
      <VideoContainer />

      {/* partnering with chace */}
      <GetStartedCard />

      {/* get started and footer */}
    </div>
  );
}

export default Home;
