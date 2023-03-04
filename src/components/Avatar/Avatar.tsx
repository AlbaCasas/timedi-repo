import Row from "@components/Row";
import Image from "next/image";
import type { ImageProps } from "next/image";
import React from "react";
import { cls } from "@core/styles/cls";

interface AvatarProps {
  className?: string;
  src: ImageProps["src"];
}

const Avatar = ({ className, src }: AvatarProps) => {
  return (
    <Row className={cls(className, "rounded-[100%] overflow-hidden w-[48px] h-[48px]")}>
      <Image src={src} alt="avatar" />
    </Row>
  );
};

export default Avatar;
