import React, { FC, Fragment, ReactNode } from "react";
import MainHeader from "./main-header";

export type LayoutType = {
  children: ReactNode;
};
const Layout: FC<LayoutType> = ({ children }) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
