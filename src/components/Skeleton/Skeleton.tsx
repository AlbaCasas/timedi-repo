import { cls } from "@core/styles/cls";
import SkeletonRL from "react-loading-skeleton";

interface SkeletonProps {
  lines?: number;
  height?: number;
  width?: number;
  radius?: number;
  className?: string;
  circle?: boolean;
  containerClassName?: string;
}

const Skeleton = ({ lines = 1, height, width, radius, className, circle, containerClassName }: SkeletonProps) => {
  return (
    <SkeletonRL
      className={cls("h-full", className)}
      count={lines}
      height={height}
      width={width}
      containerClassName={cls("h-full", containerClassName)}
      circle={circle}
      style={{ borderRadius: radius }}
    />
  );
};

export default Skeleton;
