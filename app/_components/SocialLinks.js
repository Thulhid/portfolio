import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { CiMenuBurger } from "react-icons/ci";
import { IoMailOutline, IoMenuOutline } from "react-icons/io5";

function SocialLinks() {
  return (
    <ul className="flex gap-2 sm:gap-3">
      <li>
        <AiOutlineLinkedin
          className="cursor-pointer text-blue-700 dark:text-sky-200"
          title="LinkedIn"
        />
      </li>
      <li>
        <AiOutlineGithub
          className="cursor-pointer dark:text-gray-200"
          title="GitHub"
        />
      </li>
      <li>
        <IoMailOutline
          className="cursor-pointer text-red-700 dark:text-red-200"
          title="Gmail"
        />
      </li>
    </ul>
  );
}

export default SocialLinks;
