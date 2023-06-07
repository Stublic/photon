import React from "react";
import Search from "../components/Search";

const Header = () => {
  return (
    <div className="m-4">
      <h1 className="text-lg">Photon</h1>
      <Search />
    </div>
  );
};

export default Header;
