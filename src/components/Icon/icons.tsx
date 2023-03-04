import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";

export const icons = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  externalLink: <FaExternalLinkAlt />,
};

export type Icon = keyof typeof icons;
