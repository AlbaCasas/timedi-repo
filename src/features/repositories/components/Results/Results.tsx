import Column from "@components/Column";
import Row from "@components/Row";
import Table from "@components/Table";
import Tag from "@components/Tag";
import Text from "@components/Text";
import React from "react";
import Skeleton from "@components/Skeleton";

import type { RepositoriesResult, Repository } from "../../types";
import { columns } from "./makeTable";
import Icon from "@components/Icon";

const ExpandedRow = ({ topics, description, id }: Repository) => {
  const hasDetails = description || topics.length;

  return hasDetails ? (
    <Column className="gap-3 w-full" key={id}>
      {description && (
        <Column className="gap-1">
          <Text small bold>
            Description
          </Text>
          <Text small>{description}</Text>
        </Column>
      )}
      {!!topics.length && (
        <Row className="gap-2 flex-wrap items-center">
          {topics.map((topic) => (
            <Tag key={topic}>{topic}</Tag>
          ))}
        </Row>
      )}
    </Column>
  ) : (
    <Text small>No details available</Text>
  );
};

const Results = ({
  items,
  isFetching,
  isError,
}: {
  items?: RepositoriesResult["items"];
  isFetching?: boolean;
  isError?: boolean;
}) => {
  return (
    <Column className="overflow-x-auto">
      <Table
        data={items}
        columns={columns}
        rowKey="id"
        loading={isFetching}
        error={isError}
        className="min-w-[900px]"
        onExpandRender={(repository: Repository) => <ExpandedRow {...repository} />}
        onEmptyRender={() => (
          <Row className="w-full px-5 md:justify-center py-3">
            <Text color="lightText">No data</Text>
          </Row>
        )}
        onLoadingRender={() => (
          <Column className="gap-2 w-full px-3 py-2">
            {[...Array(5)].map((_, i) => {
              return <Skeleton key={`skeleton-table-${i}`} height={64} />;
            })}
          </Column>
        )}
        onErrorRender={() => (
          <Row className="w-full px-5 md:justify-center py-3 items-center gap-2">
            <Icon name="error" className="text-error text-lg" />
            <Text color="lightText">There has been an error with the request, please try again</Text>
          </Row>
        )}
      />
    </Column>
  );
};

export default Results;
