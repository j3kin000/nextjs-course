import React, { FC, Fragment, ReactNode } from "react";
import MainNavigation from "./main-navigation";

export type LayoutProps = {
  children: ReactNode;
};
const Layout: FC<LayoutProps> = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      {props.children}
    </Fragment>
  );
};

export default Layout;
