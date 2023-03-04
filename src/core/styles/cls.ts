import classnames from "classnames";
import type { ArgumentArray } from "classnames";
import { twMerge } from "tailwind-merge";

/* CLS is a custom wrapper that uses twMerge so we can override conflicting classnames:
  "px-3 bg-red px-4" -> "bg-red px-4",
  "bg-primary bg-red" -> "bg-red",
*/

export const cls = (...args: ArgumentArray) => twMerge(classnames(...args));
