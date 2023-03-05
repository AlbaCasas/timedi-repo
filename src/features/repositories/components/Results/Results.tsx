import Column from "@components/Column";
import Row from "@components/Row";
import Table from "@components/Table";
import Tag from "@components/Tag";
import Text from "@components/Text";
import React from "react";
import Skeleton from "@components/Skeleton";

import type { RepositoriesResult, Repository } from "../../types";
import { columns } from "./makeTable";

const ExpandedRow = ({ topics, description, id }: Repository) => {
  return (
    <Column className="gap-3 w-full" key={id}>
      <Row className="gap-1">
        <Text small bold>
          Description:
        </Text>
        <Text small>{description}</Text>
      </Row>
      {!!topics.length && (
        <Row className="gap-2 flex-wrap items-center">
          {topics.map((topic) => (
            <Tag key={topic}>{topic}</Tag>
          ))}
        </Row>
      )}
    </Column>
  );
};

const Results = ({ results, isFetching }: { results?: RepositoriesResult; isFetching: boolean }) => {
  return (
    <Column className="overflow-x-auto">
      <Table
        data={results?.items}
        columns={columns}
        rowKey="id"
        loading={isFetching}
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
      />
    </Column>
  );
};

export default Results;
