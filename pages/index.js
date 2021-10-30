import Head from "next/Head";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CreditScoreBar from "./components/CreditScoreBar";

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-28 border">
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

      {/* How chase helps you */}

      {/* CTA and video */}

      {/* partnering with chace */}

      {/* get started and footer */}
    </div>
  );
}

export default Home;
