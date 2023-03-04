import { getColorHex } from "@/core/styles/colors";
import { cls } from "@/core/styles/cls";
import type { Color } from "@/core/styles/theme";

interface TextProps {
  color?: Color;
  body?: boolean;
  title?: boolean;
  children: React.ReactNode;
  subtitle?: boolean;
  bold?: boolean;
  pointer?: boolean;
  className?: string;
}

const Text = ({ color, body, title, children, subtitle, bold, pointer, className }: TextProps) => {
  return (
    <span
      className={cls(
        "text-text",
        {
          "text-md font-light": body,
          "text-xl font-regular": title,
          "text-lg font-regular": subtitle,
          "text-md font-bold": bold,
          "cursor-pointer": pointer,
        },
        className
      )}
      style={
        color && {
          color: getColorHex(color),
        }
      }
    >
      {children}
    </span>
  );
};

export default Text;
