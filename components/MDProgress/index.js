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

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// NextJS Material Dashboard 2 PRO components
import MDTypography from "/components/MDTypography";

// Custom styles for MDProgress
import MDProgressRoot from "/components/MDProgress/MDProgressRoot";

const MDProgress = forwardRef(
  ({ variant, color, value, label, ...rest }, ref) => {
    return (
      <>
        {label && (
          <MDTypography variant="button" fontWeight="medium" color="text">
            {value}%
          </MDTypography>
        )}
        <MDProgressRoot
          {...rest}
          ref={ref}
          variant="determinate"
          value={value}
          ownerState={{ color, value, variant }}
        />
      </>
    );
  }
);

// Setting default values for the props of MDProgress
MDProgress.defaultProps = {
  variant: "contained",
  color: "dark",
  value: 0,
  label: false,
};

// Typechecking props for the MDProgress
MDProgress.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  value: PropTypes.number,
  label: PropTypes.bool,
};

MDProgress.displayName = "MDProgress";
export default MDProgress;
