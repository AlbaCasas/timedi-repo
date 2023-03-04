import React from "react";

import type { Color } from "@/core/styles/theme";
import { getColorHex } from "@/core/styles/colors";
import { cls } from "@/core/styles/cls";

interface RowProps {
  children: React.ReactNode;
  bg?: Color;
  className?: string;
}

const Row = ({ children, bg, className }: RowProps) => {
  return (
    <div className={cls("flex", className)} style={bg && { backgroundColor: getColorHex(bg) }}>
      {children}
    </div>
  );
};

export default Row;
