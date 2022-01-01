import React from "react";
import Header from "./Header";
import SearchBox from "./SearchUser/SearchBox";
import SearchTable from "./SearchUser/SearchTable";

const Search = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <SearchBox />
        <SearchTable />
      </div>
    </div>
  );
};

export default Search;
