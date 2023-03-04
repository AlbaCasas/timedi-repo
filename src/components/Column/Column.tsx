import React from "react";

import type { Color } from "@core/styles/theme";
import { getColorHex } from "@core/styles/colors";
import { cls } from "@core/styles/cls";

interface ColumnProps {
  children: React.ReactNode;
  bg?: Color;
  className?: string;
}

const Column = ({ children, bg, className }: ColumnProps) => {
  return (
    <div className={cls("flex flex-col", className)} style={bg && { backgroundColor: getColorHex(bg) }}>
      {children}
    </div>
  );
};

export default Column;
