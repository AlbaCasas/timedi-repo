import Column from "@components/Column";
import React from "react";
import Results from "../components/Results";
import Search from "../components/Search";

const List = () => {
  return (
    <Column className="gap-3">
      <Column className="w-1/2">
        <Search />
      </Column>
      <Results />
    </Column>
  );
};

export default List;
