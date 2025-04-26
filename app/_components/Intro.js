"use client";

import { useEffect, useState } from "react";
import TypingText from "./TypingText";
import { useDisplayLottie } from "@/app/_Hooks/useDisplayLottie";
import SectionAnimate from "@/app/_components/SectionAnimate";
import Button from "@/app/_components/Button";
import { useTheme } from "@/app/_context/ThemeContext";

export default function Intro() {
  const { isDarkMode } = useTheme();

  const { animationData, Lottie } = useDisplayLottie(
    isDarkMode ? "dev-night.json" : "dev-light.json",
  );

  return (
    <SectionAnimate id="intro">
      <h1 className="mt-18 md:mt-28">
        <TypingText text="Hi, I am Hiruna Thulhid" />
      </h1>
      <div className="flex flex-col items-center md:flex-row">
        <div className="order-2 mt-5 flex flex-col items-center md:order-1">
          <p className="mx-3 my-5 max-w-xl space-y-3 text-base text-gray-800 md:mt-10 md:mb-15 xl:text-lg dark:text-gray-300">
            I&apos;m a frontend specialist with deep expertise in React and
            experience building dynamic, scalable applications using tools like
            Redux, React Query, and Next.js. With a solid understanding of UI/UX
            principles and a passion for clean, user-friendly design, I&apos;m a
            motivated developer constantly learning, iterating, and crafting
            meaningful digital experiences.
          </p>
          <Button variant="primary">Download CV</Button>
        </div>
        <div className="order-1 rounded-2xl transition-all duration-300 md:order-2 xl:w-lg dark:w-[15rem] dark:xl:ml-30 dark:xl:w-xs">
          {animationData ? (
            <Lottie animationData={animationData} loop={true} />
          ) : (
            <p className="text-gray-400">Loading animation...</p>
          )}
        </div>
      </div>
    </SectionAnimate>
  );
}
