import React from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";

const CustomLink = ({ to, children, ...props }  ) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link style={{ color: match ? "red" : "black" }} to={to} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
