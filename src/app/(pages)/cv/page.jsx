import React from "react";

export default function Cv() {
  return (
    <>
      <div className="w-full h-[50vh] flex justify-center items-center">
        <a
          download="ahmed-ramadan-cv"
          href="./Ahmed Ramadan CV.pdf"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full tracking-wider"
        >
          Download CV
        </a>
      </div>
    </>
  );
}
