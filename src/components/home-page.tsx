import { useEffect, useState } from "react";
import { TextGenerateEffect } from "../components/text-generate-effect";
import data from "../data/home-page-data";

const HomePage = () => {
  const [showDelayedSentence, setShowDelayedSentence] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDelayedSentence(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="h-screen bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <TextGenerateEffect words={data.introduction} className="text-2xl" />
      {showDelayedSentence ? (
        <TextGenerateEffect words={data.about} className="text-xl" />
      ) : (
        <div className="block"></div>
      )}
    </div>
  );
};

export default HomePage;
