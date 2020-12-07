import React, { Suspense } from "react";

const Navigation = React.lazy(() => import("./Navigation"));

interface LayoutProps {
  children: NonNullable<React.ReactNode>;
}

function Layout(props: LayoutProps) {
  return (
    <>
      <Suspense fallback="">
        <Navigation />
      </Suspense>
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
