"use client";
import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { SparklesCore } from "./sprakles";

const ContactPage: React.FC = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const serviceId = "service_cpv6c4i";
  const templateId = "template_hef92nx";
  const userId = "bdqguHW8EY7fa9dlR";

  useEffect(() => emailjs.init(userId), []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await emailjs.send(serviceId, templateId, {
        user_name: name,
        message: message,
      });
      console.log("Success!");
    } catch (err) {
      console.log(err);
    }
    setName("");
    setMessage("");
  };

  return (
    <div
      className="bg-neutral-950 relative flex flex-col items-center justify-center antialiased h-screen"
      id="contact"
    >
      <div className="w-full absolute h-screen ">
        <SparklesCore
          id=""
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className={"`w-full h-full"}
          particleColor="#FFFFFF"
        />
      </div>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-center font-sans font-bold">
          Contact Me
        </h1>
        <p className="max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Leave me a message!
        </p>
        <form onSubmit={handleSubmit} className="relative z-10">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full mt-4 bg-neutral-950 placeholder:text-neutral-700 p-2 text-center"
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full mt-4 bg-neutral-950 placeholder:text-neutral-700 p-2 h-[150px] text-center"
          />
          <button
            type="submit"
            className="mt-4 inline-flex h-12 w-[40%] animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-bold text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 z-10 relative"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
