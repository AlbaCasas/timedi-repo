"use client";

import React from "react";
import type { SyntheticEvent } from "react";

import { cls } from "@core/styles/cls";
import Row from "@components/Row";
import Column from "@components/Column";
import type { Color } from "@core/styles/theme";
import type { Icon } from "@components/Icon/icons";

import IconComponent from "../Icon";

interface InputProps {
  className?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  color?: Color;
  icon?: Icon;
  label?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: SyntheticEvent) => void;
  onFocus?: (e: SyntheticEvent) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, label, name, defaultValue, placeholder, onChange, onBlur, onFocus }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [innerValue, setInnerValue] = React.useState(defaultValue);

    const hasContent = !!innerValue;

    return (
      <Column className="w-full gap-1">
        <Row
          className={cls(
            "bg-white relative rounded-md border-[1px] border-gray text-text focus-within:border-dark",
            {
              "hover:border-dark": !isFocused,
            },
            className
          )}
        >
          <label
            htmlFor={name}
            className={cls(
              "bg-white absolute top-2 left-[10px] px-2 origin-left text-lightText transition duration-200 ease-in",
              {
                "-translate-y-[20px] scale-[85%] transform z-10 rounded-md": isFocused || hasContent,
              }
            )}
          >
            {label}
          </label>
          <input
            onFocus={(e: SyntheticEvent) => {
              setIsFocused(true);
              if (onFocus) onFocus(e);
            }}
            onBlur={(e: SyntheticEvent) => {
              setIsFocused(false);
              if (onBlur) onBlur(e);
            }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInnerValue(e.target.value);
              if (onChange) onChange(e);
            }}
            className={cls(
              "z-10 block w-full appearance-none bg-[transparent] py-2 placeholder-lightText px-3 focus:outline-none"
            )}
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
            ref={ref}
          />

          {icon && <IconComponent name={icon} color="lightText" className="mr-4" />}
        </Row>
      </Column>
    );
  }
);

Input.displayName = "Input";

export default Input;
