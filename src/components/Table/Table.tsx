/* eslint-disable @typescript-eslint/no-explicit-any */
import { cls } from "@core/styles/cls";
import React from "react";
import type { SyntheticEvent } from "react";

import type { PropsWithChildren } from "react";
import RCTable from "rc-table";
import { Wrapper, HeaderThead, HeaderTd, BodyThead, BodyTd, BodyTr } from "./components";
import Icon from "@components/Icon";
import Row from "@components/Row";

interface TableProps {
  data?: object[];
  columns: object[];
  className?: string;
  loading?: boolean;
  error?: boolean;
  rowKey?: string;
  onEmptyRender?: () => React.ReactNode;
  onErrorRender?: () => React.ReactNode;
  onExpandRender?: (record: any) => React.ReactNode;
  onLoadingRender?: () => React.ReactNode;
}

const ExpandIcon = ({
  expanded,
  onExpand,
  record,
}: {
  expanded: boolean;
  onExpand: (record: any, e: any) => void;
  record: any;
}) => (
  <Row className="bg-background w-fit rounded-[100%] p-1 pointer hover:opacity-80">
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

const Table = ({
  data,
  columns,
  className,
  loading,
  error,
  rowKey,
  onLoadingRender,
  onErrorRender,
  onEmptyRender,
  onExpandRender,
}: TableProps) => {
  const getEmptyText = () => {
    if (error && onErrorRender) return onErrorRender();
    if (loading && onLoadingRender) return onLoadingRender();
    if (onEmptyRender) return onEmptyRender();
  };
  return (
    <RCTable
      data={!loading ? data : undefined}
      columns={columns}
      className={cls("w-full rounded-md border border-gray overflow-hidden", className)}
      emptyText={() => getEmptyText()}
      expandable={
        onExpandRender && {
          expandedRowRender: onExpandRender,
          expandIcon: ExpandIcon,
        }
      }
      components={{
        table: (props: object) => <Wrapper {...props} />,
        header: {
          wrapper: (props: object) => <HeaderThead {...props} />,
          cell: ({ children, ...props }: PropsWithChildren) => <HeaderTd {...props}>{children}</HeaderTd>,
        },
        body: {
          wrapper: (props: object) => <BodyThead {...props} />,
          cell: ({ children, ...props }: PropsWithChildren) => (
            <BodyTd {...props} loading={loading}>
              {children}
            </BodyTd>
          ),
          row: (props: object) => <BodyTr {...props} />,
        },
      }}
      rowKey={rowKey}
    />
  );
};

export default Table;
