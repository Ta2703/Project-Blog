import React, { FC } from "react";
import Header from "../Header ";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

type ContentMainProps = {};

const ContentMain: FC<ContentMainProps> = ({}: any) => {
  return (
    <div>
      <Header />
      <div className="contentMain">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default ContentMain;