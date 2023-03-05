import Column from "@components/Column";
import React from "react";

import type { RepositoriesResult } from "../types";

const Results = ({ results }: { results?: RepositoriesResult }) => {
  console.log({ results });
  if (!results) return <Column>empty state</Column>;
  return <Column>Results</Column>;
};

export default Results;
