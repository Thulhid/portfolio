import SectionAnimate from "@/app/_components/SectionAnimate";
import TypingText from "@/app/_components/TypingText";
import { motion } from "framer-motion";
import { IoCalendarOutline } from "react-icons/io5";

function Experience() {
  return (
    <SectionAnimate id="experience">
      <h2 className="mt-15">
        <TypingText text="Experience" />
      </h2>
      <motion.div
        className="m-auto max-w-lg rounded-xl border border-blue-400 bg-gradient-to-r from-gray-200 via-blue-200 to-gray-200 bg-[length:200%_200%] p-8 shadow-lg transition-colors duration-300 dark:from-gray-700 dark:via-sky-700 dark:to-gray-700"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      >
        {" "}
        <p className="text-lg text-blue-900 sm:text-2xl dark:text-sky-200">
          Frontend Developer
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Raveen Automation, Siyambalape, Sri Lanka
        </p>
        <p className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
          <IoCalendarOutline />
          <time dateTime="2024-09">Sep 2024</time> -{" "}
          <time dateTime="2025-03">Mar 2025</time>
        </p>
        <p className="my-5 text-sm text-gray-800 sm:text-base dark:text-gray-300">
          Built multiple responsive web and desktop applications, and optimized
          performance using React.js, Redux, React Query, Java, and JavaFX for
          academic project solutions, while collaborating with a small team.
        </p>
      </motion.div>
    </SectionAnimate>
  );
}

export default Experience;
