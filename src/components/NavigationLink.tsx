import React from "react";

import { NavLink } from "react-router-dom";

import Button from "@material-ui/core/Button";

interface NavigationLinkProps {
  to: string;
  children: React.ReactNode;
}

function NavigationLink({ to, children }: NavigationLinkProps) {
  return (
    <Button to={to} color="inherit" component={NavLink}>
      {children}
    </Button>
  );
}

export default NavigationLink;
