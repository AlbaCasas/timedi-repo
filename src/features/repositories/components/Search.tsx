import Input from "@components/Input";
import React from "react";

const Search = ({ onSearch }: { onSearch: (value?: string) => void }) => {
  const searchRef = React.useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(searchRef.current?.value);
      }}
    >
      <Input label="Search" icon="search" ref={searchRef} />
    </form>
  );
};

export default Search;
