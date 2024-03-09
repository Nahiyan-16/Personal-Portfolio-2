"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../utils/cn";
import linkedInLogo from "../images/linkedin.png";
import githubLogo from "../images/github.png";
import instaLogo from "../images/insta.png";
import youtubeLogo from "../images/youtube.png";
import data from "../data/data";

export const TextGenerateEffect = ({ className }: { className?: string }) => {
  const [scope, animate] = useAnimate();
  const [scope2, animate2] = useAnimate();
  const [scope3, animate3] = useAnimate();

  let introArray = data.introduction.split(" ");
  let introContent = data.introAbout.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  useEffect(() => {
    animate2(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2, { startDelay: 2 }),
      }
    );
  }, [scope2.current]);

  useEffect(() => {
    animate2(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2, { startDelay: 4 }),
      }
    );
  }, [scope3.current]);

  const logos = () => {
    return (
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
    );
  };

  const renderIntro = () => {
    return (
      <motion.div ref={scope}>
        {introArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={word === "Nahiyan" ? "opacity-1" : "opacity-0"}
            >
              {word === "Nahiyan" ? (
                <a href="#about" className="text-blue-500">
                  Nahiyan
                </a>
              ) : (
                word
              )}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  const renderContent = () => {
    return (
      <motion.div ref={scope2}>
        {introContent.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={word === "Nahiyan" ? "opacity-1" : "opacity-0"}
            >
              {word + " "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  const renderLogo = () => {
    return <motion.div ref={scope3}>{logos()}</motion.div>;
  };

  return (
    <div
      className={cn(
        "font-bold h-[50%] flex justify-center items-center",
        className
      )}
    >
      <div className="mt-4">
        <div className="leading-snug tracking-wide">
          <div className="text-5xl mb-5">{renderIntro()}</div>
          <div className="text-3xl w-[50%] mr-auto ml-auto">
            {renderContent()}
          </div>
          <div className="text-3xl w-[100%] mr-auto ml-auto">
            {renderLogo()}
          </div>
        </div>
      </div>
    </div>
  );
};
