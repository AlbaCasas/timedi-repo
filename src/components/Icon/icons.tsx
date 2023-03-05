import { FaGithub, FaLinkedin, FaExternalLinkAlt, FaSearch, FaStar } from "react-icons/fa";

import {
  MdOutlineExpandLess,
  MdOutlineExpandMore,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdWarning,
} from "react-icons/md";

export const icons = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  externalLink: <FaExternalLinkAlt />,
  search: <FaSearch />,
  star: <FaStar />,
  error: <MdWarning />,
  "arrow-up": <MdOutlineExpandLess />,
  "arrow-down": <MdOutlineExpandMore />,
  "arrow-left": <MdKeyboardArrowLeft />,
  "arrow-right": <MdKeyboardArrowRight />,
};

export type Icon = keyof typeof icons;
