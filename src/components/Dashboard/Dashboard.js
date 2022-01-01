import React from "react";
import AllUsers from "./AllUsers";
import Header from "./Header";
import Search from "./SearchUser/SearchBox";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Search/>
      <AllUsers/>
    </div>
  );
};

export default Dashboard;
