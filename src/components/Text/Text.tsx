import { getColorHex } from "@core/styles/colors";
import { cls } from "@core/styles/cls";
import type { Color } from "@core/styles/theme";

interface TextProps {
  color?: Color;
  small?: boolean;
  tag?: boolean;
  body?: boolean;
  title?: boolean;
  children: React.ReactNode;
  subtitle?: boolean;
  bold?: boolean;
  pointer?: boolean;
  className?: string;
}

const Text = ({ color, small, tag, body, title, children, subtitle, bold, pointer, className }: TextProps) => {
  return (
    <span
      className={cls(
        "text-text text-md font-light",
        {
          "text-xs font-light": tag,
          "text-sm font-light": small,
          "text-md font-light": body,
          "text-xl font-bold": title,
          "text-lg font-bold": subtitle,
          "font-bold": bold,
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
