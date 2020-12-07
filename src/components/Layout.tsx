import React from "react";

import Navigation from "./Navigation";

interface LayoutProps {
  children: NonNullable<React.ReactNode>;
}

function Layout(props: LayoutProps) {
  return (
    <>
      <Navigation />
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
