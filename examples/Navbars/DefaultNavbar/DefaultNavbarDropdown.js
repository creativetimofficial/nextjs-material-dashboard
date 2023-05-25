/**
=========================================================
* NextJS Material Dashboard 2 - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard-pro
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

import Link from "next/link";

// @mui material components
import Collapse from "@mui/material/Collapse";
import Icon from "@mui/material/Icon";

// NextJS Material Dashboard 2 PRO TS components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

function DefaultNavbarDropdown({
  name,
  icon,
  children,
  collapseStatus,
  light,
  href,
  route,
  collapse,
  ...rest
}) {
  const linkComponent = {
    component: "a",
    href,
    target: "_blank",
    rel: "noreferrer",
  };

  const routeComponent = {
    component: Link,
    href: route,
  };

  const template = (
    <MDBox display="flex" alignItems="baseline">
      {icon && (
        <MDTypography
          variant="body2"
          lineHeight={1}
          color="inherit"
          sx={{ alignSelf: "center", "& *": { verticalAlign: "middle" } }}
        >
          {icon}
        </MDTypography>
      )}
      <MDTypography
        variant="button"
        fontWeight="regular"
        textTransform="capitalize"
        color={light ? "white" : "dark"}
        sx={{ fontWeight: "100%", ml: 1, mr: 0.25 }}
      >
        {name}
      </MDTypography>
      <MDTypography variant="body2" color={light ? "white" : "dark"} ml="auto">
        <Icon sx={{ fontWeight: "normal", verticalAlign: "middle" }}>
          {collapse && "keyboard_arrow_down"}
        </Icon>
      </MDTypography>
    </MDBox>
  );

  return (
    <>
      <MDBox
        {...rest}
        mx={1}
        p={1}
        color={light ? "white" : "dark"}
        opacity={light ? 1 : 0.6}
        sx={{ cursor: "pointer", userSelect: "none" }}
        {...(route && routeComponent)}
        {...(href && linkComponent)}
      >
        {route ? (
          <a style={{ display: "flex", alignItems: "center" }}>{template}</a>
        ) : (
          template
        )}
      </MDBox>
      {children && (
        <Collapse in={Boolean(collapseStatus)} timeout={400} unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  );
}

// Setting default values for the props of DefaultNavbarDropdown
DefaultNavbarDropdown.defaultProps = {
  icon: false,
  children: false,
  collapseStatus: false,
  light: false,
  href: "",
  route: "",
};

// Typechecking props for the DefaultNavbarDropdown
DefaultNavbarDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node,
  children: PropTypes.node,
  collapseStatus: PropTypes.bool,
  light: PropTypes.bool,
  href: PropTypes.string,
  route: PropTypes.string,
  collapse: PropTypes.bool.isRequired,
};

export default DefaultNavbarDropdown;
