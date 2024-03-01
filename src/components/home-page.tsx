import { useEffect, useState } from "react";
import { TextGenerateEffect } from "../components/text-generate-effect";
import data from "../data/home-page-data";
import Links from "./Links";
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
          <Links
            link="https://www.linkedin.com/in/nahiyanahmed/"
            source={linkedInLogo}
            alternative="LinkedIn Logo"
            width="26px"
          />
          <Links
            link="https://github.com/Nahiyan-16/"
            source={githubLogo}
            alternative="Github Logo"
            width="25px"
          />
          <Links
            link="https://www.instagram.com/nahiyan16/"
            source={instaLogo}
            alternative="Instagram Logo"
            width="24px"
          />
          <Links
            link="https://www.youtube.com/channel/UC9zr1Q2LtQtxtlKc45P7kMA"
            source={youtubeLogo}
            alternative="Youtube Logo"
            width="26px"
          />
        </div>
      ) : (
        <div className="block"></div>
      )}
    </div>
  );
};

export default HomePage;
