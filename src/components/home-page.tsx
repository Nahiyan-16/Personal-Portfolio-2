import { useEffect, useState } from "react";
import { TextGenerateEffect } from "../components/text-generate-effect";
import data from "../data/home-page-data";
import linkedInLogo from "../images/linkedin.png";
import githubLogo from "../images/github.png";
import instaLogo from "../images/insta.png";
import youtubeLogo from "../images/youtube.png";

const HomePage = () => {
  const [showDelayedSentence, setShowDelayedSentence] = useState(false);
  const [showDelayedLogo, setShowDelayedLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDelayedSentence(true);
    }, 2500);

    const timer2 = setTimeout(() => {
      setShowDelayedLogo(true);
    }, 7000);

    return () => {
      clearTimeout(timer2);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="h-screen bg-neutral-950 relative flex flex-col items-center justify-start pt-[10%] antialiased">
      <TextGenerateEffect words={data.introduction} className="text-[5rem]" />
      {showDelayedSentence ? (
        <TextGenerateEffect
          words={data.about}
          className="text-[3rem] w-[50%]"
        />
      ) : (
        <div className="block"></div>
      )}
      {showDelayedLogo ? (
        <div className="flex space-x-2 mt-2">
          <a
            href="https://www.linkedin.com/in/nahiyanahmed/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInLogo} alt="LinkedIn Logo" width="36px" />
          </a>
          <a
            href="https://github.com/Nahiyan-16/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} alt="Github Logo" width="35px" />
          </a>
          <a
            href="https://www.instagram.com/nahiyan16/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instaLogo} alt="Instagram Logo" width="34px" />
          </a>
          <a
            href="https://www.youtube.com/channel/UC9zr1Q2LtQtxtlKc45P7kMA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtubeLogo} alt="Youtube Logo" width="36px" />
          </a>
        </div>
      ) : (
        <div className="block"></div>
      )}
    </div>
  );
};

export default HomePage;
