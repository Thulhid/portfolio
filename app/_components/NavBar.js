import { AiOutlineMenu } from "react-icons/ai";
import { RiMenuFold3Line } from "react-icons/ri";

const scrollToSection = (id) => {
  const yOffset = -100; // Adjust this to match your navbar height
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

function NavBar({ onIsToggleMenu }) {
  return (
    <ul className="flex items-center gap-4 text-lg font-medium">
      <li className="hidden font-mono xl:block">
        {" "}
        <a
          href="#intro"
          className="text-xl text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-sky-300"
        >
          Home
        </a>
      </li>
      <li className="hidden font-mono xl:block">
        {" "}
        <a
          className="text-xl text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-sky-300"
          href="#projects"
        >
          Projects
        </a>
      </li>
      <li className="hidden font-mono xl:block">
        {" "}
        <a
          className="text-xl text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-sky-300"
          href="#skills"
        >
          Skills
        </a>
      </li>
      <li className="hidden font-mono xl:block">
        {" "}
        <a
          className="text-xl text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-sky-300"
          href="#education"
        >
          Education
        </a>
      </li>
      <li className="inline-flex items-center xl:hidden">
        <button onClick={() => onIsToggleMenu((cur) => !cur)}>
          <RiMenuFold3Line className="cursor-pointer text-2xl text-gray-700" />
        </button>
      </li>
    </ul>
  );
}

export default NavBar;
