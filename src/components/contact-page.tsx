"use client";
import data from "../data/data";

export function ContactPage() {
  return (
    <div
      className="bg-neutral-950 relative flex flex-col items-center justify-center antialiased h-screen"
      id="contact"
    >
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-center font-sans font-bold">
          {data.contactTitle}
        </h1>
        <p></p>
        <p className="max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          {data.contactSubtext}
        </p>
        <input
          type="text"
          placeholder="Name"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-2 text-center"
        />
        <input
          type="text"
          placeholder="Message"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700 p-2 h-[150px] text-center"
        />
        <button className="mt-4 inline-flex h-12 w-[40%] animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-bold text-lg  transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 z-10 relative">
          Submit
        </button>
      </div>
    </div>
  );
}
