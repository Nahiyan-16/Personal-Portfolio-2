import { TextGenerateEffect } from "../components/text-generate-effect";
import { SparklesCore } from "./sprakles";

const HomePage = () => {
  const temp = (
    <>
      <TextGenerateEffect />
    </>
  );

  return (
    <div className="h-screen bg-neutral-950 relative flex flex-col items-center justify-start pt-[10%] antialiased">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      {temp}
    </div>
  );
};

export default HomePage;
