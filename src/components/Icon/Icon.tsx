import { cls } from "@core/styles/cls";
import { getColorHex } from "@core/styles/colors";
import type { Color } from "@core/styles/theme";
import React from "react";
import { Icon, icons } from "./icons";

interface IconProps {
  name: Icon;
  className?: string;
  bg?: Color;
  size?: "small" | "medium" | "large";
  color?: Color;
}

const Icon = ({ name, className, bg, color, size = "medium", ...props }: IconProps) => (
  <div
    {...props}
    className={cls(
      "text-2xl flex items-center justify-center",
      {
        "text-xs": size === "small",
        "text-md": size === "medium",
        "text-lg": size === "large",
      },

      className
    )}
    style={{
      ...(color && { color: getColorHex(color) }),
      ...(bg && { backgroundColor: getColorHex(bg) }),
    }}
  >
    {icons[name]}
  </div>
);

export default Icon;
