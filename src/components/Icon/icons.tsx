import { FaGithub, FaLinkedin, FaExternalLinkAlt, FaSearch, FaStar } from "react-icons/fa";

import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";

export const icons = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  externalLink: <FaExternalLinkAlt />,
  search: <FaSearch />,
  star: <FaStar />,
  "arrow-up": <MdOutlineExpandLess />,
  "arrow-down": <MdOutlineExpandMore />,
};

export type Icon = keyof typeof icons;
