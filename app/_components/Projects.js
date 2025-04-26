import Project from "@/app/_components/Project";
import TypingText from "@/app/_components/TypingText";
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import {
  SiCssmodules,
  SiFramer,
  SiLeaflet,
  SiReactquery,
  SiReactrouter,
  SiRedux,
} from "react-icons/si";
import SectionAnimate from "@/app/_components/SectionAnimate";

function Projects() {
  return (
    <SectionAnimate id="projects">
      <h2 className="mt-15">
        <TypingText text="Projects" />
      </h2>
      <ul className="flex flex-col items-center gap-20 py-5 md:p-10 xl:gap-35">
        <Project
          image="/projects/project-1.png"
          title="Nextjs Portfolio"
          description=" A responsive e-commerce web application built for a computer shop.
                Developed with React and styled using Tailwind CSS, it offers a
                clean, user-friendly UI. Key features include browsing, sorting,
                filtering, order management, and configurable shipping settings. The
                app also uses react-hot-toast for real-time notifications,
                delivering a smooth and interactive user experience."
          icons={[
            <RiNextjsFill
              size={25}
              className="text-gray-600 dark:text-gray-400"
              key="FaReact"
              title="Next.js"
            />,
            <RiTailwindCssFill
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="SiReactquery"
              title="Tailwind CSS"
            />,
            <SiFramer
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="RiTailwindCssFill"
              title="Framer Motion"
            />,
          ]}
        />
        <Project
          image="/projects/project-2.png"
          title="e-tech-zone"
          description="A responsive e-commerce web application built for a computer shop.
                Developed with React and styled using Tailwind CSS, it offers a
                clean, user-friendly UI. Key features include browsing, sorting,
                filtering, order management, and configurable shipping settings. The
                app also uses react-hot-toast for real-time notifications,
                delivering a smooth and interactive user experience."
          icons={[
            <FaReact
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="FaReact"
              title="React"
            />,
            <RiTailwindCssFill
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="RiTailwindCssFill"
              title="Tailwind CSS"
            />,
            <SiReactquery
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="SiReactquery"
              title="React Query"
            />,
            <SiReactrouter
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="SiReactrouter"
              title="React Router"
            />,
          ]}
        />
        <Project
          image="/projects/project-3.png"
          title="popcorn Vibe"
          description="React.js web application that allows users to search for movies via the OMDb API, view movie details, manage a personal watchlist, and rate films. It uses Redux for global state management, React Router for client-side navigation, and CSS Modules for modular, scoped styling."
          icons={[
            <FaReact
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="FaReact"
              title="React"
            />,
            <SiCssmodules
              size={25}
              className="text-gray-700 dark:text-gray-400"
              key="RiTailwindCssFill"
              style={{ strokeWidth: 0.4 }}
              title="CSS Modules"
            />,

            <SiRedux
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="SiRedux"
              title="Redux"
            />,
            <SiReactrouter
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="SiReactrouter"
              title="React Router"
            />,
          ]}
        />
        <Project
          image="/projects/project-4.png"
          title="Map Mate"
          description="Simple JavaScript app that helps you log your day-to-day tasks and running workouts on an interactive Leaflet map, based on your current location. Built using OOP principles, it allows you to add, view, and store location-based tasks with ease. Your data is saved locally using LocalStorage."
          icons={[
            <FaJs
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="FaReact"
              title="Java Script"
            />,
            <FaHtml5
              size={25}
              className="text-gray-600 dark:text-gray-400"
              key="FaHtml5"
              title="HTML5"
            />,
            <FaCss3Alt
              size={25}
              className="text-gray-600 dark:text-gray-400"
              key="RiTailwindCssFill"
              title="Global CSS"
            />,

            <SiLeaflet
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="SiReactrouter"
              title="Leaflet"
            />,
          ]}
        />
      </ul>
    </SectionAnimate>
  );
}

export default Projects;
