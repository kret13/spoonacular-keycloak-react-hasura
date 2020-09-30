import React from "react";
import NavBar from "../NavBar/NavBar";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="mt-5">{children}</div>
    </div>
  );
};

export default Layout;
