import React from "react";
import Router from "next/router";

export default function _error() {
  React.useEffect(() => {
    Router.push("/nextjs-material-dashboard/admin/dashboard");
  });

  return <div />;
}
