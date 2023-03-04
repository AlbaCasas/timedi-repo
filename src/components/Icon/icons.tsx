import { FaGithub, FaLinkedin, FaExternalLinkAlt, FaSearch } from "react-icons/fa";

export const icons = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  externalLink: <FaExternalLinkAlt />,
  search: <FaSearch />,
};

export type Icon = keyof typeof icons;
