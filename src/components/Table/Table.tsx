/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import type { PropsWithChildren } from "react";
import RCTable from "rc-table";

import { cls } from "@core/styles/cls";

import { Wrapper, HeaderThead, HeaderTd, BodyThead, BodyTd, BodyTr, ExpandIcon } from "./components";

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
