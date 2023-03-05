/* eslint-disable @typescript-eslint/no-explicit-any */
import type { SyntheticEvent } from "react";

import Icon from "@components/Icon";
import Row from "@components/Row";
import Text from "@components/Text";
import { cls } from "@core/styles/cls";

export const Wrapper = ({ className, ...props }: { className?: string }) => (
  <table {...props} className={cls("w-full shadow-lg", className)} />
);

export const HeaderThead = ({ className, ...props }: { className?: string }) => (
  <thead {...props} className={cls("bg-background ", className)} />
);

export const HeaderTd = ({ className, children, ...props }: { className?: string; children: React.ReactNode }) => (
  <td {...props} className={cls("p-3", className)}>
    <Text small color="lightText">
      {children}
    </Text>
  </td>
);

export const BodyThead = ({ className, ...props }: { className?: string }) => (
  <thead {...props} className={cls("bg-white", className)} />
);

export const BodyTd = ({
  className,
  children,
  loading,
  ...props
}: {
  className?: string;
  loading?: boolean;
  children: React.ReactNode;
}) =>
  loading ? (
    <td {...props} className={cls("py-2", className)}>
      {children}
    </td>
  ) : (
    <td {...props} className={cls("p-3 w-fit", className)}>
      {children}
    </td>
  );

export const BodyTr = ({ className, ...props }: { className?: string }) => (
  <tr {...props} className={cls("border-b-[1px] border-gray last:border-0 ", className)} />
);

export const ExpandIcon = ({
  expanded,
  onExpand,
  record,
}: {
  expanded: boolean;
  onExpand: (record: any, e: any) => void;
  record: any;
}) => (
  <Row className="bg-background w-fit rounded-[100%] p-1 cursor-pointer hover:opacity-80">
    {expanded ? (
      <Icon
        onClick={(e: SyntheticEvent) => onExpand(record, e)}
        name="arrow-up"
        color="lightText"
        className="text-[20px]"
      />
    ) : (
      <Icon
        onClick={(e: SyntheticEvent) => onExpand(record, e)}
        name="arrow-down"
        color="lightText"
        className="text-[20px]"
      />
    )}
  </Row>
);
