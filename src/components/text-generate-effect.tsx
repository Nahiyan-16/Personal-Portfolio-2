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

  const logos = [
    { img: linkedInLogo, link: data.myLinks.linkedIn },
    { img: githubLogo, link: data.myLinks.github },
    { img: instaLogo, link: data.myLinks.instagram },
    { img: youtubeLogo, link: data.myLinks.youtube },
  ];

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
        delay: stagger(0.3, { startDelay: 2 }),
      }
    );
  }, [scope2.current]);

  useEffect(() => {
    animate3(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.3, { startDelay: 7.2 }),
      }
    );
  }, [scope3.current]);

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
    return (
      <motion.div
        ref={scope3}
        className="flex space-x-2 mt-4 justify-center items-center"
      >
        {logos.map((logo, idx) => {
          return (
            <motion.span key={logo.img + idx} className="opacity-0">
              <a href={logo.link} target="_blank" rel="noopener noreferrer">
                <img src={logo.img} width="36px" />
              </a>
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div
      className={cn(
        "font-bold h-[50%] flex justify-center items-center z-20",
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
