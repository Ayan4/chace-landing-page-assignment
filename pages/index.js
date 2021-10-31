import Head from "next/Head";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CreditScoreBar from "./components/CreditScoreBar";
import AnimatedCards from "./components/AnimatedCards";
import ChaceHelp from "./components/ChaceHelp";
import VideoContainer from "./components/VideoContainer";

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-28">
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

      {/* get started and footer */}
    </div>
  );
}

export default Home;
